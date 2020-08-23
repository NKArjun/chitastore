import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  toggle = false;
  menuOpen = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.navigate(['orders/new-order'])
  }

  navigatenewOrder(){
    this.router.navigate(['/orders/new-order']);
    this.toggle = false;
  }
}
