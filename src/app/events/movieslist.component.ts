import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { EventserviceService } from "../eventservice.service";

// DEFINED CLASS TO GET ALL THE DATA OF THE EVENTS
export class eventDataClass {
  eventName: string;
  Location: string;
  Organizer: string;
}
@Component({
  selector: "app-movieslist",
  templateUrl: "./movieslist.component.html",
  styleUrls: ["./movieslist.component.css"]
})
export class EventlistComponent implements OnInit {
  addEventsModal = false; //for signin modal
  //order of the fields of the table
  displayedColumns: string[] = [
    "position",
    "eventName",
    "Location",
    "Organizer"
  ];
  //events addition form for the new events
  eventsAddForm = new FormGroup({
    eventName: new FormControl("", [Validators.required]),
    location: new FormControl("", [Validators.required]),
    organizer: new FormControl("", [Validators.required])
  });
  dataSource: MatTableDataSource<eventDataClass>;
  eventClassArray: eventDataClass[] = [];
  constructor(
    private router: Router,
    private eventService: EventserviceService
  ) {}
  ngOnInit() {
    this.getData();
  }
  //main driver function to acces and get all the functions
  getData() {
    this.eventService.getAllEventsApiCall().subscribe(res => {
      console.log(res);
      for (const e in res) {
        const obj = new eventDataClass();
        obj.eventName = res[e].eventName;
        obj.Location = res[e].location;
        obj.Organizer = res[e].organizer;

        this.eventClassArray.push(obj);
        console.log(this.eventClassArray);
      }

      this.dataSource = new MatTableDataSource<eventDataClass>(
        this.eventClassArray
      );
      console.log(this.dataSource);
    });
  }
  //enabling the add events modal
  addEvents() {
    this.addEventsModal = true;
  }
  //logging out function
  logout() {
    this.router.navigate(["/Signup"]);
  }
  //posting the events data
  submitData() {
    this.eventClassArray = [];
    const body = {
      eventName: this.eventsAddForm.value.eventName,
      location: this.eventsAddForm.value.location,
      organizer: this.eventsAddForm.value.organizer
    };
    this.eventService.postEventsDataApiCall(body).subscribe(
      result => {},
      error => {
        this.getData();
        alert("Successfully Added");
        this.eventsAddForm.reset();
        this.addEventsModal = false;
      }
    );
  }
}
