import { Component, OnInit } from '@angular/core';
import { GetwinesService } from '../getwines.service';
import { not } from '@angular/compiler/src/output/output_ast';

export interface lis {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public wineArr;
  public numbers;
  public pageno;
  public filterdata;
  public filteron;
  datas: lis[] = [
    {value: 'None', viewValue: 'None'},
    {value: 'Country', viewValue: 'Country'},
    {value: 'Province', viewValue: 'Province'},
    {value: 'Regions', viewValue: 'Regions'}
  ];
  constructor(private myserv : GetwinesService) { }

  
  ngOnInit() {
    this.myserv.getwines(1).subscribe(data =>{
      this.populateWines(data);
    });
    this.numbers = Array(10).fill(0).map((x,i)=>i);
  }

  populateWines(data){
    this.wineArr = data;
  }

  filon(event:any)
  {
    console.log(event.srcElement.innerText);
    this.filteron = event.srcElement.innerText;
  }
  filter()
  {
    let tmp = this.filteron;
    if(tmp == "Country")
    {
      console.log(this.filterdata);
      this.myserv.getcountry(this.filterdata,1).subscribe(data => {
        this.populateWines(data);
      });
      this.numbers = Array(10).fill(0).map((x,i)=>i);
    }
    else if(tmp == "Province")
    {
      this.myserv.getprovince(this.filterdata,1).subscribe(data => {
        this.populateWines(data);
      });
      this.numbers = Array(10).fill(0).map((x,i)=>i);
    }
    else if(tmp == "Regions")
    {
      this.myserv.getregions(this.filterdata,1).subscribe(data => {
        this.populateWines(data);
      });
      this.numbers = Array(10).fill(0).map((x,i)=>i);
    }
    else
    {
      this.myserv.getwines(1).subscribe(data => {
        this.populateWines(data);
      });
      this.numbers = Array(10).fill(0).map((x,i)=>i);
    }
  }
  min(a,b):any
  {
    if(a<b)
      return a;
    return b;
  }
  max(a,b):any
  {
    if(a<b)
      return b;
    return a;
  }


  pagechange(i:any)
  {
    let j=0;
    let tmp1 = this.max(0,i-5);
    for(let tmp=tmp1;tmp<tmp1+10;tmp++)
    {
      this.numbers[j] = tmp;
      j++;
    }
    let tmp = this.filteron;
    if(tmp == "Country" && typeof this.filterdata != undefined)
    {
      console.log(this.filterdata);
      this.myserv.getcountry(this.filterdata,i).subscribe(data => {
        this.populateWines(data);
      });
      this.numbers = Array(10).fill(0).map((x,i)=>i);
    }
    else if(tmp == "Province" && this.filterdata != "")
    {
      this.myserv.getprovince(this.filterdata,i).subscribe(data => {
        this.populateWines(data);
      });
      this.numbers = Array(10).fill(0).map((x,i)=>i);
    }
    else if(tmp == "Regions" && this.filterdata != "")
    {
      this.myserv.getregions(this.filterdata,i).subscribe(data => {
        this.populateWines(data);
      });
      this.numbers = Array(10).fill(0).map((x,i)=>i);
    }
    else
    {
      this.myserv.getwines(i).subscribe(data =>{
        this.populateWines(data);
      });
    }
  }
  
}
