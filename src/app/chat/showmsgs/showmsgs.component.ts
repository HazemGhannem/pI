import { AuthService } from './../../Service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showmsgs',
  templateUrl: './showmsgs.component.html',
  styleUrls: ['./showmsgs.component.css']
})
export class ShowmsgsComponent implements OnInit {
  data!:any
  id!:any
  constructor(public service:AuthService) { }

  ngOnInit(): void {
  }

}
