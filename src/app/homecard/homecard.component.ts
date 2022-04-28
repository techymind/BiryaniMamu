import { Component, OnInit } from '@angular/core';
import topfood from '../../assets/topfooditems.json'

@Component({
  selector: 'app-homecard',
  templateUrl: './homecard.component.html',
  styleUrls: ['./homecard.component.scss']
})
export class HomecardComponent implements OnInit {
  topfoodcards : any;
  constructor() {

    this.topfoodcards = topfood.topfooditems
   }

  ngOnInit(): void {
  }

}
