import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateChatbox(){
    this.router.navigate(['/chat-box'])
  }
}
