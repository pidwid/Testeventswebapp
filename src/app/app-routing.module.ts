import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { EventlistComponent } from "./events/movieslist.component";

// FOR ROUTING AND NAVIGATION TO OTHER COMPONENTS
const routes: Routes = [
  { path: "", redirectTo: "Signup", pathMatch: "full" },
  { path: "Signup", component: SignUpComponent },
  {
    path: "Events",
    component: EventlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
