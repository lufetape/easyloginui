/** 
 * Type definitions for Color Guard 1.0
 * Project: https://github.com/SlexAxton/css-colorguard/
 * Definitions by: Minko Gechev <https://github.com/mgechev>
 * Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
 * */

declare module 'colorguard' {

    interface IOptions {
        ignore?: string[];
        threshold?: number;
        whitelist?: [string, string][];
        allowEquivalentNotation?: boolean;
    }

    interface IColorguard {
        (opts?: IOptions): NodeJS.ReadWriteStream;
    }

    const colorguard: IColorguard;
    export = colorguard;
}
