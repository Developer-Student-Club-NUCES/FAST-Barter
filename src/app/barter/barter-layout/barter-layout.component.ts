import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../services/auth.service'
const fasticon=require('./../../icons/fast.jpg');
@Component({
  selector: 'app-barter-layout',
  templateUrl: './barter-layout.component.html',
  styleUrls: ['./barter-layout.component.css']
})
export class BarterLayoutComponent implements OnInit {
  title = 'FastBarter';
  ficon=fasticon;
  name ;
  constructor(public auth: AuthService) { 
    auth.user$.subscribe(event => this.name=event);
  }

  ngOnInit() {
  }

}
