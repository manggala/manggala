import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    {
      path: "",
      pathMatch: 'full',
      redirectTo: 'home',
    },
    {
      path: "experience",
      component: ExperienceComponent
    },
    {
      path: "home",
      component: HomeComponent
    },
    {
      path: "education",
      component: EducationComponent
    },
    {
      path: "contact",
      component: ContactComponent
    },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
