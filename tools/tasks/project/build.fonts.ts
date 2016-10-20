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
import {FONTS_SRC, FONTS_DEST} from '../../config';

export = () => {
    return gulp.src(FONTS_SRC)
        .pipe(gulp.dest(FONTS_DEST));
};
