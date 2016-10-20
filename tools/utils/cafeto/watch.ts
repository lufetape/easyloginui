/*
 * This source code is the confidential, proprietary information of
 * Cafeto Software S.A.S. here in, you may not disclose such Information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Cafeto Software S.A.S.
 * 
 * 2016: Cafeto Software S.A.S.
 * All Rights Reserved.
 */

import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join } from 'path';
import * as runSequence from 'run-sequence';

import {
    APP_SRC,
    TEMP_FILES
} from '../../config';
import { notifyLiveReload } from '../../utils';

const plugins = <any>gulpLoadPlugins();

/**
 * Watches the task with the given taskname.
 * @param {string} taskname - The name of the task.
 */
export function watch(taskname: string) {
    return function () {
        let paths: string[] = [
            join(APP_SRC, '**')
        ].concat(TEMP_FILES.map((p) => { return '!' + p; }));

        plugins.watch(paths, (e: any) =>
            runSequence(taskname, () => notifyLiveReload(e))
        );
    };
}
