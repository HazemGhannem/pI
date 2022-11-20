import { Detailequipe } from './detailequipe';
import { Etudiant } from './etudiant';
import { Niveau } from './../enum/niveau';
export class Equipe {
    idEquipe?:number
    nomEquipe?:String
    niveau?:Niveau
    etudiant?:Etudiant[]
    detailequipe?:Detailequipe
}
