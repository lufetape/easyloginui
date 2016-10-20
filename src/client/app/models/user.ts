/*
 * This source code is the confidential, proprietary information of
 * Cafeto Software S.A.S. here in, you may not disclose such Information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Cafeto Software S.A.S.
 *
 * 2016: Cafeto Software S.A.S.
 * All Rights Reserved.
 */

/**
 * @author Jeffry Lenis
  * @class siklus.serviceLoginUI.models.User
 * @description This class represents a User Object.
 */
export class User {
    constructor(
        public firstname: string,
        public lastname: string,
        public username: string
    ) { }
}
