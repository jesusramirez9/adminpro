import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-donaut',
  templateUrl: './donaut.component.html',
  styles: [
  ]
})
export class DonautComponent implements OnInit {
  
  @Input() title: string = "no hay titulo";

  @Input('labels') doughnutChartLabels: Label[] = ['labels1', 'labels2', 'labels3'];
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100],

  ];
 public colors : Color[] = [
  {backgroundColor:['#6857e6', '#009fee','#f02059']}
 ];

  constructor() { }

  ngOnInit(): void {
  }

}
