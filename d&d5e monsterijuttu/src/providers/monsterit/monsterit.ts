import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MonsteritProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MonsteritProvider {

constructor(public http: HttpClient) {

}

haeKaikki = () : any =>{

return new Promise((resolve) => {

this.http.get("assets/hirviot.json")
.subscribe((data) => {

  resolve(data)
});

});

}


  
}




