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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsetComponent } from './skillset/skillset.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ErfarenheterComponent } from './erfarenheter/erfarenheter.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    FooterComponent,
    KompetenserComponent,
    MenuComponent,
    SkillsetComponent,
    PortfolioComponent,
    ErfarenheterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpClientModule, FormsModule,ReactiveFormsModule,AngularFontAwesomeModule,
    AppRoutingModule, RouterModule.forRoot([
      { path: 'welcome', component: ViewComponent },
      { path: 'kompentenser', component: KompetenserComponent, pathMatch: 'full' },
      { path: 'contact', component: ContactComponent, pathMatch: 'full' },
      { path: 'erfarenheter', component: ErfarenheterComponent, pathMatch: 'full' },
      { path: 'portfolio', component: PortfolioComponent, pathMatch: 'full' },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
