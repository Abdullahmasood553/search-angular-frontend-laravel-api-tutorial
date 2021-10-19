import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';

import { RouterModule, Routes } from '@angular/router';
import { ServiceDetailComponent } from './service-detail/service-detail.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'search-detail', component: ServiceDetailComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ServiceDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
