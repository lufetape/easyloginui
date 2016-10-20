/** 
 * Type definitions for PostCSS 1.4.1
 * Project: https://github.com/postcss/postcss-reporter
 * Definitions by: Minko Gechev <https://github.com/mgechev>
 * Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
 * */

declare module 'postcss-reporter' {

    interface IOptions {
        clearMessages?: boolean;
        formatter?: Function;
        plugins?: string[];
        throwError?: boolean;
        sortByPosition?: boolean;
        positionless?: string;
        noIcon?: boolean;
        noPlugin?: boolean;
    }

    interface IPostcssReporter {
        (opts?: IOptions): NodeJS.ReadWriteStream;
    }

    const postcssReporter: IPostcssReporter;
    export = postcssReporter;
}
