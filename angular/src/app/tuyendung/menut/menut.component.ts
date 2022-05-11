import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { User_role } from 'src/app/model/user.model';
import { CongtyService } from 'src/app/service/congty.service';
import { TinService } from 'src/app/service/tin.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-menut',
  templateUrl: './menut.component.html',
  styleUrls: ['./menut.component.css']
})
export class MenutComponent implements OnInit {
  id_user: number
  hoten: string
  email: string
  matkhau: string
  role: number
  listUser: User_role[]
  tin:any=[];
  user1: User_role
  congty:any;
  tencongty: any;
  logo:any
  id_congty:any
  constructor(private Activatedroute:ActivatedRoute,private tinService: TinService, private congtyService: CongtyService, private route: Router) { }

  ngOnInit(): void {
    let user=localStorage.getItem('user');
    if(user && parseInt(JSON.parse(user).role)==1){
      this.hoten = JSON.parse(user).hoten;
      this.id_user = parseInt(JSON.parse(user).id_user);
      this.role = parseInt(JSON.parse(user).role)
    }   
    this.getDMuctin();
    this.getcongty(this.Activatedroute.snapshot.params['id_user']);
     
  }
  loadData() {
    this.id_user = 0
    this.hoten = ''
    this.matkhau = ''
    this.email = ''
    this.role = 0

  }
  log_out(){
    let user=localStorage.getItem('user');
    if(user && parseInt(JSON.parse(user).role) != 1){
      localStorage.removeItem('user')
      this.route.navigateByUrl(`/dangnhap`);
    }   
  }
  getDMuctin() {
    this.tinService.GetDMtuyendung().subscribe((data) => {
      this.tin = data;
    })
  }
  getcongty(id_user:any){
    let user=localStorage.getItem('user');
    if(user){
      
      this.congtyService.getCongtyByUser(id_user = parseInt(JSON.parse(user).id_user)).subscribe(data =>{
        this.congty=data;
        this.id_congty=data[0].id_congty
        this.tencongty=data[0].tencongty
        this.logo=data[0].logo
      })
    }    
  }
}
