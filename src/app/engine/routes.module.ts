import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { ExperienceComponent }   from '../experience/experience.component';
import { HomeComponent }         from '../home/home.component';
const appRoutes: Routes = [
  { path: '', component:  HomeComponent},
  { path: '/experiences', component: ExperienceComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}