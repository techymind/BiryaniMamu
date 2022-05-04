import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { DealsComponent } from './deals/deals.component';
import { FooterComponent } from './footer/footer.component';
import { ExploreComponent } from './explore/explore.component'; // CLI imports router

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'deals', component: DealsComponent },
  { path: 'explore', component: ExploreComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DealsComponent,
    FooterComponent,
    ExploreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
