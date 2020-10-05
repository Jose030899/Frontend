import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './app/pages/dashboard/dashboard.component';
import { LoginComponent } from './app/auth/login/login.component';
import { RegisterComponent } from './app/auth/register/register.component';
import { Grafica1Component } from './app/pages/grafica1/grafica1.component';
import { NopagenofoundComponent } from './app/pages/nopagenofound/nopagenofound.component';
import { PagesComponent } from './app/pages/pages.component';

const routes: Routes = [

    {
    path: '',
    component: PagesComponent,
    children: [
        {path: 'dashboard', component: DashboardComponent},
        {path: 'progress', component: ProgressEvent},
        {path: 'grafica1', component: Grafica1Component},
        {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ],
},

    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},

    {path: '**', component: NopagenofoundComponent }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}