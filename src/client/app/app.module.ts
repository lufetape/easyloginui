/*
 * This source code is the confidential, proprietary information of
 * Cafeto Software S.A.S. here in, you may not disclose such Information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Cafeto Software S.A.S.
 * 
 * 2016: Cafeto Software S.A.S.
 * All Rights Reserved.
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { Http } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { enableProdMode } from '@angular/core';
import { TooltipModule } from 'ng2-tooltip';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './login/welcome.component';

if (String('<%= ENV %>') === 'prod') { enableProdMode(); }

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        WelcomeComponent,
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule,
        appRouterProviders,
        FormsModule,
        HttpModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
            deps: [Http]
        }),
        TooltipModule
    ],
    providers: [
        {
            provide: AuthHttp,
            useFactory: (http: any) => {
                return new AuthHttp(new AuthConfig({
                    tokenName: 'token',
                    globalHeaders: [
                        { 'Content-Type': 'application/json' }
                    ]
                }), http);
            },
            deps: [Http]
        }
    ]
})

export class AppModule { }
