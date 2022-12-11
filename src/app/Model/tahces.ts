import { Etudiant } from './etudiant';
import { Tachetype } from "../enum/tachetype"

export class Tahces {
    idTache?:number
    name?:String
    type?:Tachetype
    startDate?:Date
    endDate?:Date
    description?:String
    etudiant?:Etudiant

}
