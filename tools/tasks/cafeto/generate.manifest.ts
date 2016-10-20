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

import { APP_DEST } from '../../config';

/**
 * Executes the build process, generating the manifest file using `angular2-service-worker`.
 */
export = () => {
    return require('angular2-service-worker')
        .gulpGenManifest({
            group: [{
                name: 'css',
                sources: gulp.src(`${APP_DEST}/**/*.css`)
            }, {
                    name: 'js',
                    sources: gulp.src(`${APP_DEST}/**/*.js`)
                }]
        })
        .pipe(gulp.dest(APP_DEST));
};
