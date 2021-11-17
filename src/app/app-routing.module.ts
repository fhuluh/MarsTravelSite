import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { MaldivesComponent } from './components/maldives/maldives.component';
import { AfricaComponent } from './components/africa/africa.component';
import { SecyhellesComponent } from './components/secyhelles/secyhelles.component';
import { MauritiusComponent } from './components/mauritius/mauritius.component';
import { SpecialsComponent } from './components/specials/specials.component';
import { RspecialComponent } from './components/rspecial/rspecial.component';
import { OspecialComponent } from './components/ospecial/ospecial.component';


const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch:'full'},

  { path:       'destination',          component:      DestinationsComponent},
  { path:       'contact',              component:      ContactComponent},
  { path:       'home',                 component:      HomeComponent},
  { path:       'maldives',             component:      MaldivesComponent},
  { path:       'africa',               component:      AfricaComponent},
  { path:       'secyhelles',           component:      SecyhellesComponent},
  { path:       'mauritius',            component:      MauritiusComponent},
  { path:       'specials',             component:      SpecialsComponent},
  { path:       'rspecial',             component:      RspecialComponent},
  { path:       'ospecial',             component:      OspecialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
