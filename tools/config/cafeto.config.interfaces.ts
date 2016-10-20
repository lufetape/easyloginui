/*
 * This source code is the confidential, proprietary information of
 * Cafeto Software S.A.S. here in, you may not disclose such Information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Cafeto Software S.A.S.
 * 
 * 2016: Cafeto Software S.A.S.
 * All Rights Reserved.
 */

export interface InjectableDependency {
    src: string;
    inject: string | boolean;
    vendor?: boolean;
    env?: string[] | string;
}

export interface Environments {
    DEVELOPMENT: string;
    PRODUCTION: string;
    [key: string]: string;
}
