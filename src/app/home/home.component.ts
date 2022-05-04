import { Component, OnInit } from '@angular/core';

import displayfooditemsfile from '../../assets/topfooditems.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  topfooditems;
  constructor() { 
    
    this.topfooditems = displayfooditemsfile.topfooditems;  

  }

  ngOnInit(): void {
  }

}
