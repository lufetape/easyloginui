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
import {
    ARTIFACTORY_DATA,
    PACKAGE_DIR
} from '../../config';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { log } from 'gulp-util';

/**
 * Upload project to artifactory after the publish and package tasks.
 */
const plugins = <any>gulpLoadPlugins();

export = () => {
    return gulp.src(PACKAGE_DIR + '/*')
        .pipe(plugins.artifactoryUpload({
            url: ARTIFACTORY_DATA.host + ARTIFACTORY_DATA.repository,
            username: ARTIFACTORY_DATA.username,
            password: ARTIFACTORY_DATA.password,
            rename: (filename: any) => {
                return filename;
            }
        })).on('error', log);
};
