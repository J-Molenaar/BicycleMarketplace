import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
    allBikes = [];
    userId: string;

  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
      this.getAllBikes();
      this._httpService.getSession()
        .then((user) => {console.log(user)
        this.userId = user._id; })
        .catch((err) => { console.log(err); });

    }

    getAllBikes() {
      this._httpService.getAllBikes()
        .then((bicycles) => { this.allBikes = bicycles; })
        .catch((err) => { console.log(err); });
    }
    contact(creatorId){
        console.log(creatorId);
        this._httpService.findCreator(creatorId)
            .then((contact)=>{console.log("Bike listing was created by " + contact)
            alert(contact.firstname + ":  " + contact.email)
                })
            .catch((err) => {
                console.log("Can't find bike listing creator!!" + err);
                });

    }
    delete(bikeid){
        this._httpService.removebike(bikeid)
        .then(()=>{this.getAllBikes()});

    }
    logout(userId){
        this._httpService.logout(userId)

    }
}
