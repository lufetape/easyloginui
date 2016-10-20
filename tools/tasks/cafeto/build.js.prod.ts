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
import {
    TMP_DIR,
    TOOLS_DIR
} from '../../config';
import { makeTsProject, templateLocals } from '../../utils';

const plugins = <any>gulpLoadPlugins();

const INLINE_OPTIONS = {
    base: TMP_DIR,
    useRelativePaths: true,
    removeLineBreaks: true
};

/**
 * Executes the build process, transpiling the TypeScript files for the production environment.
 */

export = () => {
    let tsProject = makeTsProject();
    let src = [
        'typings/index.d.ts',
        TOOLS_DIR + '/manual_typings/**/*.d.ts',
        join(TMP_DIR, '**/*.ts')
    ];

    let result = gulp.src(src)
        .pipe(plugins.plumber())
        .pipe(plugins.inlineNg2Template(INLINE_OPTIONS))
        .pipe(plugins.typescript(tsProject))
        .once('error', function () {
            this.once('finish', () => process.exit(1));
        });

    return result.js
        .pipe(plugins.template(templateLocals()))
        .pipe(gulp.dest(TMP_DIR));
};
