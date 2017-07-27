import { Component, OnInit } from '@angular/core';
import { Bicycle } from "../bicycle";
import { User } from "../user";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  bicycle = new Bicycle();
  myBikes = [];
  userId: string;

  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit()
    {
        this._httpService.getSession()
          .then((user) => {console.log(user)
          this.userId = user._id;
          this.getMyBikes(this.userId);
            })
          .catch((err) => { console.log(err); });

    }

    getMyBikes(userId) {
        this._httpService.getMyBikes(userId)
        .then((bikes) => { this.myBikes = bikes; })
        .catch((err) => { console.log(err); });
    }

    delete(bikeid){
        this._httpService.removebike(bikeid)
        .then(()=>{
            this.getMyBikes(this.userId);
        });

    }

  newBicycle()
    {
    this._httpService.addBicycle(this.bicycle)
    .then(()=>{
        this.getMyBikes(this.userId);
    });
    this.bicycle = new Bicycle();
    }

  update(idx){
     this._httpService.updateBicycle(this.myBikes[idx])
     .then(()=>{
        this.getMyBikes(this.userId);
           })
     .catch((err) => { console.log(err); });
  }


}
