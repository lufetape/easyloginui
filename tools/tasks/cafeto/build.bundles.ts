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
import * as merge from 'merge-stream';

import {
    DEPENDENCIES,
    JS_DEST,
    JS_PROD_SHIMS_BUNDLE
} from '../../config';

const plugins = <any>gulpLoadPlugins();

/**
 * Executes the build process, bundling the shim files.
 */
export = () => merge(bundleShims());

/**
 * Returns the shim files to be injected.
 */
function getShims() {
    let libs = DEPENDENCIES
        .filter(d => /\.js$/.test(d.src));

    return libs.filter(l => l.inject === 'shims')
        .concat(libs.filter(l => l.inject === 'libs'))
        .concat(libs.filter(l => l.inject === true))
        .map(l => l.src);
}

/**
 * Bundles the shim files.
 */
function bundleShims() {
    return gulp.src(getShims())
        .pipe(plugins.uglify({
            mangle: false
        }))
        .pipe(plugins.concat(JS_PROD_SHIMS_BUNDLE))
        .pipe(plugins.replace(/('|")use strict\1;var Reflect;/, 'var Reflect;'))
        .pipe(gulp.dest(JS_DEST));
}
