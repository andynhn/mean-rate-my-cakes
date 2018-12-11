import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CakeService {

  constructor(private _http: HttpClient) { 
    this.getCakes();
  }
  getCakes(){
    return this._http.get('/cakes');
  }
  getCake(id){
    return this._http.get(`/cakes/${id}`);
  }
  createCake(newCake){
    return this._http.post('/cakes', newCake);
  }
  deleteCake(id){
    return this._http.delete(`/cakes/${id}`);
  }
  updateCake(id, selectedCake){
    return this._http.put(`/cakes/${id}`, selectedCake);
  }
  createRating(id, newRating){
    return this._http.post(`/ratings/${id}`, newRating)
  }
}
