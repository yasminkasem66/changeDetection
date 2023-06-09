import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImportantChildComponent } from './important-child/important-child.component';
import { UnimportantChildComponent } from './unimportant-child/unimportant-child.component';
import { ChangedetectionComponent } from './changedetection/changedetection.component';
import { PasswordPatternDirective } from './directives/password-pattern.directive';
import { MatchPasswordDirective } from './directives/match-password.directive';
import { ValidateUserNameDirective } from './directives/validate-user-name.directive';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { FormsModule } from '@angular/forms';
import { NgTemplateNgForComponent } from './ngTemplate/ng-template-ng-for/ng-template-ng-for.component';
import { NgTemplateNgIfComponent } from './ngTemplate/ng-template-ng-if/ng-template-ng-if.component';
import { NgTemplateNgSwitchComponent } from './ngTemplate/ng-template-ng-switch/ng-template-ng-switch.component';
import { NavComponent } from './nav/nav.component';
import { FileScreenShotComponent } from './file-screen-shot/file-screen-shot.component';

@NgModule({
  declarations: [
    AppComponent,
    ImportantChildComponent,
    UnimportantChildComponent,
    ChangedetectionComponent,
    PasswordPatternDirective,
    MatchPasswordDirective,
    ValidateUserNameDirective,
    TemplateDrivenFormComponent,
    NgTemplateNgForComponent,
    NgTemplateNgIfComponent,
    NgTemplateNgSwitchComponent,
    NavComponent,
    FileScreenShotComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
