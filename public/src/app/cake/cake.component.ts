import { Component, OnInit, Input } from '@angular/core';
import { CakeService } from '../cake.service';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {
  @Input() cakeToShow: any;
  @Input() avgRating: number;
  constructor(private _cakeService: CakeService) { }

  ngOnInit() {
    console.log(`made it to cake component`)
  }

}
