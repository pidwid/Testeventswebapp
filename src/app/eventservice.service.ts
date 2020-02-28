import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EventserviceService {
  constructor(private http: HttpClient) {}
  //APIS END POINT FROM THE SERVER
  /* *********************************************************************************************************** */

  //FOR GET
  getallAlleventsEndpoint = "http://localhost:8000/getEvents";
  //for post
  postEventsdataEndpoint = "http://localhost:8000/newUser";
  /* *********************************************************************************************************** */
  // Get function api
  getAllEventsApiCall(): Observable<any> {
    return this.http.get<any>(this.getallAlleventsEndpoint);
  }
  //post function api
  postEventsDataApiCall(dataBody: any): Observable<any> {
    return this.http.post<any>(this.postEventsdataEndpoint, dataBody);
  }
}
