import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  @Input() orderData:any = 
	{
	  "burgers": [
		{
		  "_id": 0,
		  "extras": [
			{
			  "_id": 0
			}
		  ]
		}
	  ]
	};

  @Input() orderJson:any = JSON.stringify(this.orderData);

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getOrder(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      console.log(this.orderJson);
    });
  }

  updateOrder() {
    console.log(this.orderJson);
    this.rest.updateOrder(this.route.snapshot.params['id'], this.orderJson).subscribe((result) => {
      this.router.navigate(['/order-details/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }

}
