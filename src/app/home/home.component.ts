import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  inputNumber: number = 0;
  previousInputNumber = 0;
  multiples: { number: number; colors: string[] }[] = [];

  constructor(private firestoreService: FirestoreService) {}

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
    this.saveData();
  }

  saveData() {
    if (this.inputNumber !== this.previousInputNumber && this.inputNumber !== 0) {
      const data = {
        inputNumber: this.inputNumber,
        multiples: this.multiples,
      };

      this.firestoreService
        .saveData(data)
        .then(() => {
          console.log('Data stored in Firebase Firestore');
        })
        .catch((error) => {
          console.error('Error saving data in Firebase Firestore', error);
        });
      this.previousInputNumber = this.inputNumber;
    }
  }
}
