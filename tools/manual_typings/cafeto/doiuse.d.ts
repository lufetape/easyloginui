/** 
 * Type definitions for DoIUse Lint CSS 2.0
 * Project: https://github.com/anandthakker/doiuse/
 * Definitions by: Minko Gechev <https://github.com/mgechev>
 * Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
 * */

declare module 'doiuse' {

    interface IOptions {
        browsers?: string[];
        ignore?: string[];
        ignoreFiles?: string[];
        onFeatureUsage?: Function;
    }

    interface IDoiuse {
        (opts?: IOptions): NodeJS.ReadWriteStream;
    }

    const doiuse: IDoiuse;
    export = doiuse;
}
