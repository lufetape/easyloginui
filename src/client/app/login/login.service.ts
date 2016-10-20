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
import { Http, RequestOptions, Headers } from '@angular/http';
import { ENDPOINTS } from '../common/constants';

/**
 * @author Jeffry Lenis
 * @class siklus.serviceLoginUI.LoginService
 * @description his class represents an injectable service for LoginComponent. 
 */
@Injectable()

export class LoginService {

    /**
     * Boolean flag to validate if the user is logged in.
     */
    private loggedIn = false;

    /**
     * Login endpoint URL.
     */
    private loginUrl = ENDPOINTS.LOGIN;

    /**
     * Creates an instance of the LoginService with the injected
     * Http Module and update the loggedIn session flag.
     * 
     * @param {Http} http - The injected Http module (Angular core).
     */
    constructor(private http: Http) {
    }

    /**
     * Calls the API and return the response as boolean with the login result.
     * @param {Any} user - The user data from the form.
     * @param {Boolean} hasSubdomain - flag for subdomain login flow. 
     * @return Observable array with App objects.
     */
    login(user: any) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
		return this.http.post(this.loginUrl, user, options)
            .map(res => res.json())
            .map((res) => {
				return res;
            });
    }

    /**
     * Return the last loggedIn value.
     * @return Boolean loggedIn value.
     */
    isLoggedIn() {
        return this.loggedIn;
    }
}
