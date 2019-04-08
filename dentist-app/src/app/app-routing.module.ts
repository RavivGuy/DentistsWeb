import { ClinikComponent } from './clinik/clinik.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [{path: '', component: HomeComponent},
{path: 'about', component: AboutComponent},
{path: 'clinik', component: ClinikComponent},
{path: 'recommendations', component: RecommendationsComponent},
{path: 'contact', component: ContactComponent}] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
