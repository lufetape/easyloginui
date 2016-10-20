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
import { join, sep, normalize } from 'path';
import * as slash from 'slash';

import {
    APP_DEST,
    APP_SRC,
    CSS_DEST,
    CSS_PROD_BUNDLE,
    JS_DEST,
    JS_PROD_APP_BUNDLE,
    JS_PROD_SHIMS_BUNDLE
} from '../../config';
import { templateLocals } from '../../utils';

const plugins = <any>gulpLoadPlugins();

/**
 * Executes the build process, injecting the JavaScript and CSS dependencies
 * into the `index.html` for the production environment.
 */
export = () => {
    return gulp.src(join(APP_SRC, 'index.html'))
        .pipe(injectJs())
        .pipe(injectCss())
        .pipe(plugins.template(templateLocals()))
        .pipe(gulp.dest(APP_DEST));
};

/**
 * Injects the given file array and transforms the path of the files.
 * @param {Array<string>} files - The files to be injected.
 */
function inject(...files: Array<string>) {
    return plugins.inject(gulp.src(files, { read: false }), {
        files,
        transform: transformPath()
    });
}

/**
 * Injects the bundled JavaScript shims and application bundles for the production environment.
 */
function injectJs() {
    return inject(join(JS_DEST, JS_PROD_SHIMS_BUNDLE), join(JS_DEST, JS_PROD_APP_BUNDLE));
}

/**
 * Injects the bundled CSS files for the production environment.
 */
function injectCss() {
    return inject(join(CSS_DEST, CSS_PROD_BUNDLE));
}

/**
 * Transform the path of a dependency to its location within the `dist` directory
 * according to the applications environment.
 */
function transformPath() {
    return function (filepath: string) {
        let path: Array<string> = normalize(filepath).split(sep);
        arguments[0] = path.slice(3, path.length).join(sep) + `?${Date.now()}`;
        return slash(plugins.inject.transform.apply(plugins.inject.transform, arguments));
    };
}
