import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User_role } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.css']
})
export class DangkyComponent implements OnInit {
  id_user: number
  id_trinhdo: any
  hoten: any
  email: any
  matkhau: any
  matkhau1: any
  gioitinh: any
  ngaysinh: any
  dienthoai: any
  diachi: any
  role: number
  trangthai: any

  listUser: User_role[]
  user: User_role
  constructor(private userAPI: UserService, private route: Router) { }

  ngOnInit(): void {
    // this.loadData()
    let user = localStorage.getItem('user');

    if (user) {
      this.hoten = JSON.parse(user).hoten;
      this.id_user = parseInt(JSON.parse(user).id);
    }
  }

  addUser() {
    this.user = {
      id_user: this.id_user,
      id_trinhdo: this.id_trinhdo,
      email: this.email,
      matkhau: this.matkhau,
      hoten: this.hoten,
      gioitinh: this.gioitinh,
      ngaysinh: this.ngaysinh,
      diachi: this.diachi,
      dienthoai: this.dienthoai,
      role: this.role,
      trangthai: this.trangthai
    }

    if (this.matkhau != this.matkhau1 || this.email == '') {
      alert('Phát hiện dữ liệu truyền vào không hợp lệ, vui lòng kiểm tra lại!')
    }
    else if (this.checkAccountDB() == true && this.role == 1) {
      this.userAPI.addUser(this.user).subscribe(data => {
        this.route.navigateByUrl(`/nhatuyendung`);
      })
    }
    else if (this.checkAccountDB() == true && this.role == 2) {
      this.userAPI.addUser(this.user).subscribe(data => {
        this.route.navigateByUrl(`/ungvien`);

      })
    }
    else {
      alert('Email đã được sử dụng, vui lòng kiểm tra lại!')
      location.reload();
    }

    
  }

  checkAccountDB() {
    let rs = true
    this.userAPI.getAllUser().subscribe(data => {
      console.log(data)
      for (let i of data) {
        if (this.email == i.email) {
          rs = false
        }
      }
    })
    return rs
  }
}
