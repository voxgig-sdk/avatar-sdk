import { AvatarEntityBase } from '../AvatarEntityBase';
import type { AvatarSDK } from '../AvatarSDK';
import type { Control } from '../types';
import type { Episode, EpisodeLoadMatch, EpisodeListMatch } from '../AvatarTypes';
declare class EpisodeEntity extends AvatarEntityBase<Episode> {
    constructor(client: AvatarSDK, entopts: any);
    make(this: EpisodeEntity): EpisodeEntity;
    load(this: any, reqmatch?: EpisodeLoadMatch, ctrl?: Control): Promise<EpisodeEntity>;
    list(this: any, reqmatch?: EpisodeListMatch, ctrl?: Control): Promise<EpisodeEntity[]>;
}
export { EpisodeEntity };
