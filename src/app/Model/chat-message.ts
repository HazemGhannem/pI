import { Etudiant } from './etudiant';
export class ChatMessage {
    id?:number
    content?:String
    sender?:Etudiant 
    reciver?:Etudiant 
    senddate?:Date 
}
