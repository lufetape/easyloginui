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
import { TranslateService } from 'ng2-translate/ng2-translate';

/**
 * @author Jeffry Lenis
 * @class siklus.serviceLoginUI.AppComponent
 * @description This class represents the main application component. 
 * Controls if the user is logged in and i18n support.
 */
@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent {

    /**
     * Creates an instance of the AppComponent with the injected
     * TranslateService (i18n Support) and sets the app to the client language.
     * 
     * @param {TranslateService} translate - The injected TranslateService.
     */
    constructor(translate: TranslateService) {
        translate.use('es');
    }
}
