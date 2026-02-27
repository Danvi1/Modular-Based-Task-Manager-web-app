import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { App } from './app.js'
import { HeaderComponent } from './header/header.component.js';
import { UserComponent } from './user/user.component.js';
import { SharedModule } from './shared/shared.module.js';
import { TasksModule } from './tasks/tasks.module.js';


@NgModule({
    declarations: [App, HeaderComponent, UserComponent],
    bootstrap: [App],
    imports : [BrowserModule, SharedModule, TasksModule]  // All the builtin pipes are imported here
})

export class AppModule {

}