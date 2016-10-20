/*
 * This source code is the confidential, proprietary information of
 * Cafeto Software S.A.S. here in, you may not disclose such Information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Cafeto Software S.A.S.
 *
 * 2016: Cafeto Software S.A.S.
 * All Rights Reserved.
 */

import { Component } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { LoginService } from './login.service';
import { Storage } from '../common/storage';

/**
 * @author Jeffry Lenis
 * @class siklus.serviceLoginUI.LoginComponent
 * @description This class represents login Component
 */
@Component({
    moduleId: module.id,
    selector: 'app-login',
    styleUrls: ['login.component.css'],
    templateUrl: 'login.component.html',
    providers: [LoginService, Storage]
})

export class LoginComponent {

    /**
     * Request active flag to show the loading effect on form button.
     */
    requestActive: boolean = false;

    /**
     * Show error message
     */
    showErrorMessage: boolean = false;

    /**
     * Main flag to validate if the user is logged in.
     */
    isLoggedIn: boolean = this.loginService.isLoggedIn();

    /**
     * Authentication Error Message.
     */
    authErrorMessage: string;

    /**
     * User object for login.
     */
    user: any = {
        organization: {}
    };

    /**
     * Creates an instance of the LoginComponent with the injected
     * loginService (Http calls), subdomainService (Domain validation).
     * 
     * @param {AppSelectorService} appsService - The injected TranslateService.
     */
    constructor(
        private loginService: LoginService,
        private storage: Storage,
        private translate: TranslateService) {
    }

    /**
     * Request the loginService and redirects to the app if login was success or show message if login failed
     * To DO: Change error messages with i18n based on Stormpath (pending)
     */
    auth() {
        this.requestActive = true;
        this.loginService.login(this.user).subscribe(
            result => {
                if (result && result.status.code === 0) {
                    localStorage.setItem('user', JSON.stringify(result.user));
                    Cookie.set('user', JSON.stringify(result.user), 0.01, '/', '.' + window.document.domain);
                    this.redirect('/welcome');
                } else {
                    this.showErrorMessage = true;
					this.authErrorMessage = result.status.description;
				}
            },
            error => {
                this.showErrorMessage = true;
                this.authErrorMessage = this.translate.instant('LABEL_AUTH_ERROR_MESSAGE');
                this.requestActive = false;
            },
            () => {
                this.requestActive = false;
            }
        );
    }

    /**
     * Redirects to a given page
     * 
     * @param page The page where the user is redirected
     */
    redirect(page?: string) {
        if(page) {
            window.location.href = page;
        } else {
            window.location.href = '/';
        }
    }
}
