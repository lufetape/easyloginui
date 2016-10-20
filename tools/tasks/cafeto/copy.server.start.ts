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
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join } from 'path';

import { SERVER_INIT_SRC, PROD_DEST } from '../../config';

const plugins = <any>gulpLoadPlugins();

export = () => {
    return gulp.src([join(SERVER_INIT_SRC, '*.js'), join(SERVER_INIT_SRC, '*.json')])
        .pipe(plugins.plumber())
        .pipe(gulp.dest(PROD_DEST))
        .once('error', function () {
            this.once('finish', () => process.exit(1));
        });
};
