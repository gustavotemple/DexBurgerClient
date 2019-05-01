import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit {

  @Input() orderData =
  {
	  burgers: [
		{
		  extras: [],
		  id: 0
		}
	  ]
	};

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addOrder() {
    this.rest.addOrder(this.orderData).subscribe((result) => {
      this.router.navigate(['/order-details/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }
}
