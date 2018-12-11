import { Component } from '@angular/core';
import { CakeService } from './cake.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rate My Cakes';
  author = 'Andy Nguyen';
  newCake: any;
  cakes = [];
  displayOneCake: boolean = false;
  selectedCake = [];
  newRating: any;
  avgRating: number;

  constructor(private _cakeService: CakeService) {

  }

  ngOnInit(){
    this.getCakesFromService();
    this.newCake = {name: "", image: ""};
    this.newRating = {rating: "", comment: ""};
  }
  getCakesFromService(){
    console.log(`getCakesFromService`);
    let observable = this._cakeService.getCakes();
    observable.subscribe(data => {
      console.log("Got our data!", data)
      this.cakes = data['cakes']
    })
  }
  getThisCakeFromService(id: string){
    console.log(`getThisCakeFromService`);
    let observable = this._cakeService.getCake(id);
    observable.subscribe(data => {
      console.log("Got this cake!", data)

      if(data['cake'].ratings.length > 0){
        var sum=0;
        for(let i=0; i<data['cake'].ratings.length; i++){
          console.log(data['cake'].ratings[i].rating)
          sum = sum + data['cake'].ratings[i].rating;
        }
        var avg = (sum / data['cake'].ratings.length);
        this.avgRating = Math.round(avg*100)/100;
      } else {
        this.avgRating = 0;
      }
      this.selectedCake = data['cake']
      this.displayOneCake = true;
    })
  }
  createCakeFromService(){
    console.log(`createCakeFromService`)
    let observable = this._cakeService.createCake(this.newCake);
    observable.subscribe(data => {
      console.log("Got the data from post back", data);
      this.newCake = {name: "", image: ""}
      this.getCakesFromService();
    })
  }
  deleteCakeFromService(id: string){
    console.log(`deleteCakeFromService`)
    let observable = this._cakeService.deleteCake(id);
    observable.subscribe(data => {
      console.log("Cake removed", data);
      this.getCakesFromService();
    })
  }
  createRatingFromService(id: string){
    console.log(`createRatingFromService`)
    let observable = this._cakeService.createRating(id, this.newRating);
    observable.subscribe(data => {
      console.log("Got the data back", data);
      this.newRating = {rating: "", comment: ""};
      this.getCakesFromService();
    })
  }

}
