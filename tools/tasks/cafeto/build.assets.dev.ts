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
    TEMP_FILES
} from '../../config';

/**
 * Executes the build process, copying the assets located in `src/client` over to the appropriate
 * `dist/dev` directory.
 */
export = () => {
    let paths: string[] = [
        join(APP_SRC, '**'),
        '!' + join(APP_SRC, '**', '*.ts'),
        '!' + join(APP_SRC, '**', '*.scss')
    ].concat(TEMP_FILES.map((p) => { return '!' + p; }));

    return gulp.src(paths)
        .pipe(gulp.dest(APP_DEST));
};
