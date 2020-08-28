import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css']
})
export class UserupdateComponent implements OnInit {

  public formUser: FormGroup;
  public id:number;

  constructor(private formBuilder: FormBuilder, private service:ApiService, private route: ActivatedRoute) { 
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.service.get( this.id ).subscribe(
      (data:any)=>{
        this.formUser = this.formBuilder.group({
          id:[this.id],
          name:[data.name,[Validators.required,Validators.max(20)]],
          lastname:[data.lastname,[Validators.required,Validators.max(20)]],
          tel:[data.tel,[Validators.required]],
          email:[data.email,[Validators.required,Validators.max(20),Validators.email]],
          address:[data.address,[Validators.required,Validators.max(20)]]
        })
      }
    )
  }

  public async submit(){
    var body = {
      name: this.formUser.controls.name.value,
      lastname: this.formUser.controls.lastname.value,
      tel: this.formUser.controls.tel.value,
      address: this.formUser.controls.address.value,
      email: this.formUser.controls.email.value,
    }
    var id = this.formUser.controls.id.value
    console.log(body);
    var response = await this.service.update(id,body);
    response.subscribe(
      (data)=>{
        console.log(data);
        alert("Actualizado")
      },
      (err)=>{
        alert("Error");
      }
    )
  }

}
