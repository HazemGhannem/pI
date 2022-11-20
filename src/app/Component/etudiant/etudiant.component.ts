import { Etudiant } from './../../Model/etudiant';
import { EtudiantServiceService } from './../../Service/etudiant-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  ListEtudiant!:Etudiant[]
  constructor(private etudiantservice:EtudiantServiceService) { }

  ngOnInit(): void {
    this.etudiantservice.getAllStudent().subscribe((etudiant)=>(
      this.ListEtudiant=etudiant
      ))

      
    }

}
