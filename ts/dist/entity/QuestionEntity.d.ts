import { AvatarEntityBase } from '../AvatarEntityBase';
import type { AvatarSDK } from '../AvatarSDK';
import type { Control } from '../types';
import type { Question, QuestionLoadMatch, QuestionListMatch } from '../AvatarTypes';
declare class QuestionEntity extends AvatarEntityBase<Question> {
    constructor(client: AvatarSDK, entopts: any);
    make(this: QuestionEntity): QuestionEntity;
    load(this: any, reqmatch?: QuestionLoadMatch, ctrl?: Control): Promise<QuestionEntity>;
    list(this: any, reqmatch?: QuestionListMatch, ctrl?: Control): Promise<QuestionEntity[]>;
}
export { QuestionEntity };
