import { Component, ElementRef, ViewChild } from "@angular/core";
import { CharacterInterface } from "../../resources/characters/character.model";
import { getStatusTranslation } from "../../resources/status/status.helpers";

@Component({
    selector: 'character-details-modal',
    imports: [],
    templateUrl: './character-details.modal.html'
  })
  export class CharacterDetailsModalComponent {
    @ViewChild('modal') private modal!: ElementRef;

    public character?: CharacterInterface;

    public get statusTranslation(): string {
      return getStatusTranslation(this.character?.status ?? '');
    }

    public openModal(character: CharacterInterface): void {
        this.character = character;

        this.modal.nativeElement.showModal();
    }
}