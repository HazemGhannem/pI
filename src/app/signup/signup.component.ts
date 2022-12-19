import { Etudiant } from './../Model/etudiant';
import { Router } from '@angular/router';
import { AuthService } from './../Service/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorMessage?=''
  imgURL: any;
  file!: string;
  userFile: any;
  public imagePath: any;
  
  infoForm() {
    this.service.formdata= this.fb.group({
    email: ['',[Validators.required,Validators.email,Validators.minLength(8)]],
    password:['',[Validators.required,Validators.minLength(8)]],
    nomE:['',[Validators.required, Validators.minLength(3)]],
    prenomE:['',[Validators.required, Validators.minLength(3)]],
    image:['',[Validators.required]],
    option:['',[Validators.required]],
    phonenumber:['',[Validators.required,Validators.pattern('[- +()0-9]+'),Validators.minLength(8)]],
  })}

  constructor(private fb: FormBuilder, public service:AuthService, private router: Router) { }

  ngOnInit(): void {
  this.infoForm()
  }
  get role(){
    return this.service.formdata.get('option')
  }
  
  get email(){
    return this.service.formdata.get('email');
  }
  get password(){
    return this.service.formdata.get('password');
  }
  get name(){
    return this.service.formdata.get('nomE');
  }
  get lastname(){
    return this.service.formdata.get('prenomE');
  }
  get image(){
    return this.service.formdata.get('image');
  }
  get phonenumber(){
    return this.service.formdata.get('phonenumber');
  }



  addData() {
    const formData = new FormData();
      
      const users = this.service.formdata.value;
       formData.append('user', JSON.stringify(users));
       formData.append('file', this.userFile);
      //  console.log(formData.getAll('user'))
      //  console.log(formData.getAll('file'))     
      this.service.addUser(formData).subscribe( data => {
        console.log(data)
        console.log("user created")
      this.router.navigate(['/sign-up']);
    });
  }
  onSelectFile(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;
      // this.f['profile'].setValue(file);

      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        //this.toastr.success('Only images are supported.');

        return;
      }
      var reader = new FileReader();
      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      }
    }
  }

  fileChange(event: any) {
    // Instantiate an object to read the file content
    let reader = new FileReader();
    // when the load event is fired and the file not empty
    if(event.target.files && event.target.files.length > 0) {
      // Fill file variable with the file content
      this.file = event.target.files[0];
    }
  }

}
