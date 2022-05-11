import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CongtyService } from 'src/app/service/congty.service';
import { HomeService } from 'src/app/service/home.service';
import { NganhService } from 'src/app/service/nganh.service';

@Component({
  selector: 'app-dangtuyen',
  templateUrl: './dangtuyen.component.html',
  styleUrls: ['./dangtuyen.component.css']
})
export class DangtuyenComponent implements OnInit {

  constructor(private readonly APIHome: HomeService,private Activatedroute:ActivatedRoute,private congtyService: CongtyService,private route: Router,private service:NganhService) { }
  congviec: any = [];
 congty:any
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
  kinhnghiemchitiet:any
  ngaybatdau: any
  ngayketthuc: any
  trangthai: any
  tenloaihcv: any;
  tencongty: any;
  email:any;
  diachi:any;
  dienthoai:any;
  url_website:any;
  gioithieu:any;
  logo: any;
  tentinh: any;
  tenkn: any;
  motakn: any;
  tenknghiem: any;
  motaknghiem: any;
  tendanhmuc: any;
  tentrinhdo: any;


  loaihinh:any
  tinh:any
  trinhdo:any
  kinhnghiem: any[]
  nganh:any[]
  ngOnInit(): void {
    this.getcongty(this.Activatedroute.snapshot.params['id_user']);

    this.service.getAllTrinhdo().subscribe(data => {
      this.trinhdo = data;
    });
    this.service.getAllLoaihinh().subscribe(data => {
      this.loaihinh = data;
    });
    this.service.getAllTinh().subscribe(data => {
      this.tinh = data;
    });
    this.service.getAllKinhnghiem().subscribe(data => {
      this.kinhnghiem = data;
    });
    this.service.getAll().subscribe(data => {
      this.nganh = data;
    });
  }
  public formatdate(d: any): any {
    let dt = d.substr(6, 4) + "-" + d.substr(3, 2) + "-" + d.substr(0, 2);
    return dt;
  }
  add(id_congty:any) {
      var val = {
        id_congviec: this.id_congviec,
        id_congty: id_congty,
        id_danhmucnganh: this.id_danhmucnganh,
        id_kynang: this.id_kynang,
        id_loaicv: this.id_loaicv,
        id_loaihinhcv: this.id_loaihinhcv,
        id_kinhnghiem: this.id_kinhnghiem,
        id_trinhdo: this.id_trinhdo,
        id_tinh: this.id_tinh,
        ten: this.ten,
        soluong: this.soluong,
        luongtoithieu: this.luongtoithieu,
        luongtoida: this.luongtoida,
        mota: this.mota,
        kinhnghiemchitiet:this.kinhnghiemchitiet,
        ngaybatdau: new Date(),
        ngayketthuc: this.ngayketthuc,
        trangthai: this.trangthai,
        
        
      };
      this.APIHome.add(val).subscribe((res) => {
        alert('Thêm bài đăng thành công!');
        location.reload();
      });
    
    
  }
  getcongty(id_user:any){
    let user=localStorage.getItem('user');
    if(user){
      
      this.congtyService.getCongtyByUser(id_user = parseInt(JSON.parse(user).id_user)).subscribe(data =>{
        this.congty=data;
        this.id_congty=data[0].id_congty
        this.tencongty=data[0].tencongty
      })
    }    
  }
}
