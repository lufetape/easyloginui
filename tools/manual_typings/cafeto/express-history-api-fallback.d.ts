/** 
 * Type definitions for Express history api Fallback 2.0
 * Project: https://github.com/cbas/express-history-api-fallback
 * Definitions by: Minko Gechev <https://github.com/mgechev>
 * Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
 * */

declare module 'express-history-api-fallback' {

    import { RequestHandler } from 'express';

    interface IOptions {
        maxAge?: number;
        root?: string;
        lastModified?: number;
        headers?: { [key: string]: string; };
        dotfiles?: boolean;
    }

    function fallback(index: string, options?: IOptions): RequestHandler;

    module fallback { }

    export = fallback;
}
