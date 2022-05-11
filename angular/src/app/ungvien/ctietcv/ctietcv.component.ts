import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Congviec } from 'src/app/model/congviec.model';
import { ApplyService } from 'src/app/service/apply.service';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-ctietcv',
  templateUrl: './ctietcv.component.html',
  styleUrls: ['./ctietcv.component.css']
})
export class CtietcvComponent implements OnInit {

  constructor(private cviecService: HomeService, private applyService: ApplyService) { }
  cviec = new Congviec;
  ctcv: any;
  id_congviec: any
  id_congty: any
  id_danhmucnganh: any
  id_kynang: any
  id_loaicv: any
  id_loaihinhcv: any
  id_kinhnghiem: any
  id_trinhdo: any
  id_tinh: any
  ten: any
  soluong: any
  luongtoithieu: any
  luongtoida: any
  mota: any
  kinhnghiemchitiet: any
  ngaybatdau: any
  ngayketthuc: any
  trangthai: any
  tenloaihcv: any;
  tencongty: any;
  email: any;
  diachi: any;
  dienthoai: any;
  url_website: any;
  gioithieu: any;
  logo: any;
  tentinh: any;
  tenkn: any;
  motakn: any;
  tenknghiem: any;
  motaknghiem: any;
  tendanhmuc: any;
  tentrinhdo: any;
  PhotoFilePath: any;
  id_luucongviec: any;

  id_user: any;
  trangthaicv = 0;
  anhcv: any;
  ngaynop:any;
  id_nopcv: any;
  list_luucv: any = []
  list_ungtuyen: any = []
  id:any;
  ngOnInit(): void {
    this.getRoute();
  }

  getRoute() {
    let id_congviec = localStorage.getItem("id_congviec")
    if (id_congviec) {
      this.cviecService.getbyid(parseInt(id_congviec)).subscribe((datas: any) => {
        this.ctcv = datas
        this.ten = datas[0].ten
        this.soluong = datas[0].soluong
        this.luongtoithieu = datas[0].luongtoithieu
        this.luongtoida = datas[0].luongtoida,
        this.mota = datas[0].mota,
        this.kinhnghiemchitiet = datas[0].kinhnghiemchitiet,
        this.ngaybatdau = datas[0].ngaybatdau,
        this.ngayketthuc = datas[0].ngayketthuc,
        this.id_congty = datas[0].id_congty,
        this.tencongty = datas[0].tencongty,
        this.logo = datas[0].logo,
        this.email = datas[0].email,
        this.diachi = datas[0].diachi,
        this.dienthoai = datas[0].dienthoai,
        this.gioithieu = datas[0].gioithieu,
        this.url_website = datas[0].url_website,
        this.tentinh = datas[0].tentinh,
        this.tendanhmuc = datas[0].tendanhmuc,
        this.tenknghiem = datas[0].tenknghiem,
        this.tenloaihcv = datas[0].tenloaihcv,
        this.tentrinhdo = datas[0].tentrinhdo,
        this.motakn = datas[0].motakn,
        this.motaknghiem = datas[0].motaknghiem

      });
    }
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
  apply(id_congviec:any) {
    let user = localStorage.getItem("user")
    if (user && this.anhcv) {
      let val = {
        id_nopcv: this.id_nopcv,
        id_user: JSON.parse(user).id_user,
        id_congviec: id_congviec,
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
