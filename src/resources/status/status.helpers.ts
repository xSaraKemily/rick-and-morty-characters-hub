import { CharacterStatusEnum } from "../characters/character-status.enum";
import { CharacterStatusMeta } from "../characters/character.meta";

export function getStatusTranslation(status: string|CharacterStatusEnum): string {
    return CharacterStatusMeta.find(item => item.status == status.toUpperCase())?.translation ?? 'Não Encontrado';
  }