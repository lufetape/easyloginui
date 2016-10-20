/*
 * This source code is the confidential, proprietary information of
 * Cafeto Software S.A.S. here in, you may not disclose such Information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Cafeto Software S.A.S.
 * 
 * 2016: Cafeto Software S.A.S.
 * All Rights Reserved.
 */

import * as gulp from 'gulp';
import { join } from 'path';

import {
    APP_DEST,
    APP_SRC,
    ASSETS_SRC,
    TEMP_FILES
} from '../../config';

// TODO There should be more elegant to prevent empty directories from copying
let es: any = require('event-stream');
var onlyDirs = function (es: any) {
    return es.map(function (file: any, cb: any) {
        if (file.stat.isFile()) {
            return cb(null, file);
        } else {
            return cb();
        }
    });
};

/**
 * Executes the build process, copying the assets located in `src/client` over to the appropriate
 * `dist/prod` directory.
 */
export = () => {
    return gulp.src([
        join(APP_SRC, '**'),
        '!' + join(APP_SRC, '**', '*.ts'),
        '!' + join(APP_SRC, '**', '*.css'),
        '!' + join(APP_SRC, '**', '*.html'),
        '!' + join(APP_SRC, '**', '*.scss'),
        '!' + join(ASSETS_SRC, '**', '*.js')
    ].concat(TEMP_FILES.map((p) => { return '!' + p; })))
        .pipe(onlyDirs(es))
        .pipe(gulp.dest(APP_DEST));
};
