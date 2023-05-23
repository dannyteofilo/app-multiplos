import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  savedData: {
    inputNumber: number;
    multiples: { colors: string[]; number: number }[];
  }[] = [];

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit(): void {
    this.firestoreService.getResults().subscribe((data) => {
      this.savedData = data.map((item: any) => {
        return {
          inputNumber: item.inputNumber,
          multiples: Object.values(item.multiples),
        };
      });
    });
  }
}
