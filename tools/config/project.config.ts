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
import { SeedConfig } from './cafeto.config';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides.
 * A few examples can be found below.
 */

export class ProjectConfig extends SeedConfig {

    PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');
    FONTS_DEST = `${this.APP_DEST}/fonts`;
    FONTS_SRC = [
        'node_modules/font-awesome/fonts/**'
    ];

    constructor() {
        super();

        // Add `NPM` third-party libraries to be injected/bundled.
        this.NPM_DEPENDENCIES = [
            ...this.NPM_DEPENDENCIES
        ];

        // Add `local` third-party libraries to be injected/bundled.
        this.APP_ASSETS = [
            ...this.APP_ASSETS
        ];

        // Dragula

        // Development
        this.SYSTEM_CONFIG.paths['dragula'] = `${this.APP_BASE}node_modules/dragula/dist/dragula.min`;

        // Production
        this.SYSTEM_BUILDER_CONFIG.paths['dragula'] = `node_modules/dragula/dist/dragula.min.js`;
    }
}
