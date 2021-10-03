import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './comp/home/home.component';
import { ProjsComponent } from './comp/projs/projs.component';
import { ContactComponent } from './comp/contact/contact.component';
import { MyFootComponent } from './comp/my-foot/my-foot.component';
import { SkillsComponent } from './comp/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjsComponent,
    ContactComponent,
    MyFootComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide : LocationStrategy , useClass: HashLocationStrategy}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
