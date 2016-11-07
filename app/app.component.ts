import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {

  //private weatherUrl = '/api/category/{category}/version/{version}/parameter.json';  // URL to web API
  private weatherUrl = 'http://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/16.158/lat/58.5812/data.json';  // URL to web API

  constructor (private http: Http) {}

  getData (): Observable<any[]> {
    return this.http.get(this.weatherUrl)
      .map(res => console.log(res))
      .catch(console.log('hit'));
  }



}
