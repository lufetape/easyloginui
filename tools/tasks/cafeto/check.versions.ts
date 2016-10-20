/*
 * This source code is the confidential, proprietary information of
 * Cafeto Software S.A.S. here in, you may not disclose such Information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Cafeto Software S.A.S.
 * 
 * 2016: Cafeto Software S.A.S.
 * All Rights Reserved.
 */

import * as util from 'gulp-util';
import {
    VERSION_NODE,
    VERSION_NPM
} from '../../config';

function reportError(message: string) {
    console.error(util.colors.white.bgRed.bold(message));
    process.exit(1);
}

/**
 * Executes the build process, verifying that the installed NodeJS and NPM version matches the required versions as
 * defined in the application configuration.
 */
export = () => {
    let exec = require('child_process').exec;
    let semver = require('semver');

    exec('npm --version',
        function (error: Error, stdout: NodeBuffer, stderr: NodeBuffer) {
            if (error !== null) {
                reportError('npm preinstall error: ' + error + stderr);
            }

            if (!semver.gte(stdout, VERSION_NPM)) {
                reportError('NPM is not in required version! Required is '
                + VERSION_NPM + ' and you\'re using ' + stdout);
            }
        });

    exec('node --version',
        function (error: Error, stdout: NodeBuffer, stderr: NodeBuffer) {
            if (error !== null) {
                reportError('npm preinstall error: ' + error + stderr);
            }

            if (!semver.gte(stdout, VERSION_NODE)) {
                reportError('NODE is not in required version! Required is '
                + VERSION_NODE + ' and you\'re using ' + stdout);
            }
        });
};
