import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  @ViewChild('scrollChat') private scrollBottom: ElementRef;
  messages = [];
  message = '';
  time;
  constructor() { }

  ngOnInit(): void {
    // this.scrollBottom.nativeElement.scrollTop = this.scrollBottom.nativeElement.scrollHeight;
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  sendMessage() {
    this.messages.push(this.message);
    this.message = '';
  }
  scrollToBottom(){
    this.scrollBottom.nativeElement.scrollTop = this.scrollBottom.nativeElement.scrollHeight;
  }
}
