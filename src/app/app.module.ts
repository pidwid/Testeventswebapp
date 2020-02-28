// ALL THE MODULES USED IN COMPONENTS IMPORTED HERE
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTableModule } from "@angular/material";

import { MatNativeDateModule, MatIconModule } from "@angular/material";

import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { EventlistComponent } from "./events/movieslist.component";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatChipsModule } from "@angular/material/chips";
import { StarRatingModule } from "angular-star-rating";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { MatCarouselModule } from "@ngmodule/material-carousel";
import { NgxCarouselModule } from "ngx-carousel";
import "hammerjs";
import { CarouselModule } from "ngx-owl-carousel-o";

@NgModule({
  declarations: [AppComponent, SignUpComponent, EventlistComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MatTableModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTooltipModule,
    CarouselModule,
    MatListModule,
    MatChipsModule,
    NgbModule,
    MatIconModule,
    HttpClientModule,
    MatCheckboxModule,
    MatSelectModule,
    MatMenuModule,
    MatExpansionModule,
    StarRatingModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    MatCarouselModule.forRoot(),
    NgxCarouselModule,
    MatCardModule,
    Ng2SearchPipeModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    FormsModule,
    MatInputModule,
    MatToolbarModule,
    MatNativeDateModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
