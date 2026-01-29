import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';

import { TabAbastecimentos } from './components/tab-abastecimentos/tab-abastecimentos';
import { TabPosto } from './components/tab-posto/tab-posto';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'abastecimentos', component: TabAbastecimentos },
  { path: 'postos', component: TabPosto },
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
