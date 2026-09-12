import { CharacterEntity } from './entity/CharacterEntity';
import { EpisodeEntity } from './entity/EpisodeEntity';
import { QuestionEntity } from './entity/QuestionEntity';
export type * from './AvatarTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { AvatarEntityBase } from './AvatarEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class AvatarSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Character(entopts?: Record<string, any>): CharacterEntity;
    Episode(entopts?: Record<string, any>): EpisodeEntity;
    Question(entopts?: Record<string, any>): QuestionEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): AvatarSDK;
    tester(testopts?: any, sdkopts?: any): AvatarSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof AvatarSDK;
export { stdutil, config, BaseFeature, AvatarEntityBase, AvatarSDK, SDK, };
