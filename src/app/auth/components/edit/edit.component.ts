import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public proData: any;
  public product: any;
  constructor(private _router: Router) {
    this.proData = this._router.getCurrentNavigation()?.extras.state;
    if(this.proData.value){
      this.product = this.proData.value;
      console.log(this.product);
    }
   }

  ngOnInit(): void {
  }

  update(){
    console.log(this.product);
  }

}
