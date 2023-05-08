import { Component,OnInit } from '@angular/core';



@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit{
  MyCountries: CountryInfo[]=[]; //array of countries
constructor() {
//alert('constructor');
}
ngOnInit(): void {
  fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(json => {
        for(let i=0;i<json.length;i++) {
          let c=new CountryInfo();
          c.name=json[i].name.common;
          c.flag=json[i].flags.png;
          c.population=json[i].population;
          c.capital=json[i].capital;
         
          // if (json[i].languages) {
            
          //   Object.keys(json[i].languages).forEach(x => { c.languages.push(x); })
            
          // }
          this.MyCountries.push(c);
        }
        //alert(this.MyCountries.length);
      })
}
}
class CountryInfo {
  name: string='';
  flag:string='';
  population:number=0;
  capital:string='';
  // languages:string[];
 
}