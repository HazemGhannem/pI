import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  nbuser!:number
  nbUserConnected!:number
  data!:number
  year=2022
  myCart= [
    { year: 2020, users: 0 },
    { year: 2021, users: 0 },
  ];
  constructor(private service:AuthService) { }

  ngOnInit(): void {
    this.service.getnumberofuserperyear(this.year).subscribe((d)=>{
      this.data=d
      console.log(d)
      this.myCart.push({year:this.year,users:d})
      console.log(this.myCart)
      new Chart(
        'acquisitions',
        {
          type: 'bar',
          data: {
            labels: this.myCart.map(row => row.year),
            datasets: [
              {
                label: 'users by year',
                data: this.myCart.map(row => row.users)
              }
            ]
          }
        }
      );
    })
    this.service.getusernumber().subscribe( (d) => {this.nbuser=d;
    console.log(d) })
    this.service.getStatistic().subscribe((m)=>
    {this.nbUserConnected=m})

    
   
    
    
  }
  

}
