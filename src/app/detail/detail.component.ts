import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  ID:any;
constructor(myActivatedRoute: ActivatedRoute){
  this.ID=myActivatedRoute.snapshot.params["id"]

}
}
