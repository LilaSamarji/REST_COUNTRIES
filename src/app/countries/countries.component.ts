import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  MyCountries: CountryInfo[] = []; //array of countries


  constructor(public apiCaller: HttpClient) {

  }
  languages: string[];

  ngOnInit(): void {
    this.getData();




  }
  getData() {
    this.apiCaller
      .get('https://restcountries.com/v3.1/all')
      .subscribe((data: any) => {
        for (let i = 0; i < data.length; i++) {
          let c = new CountryInfo();
          c.name = data[i].name.common;
          c.flag = data[i].flags.png;
          c.population = data[i].population;
          c.lang = [];
          c.capital = data[i].capital;
          c.borders = [];
          if (data[i].borders) {
            c.borders.push(data[i].borders);

          }
          if (data[i].languages) {
            this.languages = Object.keys(data[i].languages);

            this.languages.forEach(x => {
              c.lang.push(x);
            })
          }
          this.MyCountries.push(c);

        }

      });

  }
}
class CountryInfo {
  name: string = '';
  flag: string = '';
  population: number = 0;
  capital: string = '';
  lang: string[];
  borders: string[];

}