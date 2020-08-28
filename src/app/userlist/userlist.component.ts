import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  list:any = [];

  constructor(private formBuilder: FormBuilder, private service:ApiService, private router:Router) { 
   
  }

  ngOnInit(): void {
    this.getList();
  }

  public async getList(){
    var response = await this.service.list();
    response.subscribe(
      (data)=>{
        this.list = data
      },
      (err)=>{
        alert("Error");
      }
    )
  }

  public update(id){
    this.router.navigateByUrl('update/'+id)
  }

  public delete(id){
    this.service.delete(id).subscribe(
      async (data)=>{
        await this.getList();
        alert("Eliminado!");
      },
      (err)=>{
        alert("Error!")
      }
    )
  }
}
