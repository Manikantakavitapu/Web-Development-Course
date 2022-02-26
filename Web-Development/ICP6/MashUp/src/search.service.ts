import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url:string ='https://api.foursquare.com/v3/places/search?';
  
  constructor(private http: HttpClient) { }
// For Getting The Venues
  getVenues(recipe, near) {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'fsq3qBsG/W/Qy1hOjDBuQ4jRMS1JfOgz6L3n57yGRFOaUpI='
      }
    };

    let finalUrl = this.url + 'near=' + near + "&query=" + recipe
    return this.http.get(finalUrl,options);
    }
  // For Getting the Recepies
    getSearchRecipe(value){
      return this.http.get('https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&q='+value)
    }
}
