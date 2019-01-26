import { Component, OnInit } from '@angular/core';
import { AppService } from '../app-service.service'

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public to = (new Date()).setHours(0,0,0,0);
  public from = (new Date()).setHours(23,59,59,1);
  public interval: number;
  public lineChartData:Array<any> = [
    {data: [], label: 'Temperature (C)'},
    {data: [], label: 'Humidity(%)'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 todayTime = [];
 constructor(private appService:AppService) {}

ngOnInit() {
  this.getRecords();


}

  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

public submit() {
  console.log(this.to, this.from);
  this.getRecords();
}
  public getRecords() {
    this.todayTime = []
    this.lineChartLabels= [];
  for(let i =1; i<= 24; i++) {
    this.lineChartLabels.push(i + ' Hr');
    this.todayTime.push((new Date()).setHours(i-1,0,0,0));
    this.lineChartData[0].data.push(parseInt('' + (Math.random() * 10)))
    this.lineChartData[1].data.push(parseInt('' + (Math.random() * 10)))
  }
    this.appService.getRecord().subscribe((response) => {
      console.log("response ", response);
      response.forEach((item) => {
      })
    })
  }
}
