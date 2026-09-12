import { Context } from './Context';
declare class AvatarError extends Error {
    isAvatarError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { AvatarError };
