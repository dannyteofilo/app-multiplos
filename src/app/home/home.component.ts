import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  inputNumber: number = 0;
  multiples: { number: number; colors: string[] }[] = [];

  constructor() {}

  ngOnInit() {}

  findMultiples() {
    this.multiples = [];

    for (let i = 0; i <= this.inputNumber; i++) {
      const colors: string[] = [];

      if (i % 3 === 0) {
        colors.push('green');
        if (i % 7 === 0) {
          colors.push('blue');
        }
      } else if (i % 5 === 0) {
        colors.push('red');
      } else if (i % 7 === 0) {
        colors.push('blue');
      }

      this.multiples.push({ number: i, colors: colors });
    }
  }
}
