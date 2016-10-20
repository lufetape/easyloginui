/*
 * This source code is the confidential, proprietary information of
 * Cafeto Software S.A.S. here in, you may not disclose such Information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Cafeto Software S.A.S.
 * 
 * 2016: Cafeto Software S.A.S.
 * All Rights Reserved.
 */

import { join } from 'path';
import * as Builder from 'systemjs-builder';

import {
    BOOTSTRAP_MODULE,
    JS_PROD_APP_BUNDLE,
    JS_DEST,
    SYSTEM_BUILDER_CONFIG,
    TMP_DIR
} from '../../config';

const BUNDLER_OPTIONS = {
    format: 'cjs',
    minify: true,
    mangle: false
};

/**
 * Executes the build process, bundling the JavaScript files using the SystemJS builder.
 */
export = (done: any) => {
    let builder = new Builder(SYSTEM_BUILDER_CONFIG);
    builder
        .buildStatic(join(TMP_DIR, BOOTSTRAP_MODULE),
        join(JS_DEST, JS_PROD_APP_BUNDLE),
        BUNDLER_OPTIONS)
        .then(() => done())
        .catch(err => done(err));
};
