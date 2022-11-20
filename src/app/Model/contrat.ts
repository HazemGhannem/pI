import { Etudiant } from './etudiant';
import { Specialite } from './../enum/specialite';
export class Contrat {
    idContrat?:number
    dateDebutContrat?:Date
    dateFinContrat?:Date
    archive?:Boolean
    montantContrat?:number
    specialite?:Specialite
    etudiant?:Etudiant
}
