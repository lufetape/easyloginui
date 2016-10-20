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
import { argv } from 'yargs';

import {
    Environments,
    InjectableDependency
} from './cafeto.config.interfaces';

/**
 * The enumeration of available environments.
 * @type {Environments}
 */
export const ENVIRONMENTS: Environments = {
    DEVELOPMENT: 'dev',
    PRODUCTION: 'prod'
};

/**
 * This class represents the basic configuration of the seed.
 * It provides the following: Constants for directories, ports, versions, 
 * injectable NPM dependencies, injectable application assets, SystemJS configuration
 */
export class SeedConfig {

    /**
     * The port where the application will run.
     * The default port is `5555`, which can be overriden by the  `--port` flag when running `npm start`.
     * @type {number}
     */
    PORT = argv['port'] || 5555;

    /**
     * The root folder of the project (up two levels from the current directory).
     */
    PROJECT_ROOT = join(__dirname, '../..');

    /**
     * The current environment.
     * The default environment is `dev`, which can be overriden by 
     * the `--config-env ENV_NAME` flag when running `npm start`.
     */
    ENV = getEnvironment();

    /**
     * The flag for the debug option of the application.
     * The default value is `false`, which can be overriden by 
     * the `--debug` flag when running `npm start`.
     * @type {boolean}
     */
    DEBUG = argv['debug'] || false;

    /**
     * The flag for the git build code of the application.
     * The default value is empty, which can be overriden by 
     * the `--debug` flag when running `npm start`.
     * @type {boolean}
     */
    BUILD = argv['build'] || '';

    /**
     * The port where the documentation application will run.
     * The default docs port is `4003`, which can be overriden 
     * by the `--docs-port` flag when running `npm start`.
     * @type {number}
     */
    DOCS_PORT = argv['docs-port'] || 4003;

    /**
     * The port where the unit test coverage report application will run.
     * The default coverage port is `4004`, which can by overriden by 
     * the `--coverage-port` flag when running `npm start`.
     * @type {number}
     */
    COVERAGE_PORT = argv['coverage-port'] || 4004;

    /**
     * The path for the base of the application at runtime.
     * The default path is `/`, which can be overriden by the `--base` 
     * flag when running `npm start`.
     * @type {string}
     */
    APP_BASE = argv['base'] || '/';

    /**
     * The base path of node modules.
     * @type {string}
     */
    NPM_BASE = join(this.APP_BASE, 'node_modules/');

    /**
     * The flag for the hot-loader option of the application.
     * Per default the option is not set, but can be set by the 
     * `--hot-loader` flag when running `npm start`.
     * @type {boolean}
     */
    ENABLE_HOT_LOADING = argv['hot-loader'];

    /**
     * The port where the application will run, if the 
     * `hot-loader` option mode is used.
     * The default hot-loader port is `5578`.
     * @type {number}
     */
    HOT_LOADER_PORT = 5578;

    /**
     * The directory where the bootstrap file is located.
     * The default directory is `app`.
     * @type {string}
     */
    BOOTSTRAP_DIR = 'app';

    /**
     * The directory where the client files are located.
     * The default directory is `client`.
     * @type {string}
     */
    APP_CLIENT = argv['client'] || 'client';

    /**
     * The directory where the server files are located.
     * The default directory is `server`.
     * @type {string}
     */
    APP_SERVER = argv['server'] || 'server';

    /**
     * The bootstrap file to be used to boot the application. The file
     * to be used is dependent if the hot-loader option is used or not.
     * Per default (non hot-loader mode) the `main.ts` file will be used,
     * with the hot-loader option enabled, the `hot_loader_main.ts` file 
     * will be used.
     * @type {string}
     */
    BOOTSTRAP_MODULE = `${this.BOOTSTRAP_DIR}/` + (this.ENABLE_HOT_LOADING ? 'hot_loader_main' : 'main');

    /**
     * The default title of the application as used in the `<title>` tag of the
     * `index.html`.
     * @type {string}
     */
    APP_TITLE = 'Login';

    /**
     * The base folder of the applications source files.
     * @type {string}
     */
    APP_SRC = `src/${this.APP_CLIENT}`;

    /**
     * The base folder of the applications source files.
     * @type {string}
     */
    SERVER_INIT_SRC = `src`;

    /**
     * The base folder of the server source files.
     * @type {string}
     */
    APP_SERVER_SRC = `src/${this.APP_SERVER}`;

    /**
     * The folder of the applications asset files.
     * @type {string}
     */
    ASSETS_SRC = `${this.APP_SRC}/assets`;

    /**
     * The folder of the applications css files.
     * @type {string}
     */
    CSS_SRC = `${this.APP_SRC}/css`;

    /**
     * The directory of the applications tools
     * @type {string}
     */
    TOOLS_DIR = 'tools';

    /**
     * The directory of the tasks provided by the seed.
     */
    SEED_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'cafeto');

    /**
     * The destination folder for the generated documentation.
     * @type {string}
     */
    DOCS_DEST = 'docs';

    /**
     * The base folder for built files.
     * @type {string}
     */
    DIST_DIR = 'dist';

    /**
     * The folder for built server files in the `dev` environment.
     * @type {string}
     */
    DEV_SERVER_DEST = `${this.DIST_DIR}/dev/${this.APP_SERVER}`;

    /**
     * The folder for the built server files in the `prod` environment.
     * @type {string}
     */
    PROD_SERVER_DEST = `${this.DIST_DIR}/prod/${this.APP_SERVER}`;

    /**
     * The folder for server temporary files.
     * @type {string}
     */
    TMP_SERVER_DIR = `${this.DIST_DIR}/tmp_${this.APP_SERVER}`;

    /**
     * The base folder for built files.
     * @type {string}
     */
    PACKAGE_DIR = 'package';

    /**
     * The folder for built files in the `dev` environment.
     * @type {string}
     */
    DEV_DEST = `${this.DIST_DIR}/dev`;

    /**
     * The folder for the built files in the `prod` environment.
     * @type {string}
     */
    PROD_DEST = `${this.DIST_DIR}/prod`;

    /**
     * The folder for temporary files.
     * @type {string}
     */
    TMP_DIR = `${this.DIST_DIR}/tmp`;

    /**
     * The folder for the built files, corresponding to the current environment.
     * @type {string}
     */
    APP_DEST = this.ENV === ENVIRONMENTS.DEVELOPMENT ? this.DEV_DEST : this.PROD_DEST;

    /**
     * The folder for the built server files, corresponding to the current environment.
     * @type {string}
     */
    APP_SERVER_DEST = this.ENV === ENVIRONMENTS.DEVELOPMENT ? this.DEV_SERVER_DEST : this.PROD_SERVER_DEST;

    /**
     * The folder for the built CSS files.
     * @type {strings}
     */
    CSS_DEST = `${this.APP_DEST}/css`;

    /**
     * The folder for the built JavaScript files.
     * @type {string}
     */
    JS_DEST = `${this.APP_DEST}/js`;

    /**
     * The version of the application as defined in the `package.json`.
     */
    VERSION = appVersion();

    /**
     * The name of the application as defined in the `package.json`.
     */
    NAME = appName();

    /**
     * The name of the bundle file to includes all CSS files.
     * @type {string}
     */
    CSS_PROD_BUNDLE = 'main.css';

    /**
     * The name of the bundle file to include all JavaScript shims.
     * @type {string}
     */
    JS_PROD_SHIMS_BUNDLE = 'shims.js';

    /**
     * The name of the bundle file to include all JavaScript application files.
     * @type {string}
     */
    JS_PROD_APP_BUNDLE = 'app.js';

    /**
     * The required NPM version to run the application.
     * @type {string}
     */
    VERSION_NPM = '2.14.2';

    /**
     * The required NodeJS version to run the application.
     * @type {string}
     */
    VERSION_NODE = '4.0.0';

    /**
     * The ruleset to be used by `codelyzer` for linting the TypeScript files.
     */
    CODELYZER_RULES = customRules();

    /**
     * The flag to enable handling of SCSS files
     * The default value is false. Override with the '--scss' flag.
     * @type {boolean}
     */
    ENABLE_SCSS = argv['scss'] || false;

    /**
     * The list of NPM dependcies to be injected in the `index.html`.
     * @type {InjectableDependency[]}
     */
    NPM_DEPENDENCIES: InjectableDependency[] = [
        { src: 'zone.js/dist/zone.js', inject: 'libs' },
        { src: 'core-js/client/shim.min.js', inject: 'shims' },
        { src: 'systemjs/dist/system.src.js', inject: 'shims', env: ENVIRONMENTS.DEVELOPMENT },
        { src: 'rxjs/bundles/Rx.js', inject: 'libs', env: ENVIRONMENTS.DEVELOPMENT },
        { src: 'sweetalert2/dist/sweetalert2.min.js', inject: true },
        { src: 'sweetalert2/dist/sweetalert2.min.css', inject: true, vendor: true },
        { src: 'font-awesome/css/font-awesome.min.css', inject: true, vendor: true },
        { src: 'animate.css/animate.min.css', inject: true, vendor: true },
        { src: 'bootstrap/dist/css/bootstrap.min.css', inject: true, vendor: true },
        { src: 'jquery/dist/jquery.min.js', inject: 'libs' },
        { src: 'bootstrap/dist/js/bootstrap.min.js', inject: 'libs' }
    ];

    /**
     * The list of local files to be injected in the `index.html`.
     * @type {InjectableDependency[]}
     */
    APP_ASSETS: InjectableDependency[] = [
        { src: `${this.CSS_SRC}/main.${this.getInjectableStyleExtension()}`, inject: true, vendor: false }
    ];

    /**
     * The list of editor temporary files to ignore in watcher and asset builder.
     * @type {string[]}
     */
    TEMP_FILES: string[] = [
        '**/*___jb_tmp___',
        '**/*~',
    ];

    /**
     * Returns the array of injectable dependencies (npm dependencies and assets).
     * @return {InjectableDependency[]} The array of npm dependencies and assets.
     */
    get DEPENDENCIES(): InjectableDependency[] {
        return normalizeDependencies(this.NPM_DEPENDENCIES.filter(filterDependency.bind(null, this.ENV)))
            .concat(this.APP_ASSETS.filter(filterDependency.bind(null, this.ENV)));
    }

    /**
     * The configuration of SystemJS for the `dev` environment.
     * @type {any}
     */
    protected SYSTEM_CONFIG_DEV: any = {
        defaultJSExtensions: true,
        packageConfigPaths: [
            `/node_modules/*/package.json`,
            `/node_modules/**/package.json`,
            `/node_modules/@angular/*/package.json`
        ],
        paths: {
            [this.BOOTSTRAP_MODULE]: `${this.APP_BASE}${this.BOOTSTRAP_MODULE}`,
            '@angular/common': `node_modules/@angular/common/bundles/common.umd.js`,
            '@angular/compiler': `node_modules/@angular/compiler/bundles/compiler.umd.js`,
            '@angular/core': `node_modules/@angular/core/bundles/core.umd.js`,
            '@angular/forms': `node_modules/@angular/forms/bundles/forms.umd.js`,
            '@angular/http': `node_modules/@angular/http/bundles/http.umd.js`,
            '@angular/platform-browser': `node_modules/@angular/platform-browser/bundles/platform-browser.umd.js`,
            '@angular/platform-browser-dynamic': `node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js`,
            '@angular/router': `node_modules/@angular/router/bundles/router.umd.js`,
            'rxjs/*': `node_modules/rxjs/*`,
            'underscore': `${this.APP_BASE}node_modules/underscore/underscore.js`,
            'sweetalert2': `${this.APP_BASE}node_modules/sweetalert2/dist/sweetalert2.min.js`,
            'ng2-tooltip': `${this.APP_BASE}node_modules/ng2-tooltip/index.js`,
            'app/*': `/app/*`,
            '*': `node_modules/*`
        },
        packages: {
            rxjs: { defaultExtension: 'js' }
        }
    };

    /**
     * The configuration of SystemJS of the application.
     * Per default, the configuration of the `dev` environment will be used.
     * @type {any}
     */
    SYSTEM_CONFIG: any = this.SYSTEM_CONFIG_DEV;

    /**
     * The system builder configuration of the application.
     * @type {any}
     */
    SYSTEM_BUILDER_CONFIG: any = {
        defaultJSExtensions: true,
        packageConfigPaths: [
            join(this.PROJECT_ROOT, 'node_modules', '*', 'package.json'),
            join(this.PROJECT_ROOT, 'node_modules', '@angular', '*', 'package.json')
        ],
        paths: {
            [`${this.TMP_DIR}/*`]: `${this.TMP_DIR}/*`,
            '*': 'node_modules/*',
            'angular2-jwt/*': 'node_modules/angular2-jwt/*',
            'ng2-tooltip': 'node_modules/ng2-tooltip'
        },
        packages: {
            '@angular/common': {
                main: 'index.js',
                defaultExtension: 'js'
            },
            '@angular/compiler': {
                main: 'index.js',
                defaultExtension: 'js'
            },
            '@angular/core': {
                main: 'index.js',
                defaultExtension: 'js'
            },
            '@angular/forms': {
                main: 'index.js',
                defaultExtension: 'js'
            },
            '@angular/http': {
                main: 'index.js',
                defaultExtension: 'js'
            },
            '@angular/platform-browser': {
                main: 'index.js',
                defaultExtension: 'js'
            },
            '@angular/platform-browser-dynamic': {
                main: 'index.js',
                defaultExtension: 'js'
            },
            '@angular/router': {
                main: 'index.js',
                defaultExtension: 'js'
            },
            'rxjs': {
                defaultExtension: 'js'
            },
            'angular2-jwt': {
                main: 'angular2-jwt.js',
                defaultExtension: 'js'
            },
            'underscore': {
                main: 'underscore.js',
                defaultExtension: 'js'
            },
            'sweetalert2': {
                main: 'dist/sweetalert2.js',
                defaultExtension: 'js'
            },
            'ng2-tooltip': {
                main: 'index.js',
                defaultExtension: 'js'
            }
        }
    };

    /**
     * The Autoprefixer configuration for the application.
     * @type {Array}
     */
    BROWSER_LIST = [
        'ie >= 10',
        'ie_mob >= 10',
        'ff >= 30',
        'chrome >= 34',
        'safari >= 7',
        'opera >= 23',
        'ios >= 7',
        'android >= 4.4',
        'bb >= 10'
    ];

    /**
     * White list for CSS color guard
     * @type {[string, string][]}
     */
    COLOR_GUARD_WHITE_LIST: [string, string][] = [
    ];

    /**
     * Artifactory data
     * @type {any}
     */
    ARTIFACTORY_DATA: any = {
        'host': 'http://192.168.150.75:8091/artifactory/',
        'repository': 'siklus-org-structure-ui',
        'username': 'admin',
        'password': 'b2rav#1ctX*oFM%2%82L%VZn'
    };

    /**
     * Configurations for NPM module configurations. Add to or override in project.config.ts.
     * If you like, use the mergeObject() method to assist with this.
     */
    PLUGIN_CONFIGS: any = {
        /**
         * The BrowserSync configuration of the application.
         * The default open behavior is to open the browser. To prevent the 
         * browser from opening use the `--b` flag when running `npm start` 
         * (tested with serve.dev).
         * Example: `npm start -- --b`
         * @type {any}
         */
        'browser-sync': {
            middleware: [require('connect-history-api-fallback')({ index: `${this.APP_BASE}index.html` })],
            port: this.PORT,
            startPath: this.APP_BASE,
            open: argv['b'] ? false : true,
            injectChanges: false,
            server: {
                baseDir: `${this.DIST_DIR}/empty/`,
                routes: {
                    [`${this.APP_BASE}${this.APP_DEST}`]: this.APP_DEST,
                    [`${this.APP_BASE}node_modules`]: 'node_modules',
                    [`${this.APP_BASE.replace(/\/$/, '')}`]: this.APP_DEST
                }
            }
        },
        // Note: you can customize the location of the file
        'environment-config': require('../env/config.json')
    };

    /**
     * Recursively merge source onto target.
     * @param {any} target The target object (to receive values from source)
     * @param {any} source The source object (to be merged onto target)
     */
    mergeObject(target: any, source: any) {
        const deepExtend = require('deep-extend');
        deepExtend(target, source);
    }

    /**
     * Locate a plugin configuration object by plugin key.
     * @param {any} pluginKey The object key to look up in PLUGIN_CONFIGS.
     */
    getPluginConfig(pluginKey: string): any {
        if (this.PLUGIN_CONFIGS[pluginKey]) {
            return this.PLUGIN_CONFIGS[pluginKey];
        }
        return null;
    }

    getInjectableStyleExtension() {
        return this.ENV === ENVIRONMENTS.PRODUCTION && this.ENABLE_SCSS ? 'scss' : 'css';
    }

}

/**
 * Normalizes the given `deps` to skip globs.
 * @param {InjectableDependency[]} deps - The dependencies to be normalized.
 */
export function normalizeDependencies(deps: InjectableDependency[]) {
    deps
        .filter((d: InjectableDependency) => !/\*/.test(d.src)) // Skip globs
        .forEach((d: InjectableDependency) => d.src = require.resolve(d.src));
    return deps;
}

/**
 * Returns if the given dependency is used in the given environment.
 * @param  {string}               env - The environment to be filtered for.
 * @param  {InjectableDependency} d   - The dependency to check.
 * @return {boolean}                    `true` if the dependency is used in this environment, `false` otherwise.
 */
function filterDependency(env: string, d: InjectableDependency): boolean {
    if (!d.env) {
        d.env = Object.keys(ENVIRONMENTS).map(k => ENVIRONMENTS[k]);
    }
    if (!(d.env instanceof Array)) {
        (<any>d).env = [d.env];
    }
    return d.env.indexOf(env) >= 0;
}

/**
 * Returns the applications version as defined in the `package.json`.
 * @return {number} The applications version.
 */
function appVersion(): number | string {
    var pkg = require('../../package.json');
    return pkg.version;
}

/**
 * Returns the linting configuration to be used for `codelyzer`.
 * @return {string[]} The list of linting rules.
 */
function customRules(): string[] {
    var lintConf = require('../../tslint.json');
    return lintConf.rulesDirectory;
}

/**
 * Returns the environment of the application.
 */
function getEnvironment() {
    let base: string[] = argv['_'];
    let prodKeyword = !!base.filter(o => o.indexOf(ENVIRONMENTS.PRODUCTION) >= 0).pop();
    let env = (argv['env'] || '').toLowerCase();
    if ((base && prodKeyword) || env === ENVIRONMENTS.PRODUCTION) {
        return ENVIRONMENTS.PRODUCTION;
    } else {
        return ENVIRONMENTS.DEVELOPMENT;
    }
}

/**
 * Returns the applications version as defined in the `package.json`.
 * @return {number} The applications version.
 */
function appName(): number | string {
    var pkg = require('../../package.json');
    return pkg.name;
}
