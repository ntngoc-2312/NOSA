import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User_role } from 'src/app/model/user.model';
import { NganhService } from 'src/app/service/nganh.service';
import { TinService } from 'src/app/service/tin.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  id_user: number
  hoten: string
  email: string
  matkhau: string
  role: number
  listUser: User_role[]
  nganh: any = [];
  tin:any=[];
  constructor(private tinService: TinService, private route: Router,private readonly nganhService: NganhService) { }

  ngOnInit(): void {
    let user=localStorage.getItem('user');
    if(user &&  parseInt(JSON.parse(user).role) == 2){
      this.hoten = JSON.parse(user).hoten;
      this.id_user = parseInt(JSON.parse(user).id_user);
      this.role = parseInt(JSON.parse(user).role)
    }   
    
    this.getDMucnganh();
    this.getDMuctin();
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
    if(user && parseInt(JSON.parse(user).role) == 2){
      localStorage.removeItem('user')
      this.route.navigateByUrl(`/dangnhap`);
    }   
  }
  getDMucnganh() {
    this.nganhService.getAll().subscribe((data) => {
      this.nganh = data;
    })
  }
  getDMuctin() {
    this.tinService.GetDMungvien().subscribe((data) => {
      this.tin = data;
    })
  }
}
