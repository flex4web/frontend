import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { MenuComponent } from '../menu/menu.component';
import { AboutComponent } from '../pages/about/about.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'aboutus', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
