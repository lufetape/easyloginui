/** 
 * Type definitions for Node walk 3.0
 * Project: https://github.com/coolaj86/node-walk
 * Definitions by: Minko Gechev <https://github.com/mgechev>
 * Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
 * */

declare module 'walk' {
    interface Walker {
        on(eventName: string, cb: Function): any;
    }
    interface Walk {
        walk(path: string, options: any): Walker;
    }
    const walk: Walk;
    export = walk;
}
