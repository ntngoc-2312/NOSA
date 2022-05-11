import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplyService } from 'src/app/service/apply.service';
import { HomeService } from 'src/app/service/home.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private readonly APIHome: HomeService, private route: Router, private applyService: ApplyService) { }
  congviec: any = [];
  id:any;
  
  id_congviec: any;
  ten: any;
  luongtoithieu: any;
  luongtoida: any;
  ngaybatdau: any;
  ngayketthuc: any;
  id_loaihcv: any;
  tenloaihcv: any;
  id_congty: any;
  tencongty: any;
  logo: any;
  id_tinh: any;
  tentinh: any;
  totalLength: any;
  page: number = 1;

  PhotoFilePath: any;
  id_luucongviec: any;

  id_user: any;
  trangthaicv = 0;
  anhcv: any;
  ngaynop:any;
  id_nopcv: any;
  list_luucv: any = []
  list_ungtuyen: any = []
  ngOnInit(): void {
    this.getAll();

  }

  getAll() {
    this.APIHome.getCongviecbyngay().subscribe((data) => {
      this.congviec = data;
      this.totalLength = this.congviec.length;
      console.log(this.congviec)
    })
  }

  CTCV(id_congviec: number) {
    localStorage.removeItem("id_congviec")
    localStorage.setItem("id_congviec", id_congviec.toString())
    this.route.navigate(['ungvien/ctcv/' + id_congviec])
  }
  getId(id_congviec:any){
    this.id = id_congviec;
  }
  luucv(id_congviec: any) {
    let user = localStorage.getItem("user")
    if (user) {
      let val = {
        id_luucongviec: this.id_luucongviec,
        id_user: JSON.parse(user).id_user,
        id_congviec: id_congviec,
      };
      this.applyService.getluubyuser(JSON.parse(user).id_user).subscribe((data) => {
        this.list_luucv = data;
        for (let item of data) {
          if (id_congviec == item.id_congviec) {
            alert('Bạn đã lưu công việc này! Vui lòng chọn công việc khác.');
            location.reload();
            break
          }
        }
      });
      this.applyService.luucv(val).subscribe((res) => {
        alert('Lưu công việc thành công!');
        location.reload();
      });
    }
  }
  apply() {
    let user = localStorage.getItem("user")
    if (user && this.anhcv) {
      let val = {
        id_nopcv: this.id_nopcv,
        id_user: JSON.parse(user).id_user,
        id_congviec: this.id,
        anhcv: this.anhcv,
        trangthai: this.trangthaicv,
        ngaynop: new Date()
      };
      this.applyService.addCV(val).subscribe((res) => {
        alert(res.message);
        $('#ApplyModal').hide();
        $('.modal-backdrop').hide();
      });
    }
    else {
      alert("Bạn chưa chọn ảnh. Vui lòng chọn!");
    }
  }
  PhotoUpload(event: any) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.applyService.upLoadPhoto(formData).subscribe((data: any) => {
      this.anhcv = data.toString();
      this.PhotoFilePath = this.applyService.PhotoUrl + this.anhcv;
    })
  }
}
