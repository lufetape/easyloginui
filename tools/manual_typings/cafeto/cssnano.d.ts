/** 
 * Type definitions for CSS Nano Core 3.5
 * Project: https://github.com/ben-eb/cssnano
 * Definitions by: Minko Gechev <https://github.com/mgechev>
 * Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
 * */

declare module 'cssnano' {

    interface IOptions {
        discardComments?: {
            removeAll: boolean;
        };
        discardUnused?: boolean;
        zindex?: boolean;
        reduceIdents?: boolean;
    }

    interface ICssnano {
        (opts?: IOptions): NodeJS.ReadWriteStream;
    }

    const cssnano: ICssnano;
    export = cssnano;
}
