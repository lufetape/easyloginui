/** 
 * Type definitions for Autoprefixer Core 5.1.11
 * Project: https://github.com/postcss/autoprefixer-core
 * Definitions by: Asana <https://asana.com>
 * Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
 * */

declare module 'autoprefixer' {

    interface IOptions {
        browsers: string[];
    }

    interface IAutoprefixer {
        (opts?: IOptions): NodeJS.ReadWriteStream;
    }

    const autoprefixer: IAutoprefixer;
    export = autoprefixer;
}
