import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: {animation: 'HomePage'}},
  { path: 'about', component: AboutComponent, data: {animation: 'AboutPage'} },
  { path: 'experience', component: ExperienceComponent, data: {animation: 'ExperiencePage'}  },
  { path: 'work', component: WorkComponent, data: {animation: 'WorkPage'}  },
  { path: 'contact', component: ContactComponent, data: {animation: 'ContactPage'}  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
