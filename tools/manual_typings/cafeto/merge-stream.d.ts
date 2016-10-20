/** 
 * Type definitions for MergeStream 1.0
 * Project: https://github.com/grncdr/merge-stream
 * Definitions by: Minko Gechev <https://github.com/mgechev>
 * Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
 * */

declare module 'merge-stream' {
    function mergeStream(...streams: NodeJS.ReadWriteStream[]): MergeStream;
    interface MergeStream extends NodeJS.ReadWriteStream {
        add(stream: NodeJS.ReadWriteStream): MergeStream;
    }
    module mergeStream { }
    export = mergeStream;
}
