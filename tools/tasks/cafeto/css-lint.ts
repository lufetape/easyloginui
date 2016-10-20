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
import * as reporter from 'postcss-reporter';
import * as stylelint from 'stylelint';
import { join } from 'path';
import {
    APP_ASSETS,
    APP_SRC,
    CSS_SRC,
    ENV,
    DEPENDENCIES,
    ENABLE_SCSS
} from '../../config';

const plugins = <any>gulpLoadPlugins();

const isProd = ENV === 'prod';
var stylesheetType = ENABLE_SCSS ? 'scss' : 'css';

const processors = [
    stylelint(),
    reporter({ clearMessages: true })
];

function lintComponentStylesheets() {
    return gulp.src([
        join(APP_SRC, '**', `*.${stylesheetType}`),
        `!${join(APP_SRC, 'assets', '**', '*.scss')}`,
        `!${join(CSS_SRC, '**', '*.css')}`
    ]).pipe(isProd ? plugins.cached('css-lint') : plugins.util.noop())
        .pipe(ENABLE_SCSS ? plugins.sassLint() : plugins.postcss(processors))
        .pipe(ENABLE_SCSS ? plugins.sassLint.format() : plugins.util.noop())
        .pipe(ENABLE_SCSS ? plugins.sassLint.failOnError() : plugins.util.noop());
}

function lintExternalStylesheets() {
    return gulp.src(getExternalStylesheets().map(r => r.src))
        .pipe(isProd ? plugins.cached('css-lint') : plugins.util.noop())
        .pipe(ENABLE_SCSS ? plugins.sassLint() : plugins.postcss(processors))
        .pipe(ENABLE_SCSS ? plugins.sassLint.format() : plugins.util.noop())
        .pipe(ENABLE_SCSS ? plugins.sassLint.failOnError() : plugins.util.noop());
}

function getExternalStylesheets() {
    let stylesheets = ENABLE_SCSS ? DEPENDENCIES : APP_ASSETS;
    return stylesheets
        .filter(d => new RegExp(`\.${stylesheetType}$`)
            .test(d.src) && !d.vendor);
}

/**
 * Executes the build process, linting the component and external CSS files using `stylelint`.
 */
export = () => merge(lintComponentStylesheets(), lintExternalStylesheets());
