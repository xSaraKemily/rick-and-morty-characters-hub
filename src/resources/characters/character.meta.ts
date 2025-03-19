import { CharacterStatusEnum } from "./character-status.enum";

export const CharacterStatusMeta = [
    {
        status: '',
        translation: 'Todos os Status'
    },
    {
        status: CharacterStatusEnum.ALIVE,
        translation: 'Vivo'
    },
    {
        status: CharacterStatusEnum.DEAD,
        translation: 'Morto'
    },
    {
        status: CharacterStatusEnum.UNKNOWN,
        translation: 'Desconhecido'
    }
];

export const CharacterGenderMeta = [
    {
        gender: 'female',
        translation: 'Feminino'
    },
    {
        gender: 'male',
        translation: 'Masculino'
    },
    {
        stagendertus: 'genderless',
        translation: 'Sem gênero'
    },
    {
        gender: 'unknown',
        translation: 'Desconhecido'
    }
];