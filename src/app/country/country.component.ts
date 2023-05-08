import { Component, OnInit, Input } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  @Input() capital:string='Beirut';
  @Input() languages:string[];
  formModal: any;

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit(): void {

  }

  open(content) {
    this.modalService.open(content);
  }
}


