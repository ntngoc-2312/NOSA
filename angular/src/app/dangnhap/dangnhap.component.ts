import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {
  id_user: any
  hoten: any
  email: any 
  matkhau: any
  role: any
  listUser: any[]

  user: any
  constructor(private userAPI: UserService, private route: Router) { }

  ngOnInit(): void {
    // this.email = "";
    // this.matkhau = ""

  }
  loginNow() {
    this.userAPI.getAllUser().subscribe(data => {
      this.listUser = data
      for (let item of this.listUser ) {
        if (this.email == item.email && this.matkhau == item.matkhau) {
          if (item.role == 1) {
            this.user = item
            localStorage.setItem('user', JSON.stringify(item))
            alert(`Chào mừng quay trở lại, ${item.hoten}!`)
            this.route.navigateByUrl(`/nhatuyendung`);
            break
          }
          if (item.role == 2) {
            this.user = item
            localStorage.setItem('user', JSON.stringify(item))
            alert(`Chào mừng quay trở lại, ${item.hoten}!`)
            this.route.navigateByUrl(`/ungvien`);
            break
          }
        }
        
      }
     
    })
  }
  // loginNow() {
  //   this.userAPI.Login(this.email, this.matkhau).subscribe((data) => {
  //     if (data) {
        


  //   })
  // }
}
