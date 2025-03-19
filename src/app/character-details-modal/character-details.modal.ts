import { Component, ElementRef, ViewChild } from "@angular/core";
import { CharacterInterface } from "../../resources/characters/character.model";
import { getStatusTranslation } from "../../resources/status/status.helpers";
import { CharacterGenderMeta } from "../../resources/characters/character.meta";

@Component({
    selector: 'character-details-modal',
    imports: [],
    templateUrl: './character-details.modal.html'
  })
  export class CharacterDetailsModalComponent {
    @ViewChild('modal') private modal!: ElementRef;

    public characterGenderMeta = CharacterGenderMeta;
    
    public character?: CharacterInterface;

    public get statusTranslation(): string {
      return getStatusTranslation(this.character?.status ?? '');
    }

    public get genderTranslation(): string {
      return CharacterGenderMeta.find(item => item.gender === this.character?.gender.toLocaleLowerCase())?.translation ?? 'Não encontrado';
    }

    public openModal(character: CharacterInterface): void {
        this.character = character;

        this.modal.nativeElement.showModal();
    }
}