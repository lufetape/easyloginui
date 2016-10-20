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
    APP_SRC,
    CODELYZER_RULES,
    TOOLS_DIR
} from '../../config';

const plugins = <any>gulpLoadPlugins();

/**
 * Executes the build process, linting the TypeScript files using `codelyzer`.
 */
export = () => {
    let src = [
        join(APP_SRC, '**/*.ts'),
        '!' + join(APP_SRC, '**/*.d.ts'),
        join(TOOLS_DIR, '**/*.ts'),
        '!' + join(TOOLS_DIR, '**/*.d.ts')
    ];

    return gulp.src(src)
        .pipe(plugins.tslint({
            rulesDirectory: CODELYZER_RULES
        }))
        .pipe(plugins.tslint.report(require('tslint-stylish'), {
            emitError: true,
            sort: true,
            bell: true
        }));
};
