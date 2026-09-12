import { AvatarEntityBase } from '../AvatarEntityBase';
import type { AvatarSDK } from '../AvatarSDK';
import type { Control } from '../types';
import type { Character, CharacterLoadMatch, CharacterListMatch } from '../AvatarTypes';
declare class CharacterEntity extends AvatarEntityBase<Character> {
    constructor(client: AvatarSDK, entopts: any);
    make(this: CharacterEntity): CharacterEntity;
    load(this: any, reqmatch?: CharacterLoadMatch, ctrl?: Control): Promise<CharacterEntity>;
    list(this: any, reqmatch?: CharacterListMatch, ctrl?: Control): Promise<CharacterEntity[]>;
}
export { CharacterEntity };
