import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplyService } from 'src/app/service/apply.service';
import { HomeService } from 'src/app/service/home.service';
import { NganhService } from 'src/app/service/nganh.service';

@Component({
  selector: 'app-nganhnghe',
  templateUrl: './nganhnghe.component.html',
  styleUrls: ['./nganhnghe.component.css']
})
export class NganhngheComponent implements OnInit {
  viec:any[]=[];
  nganh:any;
  PhotoFilePath: any;
  id_luucongviec: any;

  id_user: any;
  trangthaicv = 0;
  anhcv: any;
  ngaynop:any;
  id_nopcv: any;
  list_luucv: any = []
  list_ungtuyen: any = []
  constructor(private nganhService: NganhService,private Activatedroute:ActivatedRoute,private viecService:HomeService,private route: Router,private applyService: ApplyService) { }

  ngOnInit(): void {
    this.getRoute(this.Activatedroute.snapshot.params['id_danhmucnganh']);
    this.getNgang(this.Activatedroute.snapshot.params['id_danhmucnganh']);

  }
  
  getRoute(id_danhmucnganh:any){
    this.viecService.GetCongviecByDMuc(id_danhmucnganh).subscribe((res:any)=>{
      this.viec = res;
    });  
  
  }
  getNgang(id_danhmucnganh:any){
    this.nganhService.find(id_danhmucnganh).subscribe((res:any)=>{
      this.nganh=res;
    });
  }
  CTCV(id_congviec: number) {
    localStorage.removeItem("id_congviec")
    localStorage.setItem("id_congviec", id_congviec.toString())
    this.route.navigate(['ungvien/ctcv/'+id_congviec])
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
  apply(id_congviec: any) {
    let user = localStorage.getItem("user")
    if (user) {
      let val = {
        id_nopcv: this.id_nopcv,
        id_user: JSON.parse(user).id_user,
        id_congviec: id_congviec,
        anhcv: this.anhcv,
        trangthai: this.trangthaicv,
        ngaynop: new Date()
      };
      // this.applyService.getNopCVByuser(JSON.parse(user).id_user).subscribe((res) => {
      //   this.list_ungtuyen = res;
      //   for (let cv of res) {
      //     if (id_congviec == cv.id_congviec) {
      //       alert('Bạn đã ứng tuyển công việc này! Vui lòng chọn công việc khác.');
      //       location.reload();
      //       break
      //     }
      //   }
      // });

      this.applyService.addCV(val).subscribe((res) => {
        alert('Nộp CV ứng tuyển thành công!');
        location.reload();
      });
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
