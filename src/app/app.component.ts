import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'Button';
  buttonClickedCount: number;
  backgroundColor;

  ngOnInit() {
    localStorage.removeItem('buttonClickedCount');
  }

  clickCount() {
    this.backgroundColor = "yellow";

    var length = 6;
    var chars=['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    var hex = '#';
    while (length--) hex += chars[(Math.random() * 16) | 0];
    this.backgroundColor = hex;


    if (localStorage.getItem('buttonClickedCount'))
      this.buttonClickedCount = JSON.parse(localStorage.getItem('buttonClickedCount'));
    else
      this.buttonClickedCount = 0;
    this.buttonClickedCount += 1;
    localStorage.setItem('buttonClickedCount', JSON.stringify(this.buttonClickedCount));
  }
}
