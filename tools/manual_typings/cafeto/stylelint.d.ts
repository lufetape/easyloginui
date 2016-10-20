/** 
 * Type definitions for Stylint 7.0
 * Project: https://github.com/stylelint/stylelint
 * Definitions by: Minko Gechev <https://github.com/mgechev>
 * Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
 * */

declare module 'stylelint' {

    interface IOptions {
        config?: Object;
        configFile?: string;
        configBasedir?: string;
        configOverrides?: Object;
    }

    interface IStylelint {
        (opts?: IOptions): NodeJS.ReadWriteStream;
    }

    const stylelint: IStylelint;
    export = stylelint;
}
