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
    APP_SRC,
    TMP_DIR
} from '../../config';

/**
 * Executes the build task, copying all TypeScript files over to the `dist/tmp` directory.
 */
export = () => {
    return gulp.src([
        join(APP_SRC, '**/*.ts'),
        '!' + join(APP_SRC, '**/*.spec.ts'),
        '!' + join(APP_SRC, '**/*.e2e-spec.ts')
    ])
        .pipe(gulp.dest(TMP_DIR));
};
