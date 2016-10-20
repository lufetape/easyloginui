/** 
 * Type definitions for IStream 0.1
 * Project: https://github.com/rvagg/isstream/
 * Definitions by: Minko Gechev <https://github.com/mgechev>
 * Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
 * */

declare module 'isstream' {
    function istream(stream: any): boolean;
    interface Istream {
        isReadable(stream: any): boolean;
        isWritable(stream: any): boolean;
        isDuplex(stream: any): boolean;
    }
    module istream { }
    export = istream;
}
