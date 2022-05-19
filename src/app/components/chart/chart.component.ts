import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';

import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  @ViewChild('charts') charts: any;
  data: any;
  diag: any;
  diag2: any;
  main: any;
  userData: any[] = JSON.parse(localStorage.getItem('user-Data'));
  xArray: any[] = [];
  yArray: any[] = [];
  constructor(private loc: Location) {}

  ngOnInit(): void {}
  back() {
    this.loc.back();
  }
  ngAfterViewInit() {
    this.diag = this.charts.nativeElement;
    this.diag2 = this.diag.getContext('2d');
    for (let i of this.userData) {
      this.xArray.push(i.name);
      this.yArray.push(i.hour);
    }
    var xValues = this.xArray;
    var yValues = this.yArray;

    this.main = new Chart(this.diag2, {
      type: 'line',
      data: {
        labels: xValues,
        datasets: [
          {
            label: 'Estimated hours',
            data: yValues,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
      options: {
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true,
          },
        },
        scales: {
          y: {
            // defining min and max so hiding the dataset does not change scale range
            min: 0,
            max: 10,
          },
        },
      },
    });
  }
}
