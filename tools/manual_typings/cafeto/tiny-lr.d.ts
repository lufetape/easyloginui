/** 
 * Type definitions for Tiny Live Reload
 * Project: https://github.com/mklabs/tiny-lr
 * Definitions by: Minko Gechev <https://github.com/mgechev>
 * Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
 * */

declare module 'tiny-lr' {
    function tinylr(): ITinylr;
    module tinylr { }
    export = tinylr;

    interface ITinylr {
        changed(options: any): void;
        listen(port: number): void;
    }
}
