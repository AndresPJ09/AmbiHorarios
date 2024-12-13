import { Routes } from '@angular/router';
import { UserComponent } from './pages/Security/user/user.component';
import { PersonComponent } from './pages/Security/person/person.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { RoleComponent } from './pages/Security/role/role.component';
import { ViewComponent } from './pages/Security/view/view.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotYourPasswordComponent } from './pages/forgot-your-password/forgot-your-password.component';
import { CreatAccountComponent } from './pages/creat-account/creat-account.component';
import { TermsComponent } from './pages/terms/terms.component';
import { ModuleComponent } from './pages/Security/module/module.component';
import { UserprofileComponent } from './pages/userprofile/userprofile.component';
import { UserDataComponent } from './pages/user-data/user-data.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [

    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'forgot-your-password',
        component: ForgotYourPasswordComponent,
    },
    {
        path: 'creat-account',
        component: CreatAccountComponent,
    },
    {
        path: 'terms',
        component: TermsComponent,
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard],
        children: [
            { path: 'home', component: HomeComponent, },
            { path: 'menu', component: MenuComponent, },
            { path: 'role', component: RoleComponent, },
            { path: 'user', component: UserComponent, },
            { path: 'module', component: ModuleComponent, },
            { path: 'view', component: ViewComponent, },
            { path: 'person', component: PersonComponent, },
            { path: 'userprofile', component: UserprofileComponent, },
            { path: 'user-data', component: UserDataComponent, },
        ]
    },

];




