/*
 * This source code is the confidential, proprietary information of
 * Cafeto Software S.A.S. here in, you may not disclose such Information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Cafeto Software S.A.S.
 * 
 * 2016: Cafeto Software S.A.S.
 * All Rights Reserved.
 */

import { argv } from 'yargs';
import * as CONFIG from '../../config';

/**
 * Returns the project configuration (consisting of the base configuration provided by see.config.ts and the additional
 * project specific overrides as defined in project.config.ts)
 */
export function templateLocals() {
    const configEnvName = argv['config-env'] || 'dev';
    const configEnv = CONFIG.getPluginConfig('environment-config')[configEnvName];

    if (!configEnv) {
        throw new Error('Invalid configuration name');
    }

    const config = {
        ENV_CONFIG: JSON.stringify(configEnv)
    };

    return Object.assign(config, CONFIG);
}
