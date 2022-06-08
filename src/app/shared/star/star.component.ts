import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges {
  cropWidth: number = 75;
  @Input() rating: number = 0;

  constructor() { }

  ngOnChanges(): void {
    this.cropWidth=this.rating * 75/5;
  }

}
