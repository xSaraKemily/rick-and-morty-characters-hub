import { CharacterInterface } from '../resources/characters/character.model';
import { CharactersService } from '../resources/characters/characters.service';
import { Component, DestroyRef, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharacterStatusMeta } from '../resources/characters/character.meta';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CharactersListComponent],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  @ViewChild('nameInput') public nameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('statusSelect') public statusSelect!: ElementRef<HTMLSelectElement>;

  public queryInfo: any;
  public characters?: CharacterInterface[];
  public currentPage: number = 1;

  public characterStatusMeta = CharacterStatusMeta;

  private charactersService = inject(CharactersService);
  private destroyRef = inject(DestroyRef);
  
  public ngOnInit(): void {
    this.loadCharacters();
  }

  public changePage(isNext?: boolean): void {
    this.charactersService.getByPage(isNext ? this.queryInfo.next : this.queryInfo.prev)
    .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => this.bindRequestResult(data, isNext ? this.currentPage + 1 : this.currentPage - 1),
        error: (error) => this.handleRequestError(error)
      });
  }

  public loadCharacters(): void {
    this.charactersService.getCharacters(this.nameInput?.nativeElement?.value, this.statusSelect?.nativeElement?.value)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => this.bindRequestResult(data, 1),
        error: (error) => this.handleRequestError(error)
      });
  }

  private bindRequestResult(data: any, currentPage: number): void {
    this.characters = this.formatCharacters(data?.results);
    this.queryInfo = data?.info;
    this.currentPage = currentPage;
  }

  private formatCharacters(data: any): CharacterInterface[] {
    return data?.map((item: any) => {
       return {
         id: item.id,
         total_episodes: item.episode.length,
         name: item.name,
         gender: item.gender,
         location_name: item.location.name,
         origin: item.origin.name,
         specie: item.species,
         image: item.image,
         status: item.status
       } as CharacterInterface;
    });
   }


   private handleRequestError(error: any): void {
      if (error.status === 404) {
        this.bindRequestResult([], 1);
      }
   }
}
