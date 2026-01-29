import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './components/home/home';
import { Navbar } from './components/navbar/navbar';
import { Abastecimento } from './components/abastecimento/abastecimento';
import { TabAbastecimentos } from './components/tab-abastecimentos/tab-abastecimentos';
import { TabPosto } from './components/tab-posto/tab-posto';
import { Posto } from './components/posto/posto';
import { Header } from './components/header/header';
import { Footer } from './components/header/components/footer/footer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    App,
    Home,
    Navbar,
    Abastecimento,
    TabAbastecimentos,
    TabPosto,
    Posto,
    Header,
    Footer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
