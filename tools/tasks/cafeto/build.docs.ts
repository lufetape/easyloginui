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
import { APP_SRC, APP_TITLE, DOCS_DEST } from '../../config';

const plugins = <any>gulpLoadPlugins();

/**
 * Executes the build process, building the documentation for the TypeScript
 * files (excluding spec and e2e-spec files) using `typedoc`.
 */
export = () => {

    let src = [
        join(APP_SRC, '**/*.ts')
    ];

    return gulp.src(src)
        .pipe(plugins.typedoc({
            module: 'commonjs',
            target: 'es5',
            excludeExternals: true,
            includeDeclarations: true,
            out: DOCS_DEST,
            json: join(DOCS_DEST, 'data/docs.json'),
            name: APP_TITLE,
            ignoreCompilerErrors: false,
            experimentalDecorators: true,
            version: true
        }));
};
