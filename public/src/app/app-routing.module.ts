import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from "./landing/landing.component";
import { BrowseComponent } from "./browse/browse.component";
import { ListingComponent } from "./listing/listing.component";

const routes: Routes = [
  { path: '', pathMatch: "full", component: LandingComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'listings', component: ListingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
