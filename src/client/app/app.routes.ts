/*
 * This source code is the confidential, proprietary information of
 * Cafeto Software S.A.S. here in, you may not disclose such Information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Cafeto Software S.A.S.
 *
 * 2016: Cafeto Software S.A.S.
 * All Rights Reserved.
 */

/*
 * This source code is the confidential, proprietary information of
 * Cafeto Software S.A.S. here in, you may not disclose such Information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Cafeto Software S.A.S.
 *
 * 2016: Cafeto Software S.A.S.
 * All Rights Reserved.
 */

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './login/welcome.component';

/**
 * Applications routes setup for configuration component.
 */
const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'welcome', component: WelcomeComponent },
];

export const appRouterProviders = RouterModule.forRoot(routes);
