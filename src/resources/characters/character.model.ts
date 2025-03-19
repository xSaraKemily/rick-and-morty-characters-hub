import { CharacterStatusEnum } from "./character-status.enum";

export interface CharacterInterface {
    id: number,
    total_episodes: number,
    name: string,
    gender: string,
    location_name: string,
    origin: string,
    specie: string,
    image: string
    status: CharacterStatusEnum
}