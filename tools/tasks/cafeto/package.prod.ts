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
import { argv } from 'yargs';
import {
    APP_DEST,
    VERSION,
    NAME,
    PACKAGE_DIR
} from '../../config';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { log } from 'gulp-util';
/**
 * Generate a zip version of distribution folder.
 */

const plugins = <any>gulpLoadPlugins();

export = () => {
    let build = argv['build'] || '';
    return gulp.src(APP_DEST + '/**/*')
        .pipe(plugins.zip(NAME + '-' + VERSION + '-' + build + '.zip'))
        .pipe(gulp.dest(PACKAGE_DIR))
        .on('error', log);
};
