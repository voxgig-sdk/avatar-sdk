export interface Character {
    affiliation?: string;
    allies?: any[];
    enemies?: any[];
    id?: number;
    name?: string;
    photoUrl?: string;
    position?: string;
}
export interface CharacterLoadMatch {
    id: number;
}
export interface CharacterListMatch {
    affiliation?: string;
    allies?: any[];
    enemies?: any[];
    id?: number;
    name?: string;
    photoUrl?: string;
    position?: string;
}
export interface Episode {
    airDate?: string;
    director?: string;
    episodeNum?: number;
    id?: number;
    season?: number;
    title?: string;
    writer?: string;
}
export interface EpisodeLoadMatch {
    id: number;
}
export interface EpisodeListMatch {
    airDate?: string;
    director?: string;
    episodeNum?: number;
    id?: number;
    season?: number;
    title?: string;
    writer?: string;
}
export interface Question {
    answer?: string;
    difficulty?: string;
    id?: number;
    question?: string;
}
export interface QuestionLoadMatch {
    id: number;
}
export interface QuestionListMatch {
    answer?: string;
    difficulty?: string;
    id?: number;
    question?: string;
}
