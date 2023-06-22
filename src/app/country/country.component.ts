import { Component, OnInit, Input } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'country',
  templateUrl: './country.component.html',
  // standalone: true,
  styleUrls: ['./country.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class CountryComponent implements OnInit {
  @Input() flag: string = './assets/lebanon.png' //declaring the variable FLAG
  @Input() name: string = 'Lebanon';
  @Input() population: number = 0;
  @Input() capital: string = 'Beirut';
  @Input() languages: string[];
  @Input() borders: string[];
  formModal: any;
  countryPassed: string = '';
  displayAll: boolean = true;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private appservice: AppService, private route: Router) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit(): void {
    this.appservice.dataEmitter.subscribe((value) => {
      this.countryPassed = value;

    })
  }

  open(content) {
    this.modalService.open(content);
    
  }
}


