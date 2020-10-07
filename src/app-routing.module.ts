import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagenofoundComponent } from './app/nopagenofound/nopagenofound.component';
import { PagesRoutingModule } from './app/pages/pages.routing';
import { AuthRoutingModule } from './app/auth/auth.routing';

const routes: Routes = [{path: '**', component: NopagenofoundComponent }];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule],
    exports: [RouterModule],
})

export class AppRoutingModule {}