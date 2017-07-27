import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs";

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  addUser(user)
  {
    return this._http.post('/addUser', user).map(data => data.json()).toPromise();
  }

  findUser(user)
  {
    return this._http.post('/findUser', user).map(data => data.json()).toPromise();
  }

  getSession()
  {
    console.log("Within http service check session method.")
    return this._http.get('/getSession').map(data => data.json()).toPromise();
  }
  addBicycle(bicycle)
  {
    console.log("Add bicycle method in http service firing...");
    return this._http.post('/addbicycle', bicycle).map(data => data.json()).toPromise();
  }
  getAllBikes()
  {
    console.log("Getting all bikes http service firing...");
    return this._http.get('/getAllBikes').map(data => data.json()).toPromise();
  }
  getMyBikes(userId)
  {
    console.log("Getting users bikes http service firing...");
    return this._http.post('/getMyBikes', {userId: userId}).map(data => data.json()).toPromise();
  }
  findCreator(creatorId){
      console.log("Getting contact info http service firing...");
      return this._http.post('/findCreator', {creatorId: creatorId}).map(data => data.json()).toPromise();
  }
  removebike(bikeid)
  {
      return this._http.post("/removebike", {bikeid: bikeid}).map(data => data.json()).toPromise();
  }

  updateBicycle(bike)
  {
      return this._http.post("/updateBicycle", {bike: bike}).map(data => data.json()).toPromise();
  }

  logout(userId){
    return this._http.get("/logout").map(data => data.json()).toPromise();
  }

}
