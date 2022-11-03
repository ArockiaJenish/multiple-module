import { EditComponent } from './../edit/edit.component';
import { GlobalService } from './../../../global.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _globalServ: GlobalService, private _router: Router) { }

  public product: any;

  ngOnInit(): void {

    this._globalServ.getProduct().subscribe(res => {
      console.log(res);
      this.product = res;
    }, err => console.log(err))

  }

  edit(prod: any){
    console.log(prod);
    this._router.navigate(['auth/edit'],{state: {value: prod}});
  }

}
