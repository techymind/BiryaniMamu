import { Component, OnInit } from '@angular/core';
import exploreitems from "../../assets/explorefooditems.json"
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  explorefooditems;
  constructor() { 
    
    this.explorefooditems = exploreitems.explorefooditems;  

  }
  ngOnInit(): void {
  }


}
