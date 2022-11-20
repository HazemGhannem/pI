import { Tahces } from './tahces';
import { Departement } from './departement';
import { Equipe } from './equipe';
import { Contrat } from './contrat';
import { Role } from './../enum/role';
import { Option } from './../enum/option';
export class Etudiant {
    idEtudiant?:number
    prenomE?:string
    nomE?:string
    password?:string
    email?:string
    image?:string
    Token?:string
    createdate?:Date
    banned?:Boolean
    verified?:Boolean
    option?:Option
    role?:Role
    Username?:String
    contrat?:Contrat[]
    equipe?:Equipe[]
    departement?:Departement
    tahces?:Tahces[]




}
