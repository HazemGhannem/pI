import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  nbuser!:number
  nbUserConnected!:number
  constructor(private service:AuthService) { }

  ngOnInit(): void {
    this.service.getusernumber().subscribe( (d) => {this.nbuser=d;
    console.log(d) })
    this.service.getStatistic().subscribe((m)=>
    {this.nbUserConnected=m})
  }

}
