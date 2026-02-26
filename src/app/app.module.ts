import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app.js'
import { HeaderComponent } from './header/header.component.js';
import { UserComponent } from './user/user.component.js';
import { TasksComponent } from './tasks/tasks.component.js';

@NgModule({
    declarations: [App],
    bootstrap: [App],
    imports : [BrowserModule, HeaderComponent, UserComponent, TasksComponent]
})

export class AppModule {

}