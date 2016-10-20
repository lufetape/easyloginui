/*
 * This source code is the confidential, proprietary information of
 * Cafeto Software S.A.S. here in, you may not disclose such Information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Cafeto Software S.A.S.
 * 
 * 2016: Cafeto Software S.A.S.
 * All Rights Reserved.
 */

import * as browserSync from 'browser-sync';
// import * as path from 'path';

import { getPluginConfig } from '../../config';

/**
 * Initialises BrowserSync with the configuration defined in seed.config.ts (or if overriden: project.config.ts).
 */
let runServer = () => {
    browserSync.init(getPluginConfig('browser-sync'));
};

/**
 * Runs BrowserSync as the listening process for the application.
 */
let listen = () => {
    runServer();
};

/**
 * Provides a flag to mark which files have changed and reloads BrowserSync accordingly.
 */
let changed = (files: any) => {
    if (!(files instanceof Array)) {
        files = [files];
    }
    browserSync.reload(files);
};

export { listen, changed };
