/*
 * This source code is the confidential, proprietary information of
 * Cafeto Software S.A.S. here in, you may not disclose such Information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Cafeto Software S.A.S.
 * 
 * 2016: Cafeto Software S.A.S.
 * All Rights Reserved.
 */

declare module 'postcss-assets' {

    interface IOptions {
        loadPaths?: string[];
        basePath?: string;
        baseUrl?: string;
        relative?: string;
        cachebuster?: boolean | Function;
    }

    interface IAssets {
        (opts?: IOptions): NodeJS.ReadWriteStream;
    }

    const assets: IAssets;
    export = assets;
}
