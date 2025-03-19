import { Component, input, ViewChild } from "@angular/core";
import { CharacterDetailsModalComponent } from "../character-details-modal/character-details.modal";
import { CharacterInterface } from "../../resources/characters/character.model";
import { getStatusTranslation } from "../../resources/status/status.helpers";
import { CharacterStatusEnum } from "../../resources/characters/character-status.enum";

@Component({
    selector: 'app-characters-list',
    imports: [CharacterDetailsModalComponent],
    templateUrl: './characters-list.component.html'
  })
  export class CharactersListComponent {
    @ViewChild(CharacterDetailsModalComponent) public modal!: CharacterDetailsModalComponent;

    public characters = input.required<CharacterInterface[]>();

    public openDetails(character: CharacterInterface): void {
        this.modal.openModal(character);
    }

    public getStatusTranslation(status: string|CharacterStatusEnum): string {
      return getStatusTranslation(status);
    }
  }