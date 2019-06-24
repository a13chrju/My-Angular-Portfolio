import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { KompetenserComponent } from './kompetenser/kompetenser.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    FooterComponent,
    KompetenserComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AngularFontAwesomeModule,
    AppRoutingModule, RouterModule.forRoot([
      { path: 'welcome', component: ViewComponent },
      { path: 'kompentenser', component: KompetenserComponent, pathMatch: 'full' },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
