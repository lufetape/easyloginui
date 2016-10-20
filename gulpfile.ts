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
import * as runSequence from 'run-sequence';
import { PROJECT_TASKS_DIR, SEED_TASKS_DIR } from './tools/config';
import { loadTasks } from './tools/utils';

loadTasks(SEED_TASKS_DIR);
loadTasks(PROJECT_TASKS_DIR);

/**
 * Build dev.
 * Executes the build process, generates dist/dev
 */
gulp.task('build.dev', (done: any) =>
    runSequence(
        'build.assets.dev',
        'build.fonts',
        'build.html_css',
        'build.js.dev',
        'build.index.dev',
        done));

/**
 * Build dev watch.
 * Executes the build process, generates dist/dev, watching for file changes 
 * and rebuilding the development environment.
 */
gulp.task('build.dev.watch', (done: any) =>
    runSequence('build.dev',
        'watch.dev',
        done));

/**
 * Build prod.
 * Executes the build process, generates dist/prod, minify & lint (css, html, js)
 * and package into a zip file
 */
gulp.task('build.prod', (done: any) =>
    runSequence('clean.prod',
        'tslint',
        'css-lint',
        'build.assets.prod',
        'build.fonts',
        'build.html_css',
        'copy.js.prod',
        'copy.server.js.prod',
        'build.js.prod',
        'build.bundles',
        'build.bundles.app',
        'build.index.prod',
        'build.server.prod',
        'copy.server.assets',
        'copy.server.start',
        'package.prod',
        done));

/**
 * serve dev.
 * Executes the build process, generates dist/dev
 * and serve the app on a livereloading server
 */
gulp.task('serve.dev', (done: any) =>
    runSequence('build.dev',
        'server.start',
        'watch.dev',
        done));

/**
 * Serve prod.
 * Executes the build process, generates dist/prod, minify & lint (css, html, js)
 * and serve the app on a livereloading server
 */
gulp.task('serve.prod', (done: any) =>
    runSequence('build.prod',
        'server.prod',
        done));

/**
 * Docs
 * Executes the typedoc process to generate the code documentation
 */
gulp.task('docs', (done: any) =>
    runSequence('build.docs',
        done));