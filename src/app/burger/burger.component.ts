import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {

  burgers:any = [];

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getBurgers();
  }

  getBurgers() {
    this.burgers = [];
    this.rest.getBurgers().subscribe((data: {}) => {
      console.log(data);
      this.burgers = data;
    });
  }

}
