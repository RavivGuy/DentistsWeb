import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ClinikComponent } from './clinik/clinik.component';
import { ContactComponent } from './contact/contact.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ClinikComponent,
    RecommendationsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,

    TransferHttpCacheModule,
    HttpClientModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDl_nw3iQT7LbqfwuWdSlOlsVjtBql8fDs'
    }),

    AppRoutingModule
  ],
  providers: [],
})
export class AppModule { }
