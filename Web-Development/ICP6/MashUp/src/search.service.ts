import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url:string ='https://api.foursquare.com/v2/venues/search?client_id=14YJTB524BOWGFHRJSOBONL4AGY1NWVAOG0ZL1CBOD5S15XA&client_secret=IDOKM5M3HUE3FZ1ZHJOGLK2AZJFL33LKAOKKP0S3DKOXFLEO&query=Pizza&near=Kansas%20City&v=20220225';
  
  constructor(private http: HttpClient) { }
// For Getting The Venues
  getVenues() {
    return this.http.get(this.url);
    }
  // For Getting the Recepies
    getSearchRecipe(value){
      return this.http.get('https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&q='+value)
    }
}
