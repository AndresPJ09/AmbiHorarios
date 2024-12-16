import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ForgotYourPasswordComponent } from './pages/forgot-your-password/forgot-your-password.component';
import { CreatAccountComponent } from './pages/creat-account/creat-account.component';
import { TermsComponent } from './pages/terms/terms.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { RoleComponent } from './Security/role/role.component';
import { UserComponent } from './Security/user/user.component';
import { ModuleComponent } from './Security/module/module.component';
import { ViewComponent } from './Security/view/view.component';
import { PersonComponent } from './Security/person/person.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: '/login',  
        pathMatch: 'full'
    },
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
            { path: 'person', component: PersonComponent, }
        ]
    },
];
