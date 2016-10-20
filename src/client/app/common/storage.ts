/*
 * This source code is the confidential, proprietary information of
 * Cafeto Software S.A.S. here in, you may not disclose such Information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Cafeto Software S.A.S.
 *
 * 2016: Cafeto Software S.A.S.
 * All Rights Reserved.
 */

import { Injectable } from '@angular/core';

/**
 * @author Jeffry Lenis
 * @class siklus.configurationUI.Storage
 * @description This class represents the storage utils.
 */
@Injectable()

export class Storage {

    /**
     * get authenticated user data
     */
    getAuthUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}
