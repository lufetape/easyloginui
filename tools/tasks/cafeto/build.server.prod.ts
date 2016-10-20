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

import { TMP_SERVER_DIR, TOOLS_DIR, APP_SERVER_DEST } from '../../config';
import { makeTsProject } from '../../utils';

const plugins = <any>gulpLoadPlugins();

/**
 * Executes the build process, transpiling the TypeScript files for the production environment.
 */

export = () => {
    let tsProject = makeTsProject();
    let src = [
        'typings/index.d.ts',
        TOOLS_DIR + '/manual_typings/**/*.d.ts',
        join(TMP_SERVER_DIR, '**/*.ts')
    ];
    let result = gulp.src(src)
        .pipe(plugins.plumber())
        .pipe(plugins.typescript(tsProject))
        .once('error', function () {
            this.once('finish', () => process.exit(1));
        });


    return result.js
        .pipe(gulp.dest(APP_SERVER_DEST));
};
