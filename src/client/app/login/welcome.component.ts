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
import { Storage } from '../common/storage';
import { TranslateService } from 'ng2-translate/ng2-translate';

/**
 * @author Jeffry Lenis
 * @class siklus.serviceLoginUI.WelcomeComponent
 * @description This class represents the Eelcome Component. 
 * Controls the welcome page
 */
@Component({
    moduleId: module.id,
    selector: 'app-welcome',
    styleUrls: ['login.component.css'],
    templateUrl: 'welcome.component.html',
    providers: [Storage]
})

export class WelcomeComponent {

    /**
     * Request active flag to show the loading effect on form button.
     */
    requestActive: boolean = false;

    /**
     * User object for login.
     */
    user: any = {};

    /**
     * Creates an instance of the LoginComponent with the injected
     * loginService (Http calls)
     * 
     * @param {AppSelectorService} appsService - The injected TranslateService.
     */
    constructor(
        private storage: Storage,
        private translate: TranslateService) {
            this.user = storage.getAuthUser();
            if(!this.user) {
                this.redirect();
            }
    }

    /**
     * Logouts the user and go to the login
     */
    logout() {
        this.requestActive = true;
        localStorage.clear();
        this.redirect('/login');
        this.requestActive = false;
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
