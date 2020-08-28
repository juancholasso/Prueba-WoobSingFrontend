import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  public formUser: FormGroup;

  constructor(private formBuilder: FormBuilder, private service:ApiService) { 
    this.formUser = this.formBuilder.group({
      name:['',[Validators.required,Validators.max(20)]],
      lastname:['',[Validators.required,Validators.max(20)]],
      tel:['',[Validators.required]],
      email:['',[Validators.required,Validators.max(20),Validators.email]],
      address:['',[Validators.required,Validators.max(20)]]
    })
  }

  ngOnInit(): void {
  }

  public async submit(){
    var body = {
      name: this.formUser.controls.name.value,
      lastname: this.formUser.controls.lastname.value,
      tel: this.formUser.controls.tel.value,
      address: this.formUser.controls.address.value,
      email: this.formUser.controls.email.value,
    }
    console.log(body);
    var response = await this.service.create(body);
    response.subscribe(
      (data)=>{
        console.log(data);
        alert("Creado!")
      },
      (err)=>{
        alert("Error");
      }
    )
  }
}
