import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplyService } from 'src/app/service/apply.service';

@Component({
  selector: 'app-luuviec',
  templateUrl: './luuviec.component.html',
  styleUrls: ['./luuviec.component.css']
})
export class LuuviecComponent implements OnInit {

  constructor(private applyService: ApplyService,private Activatedroute:ActivatedRoute,private route: Router) { }
  luuviec: any[]=[];
  id_luucongviec:any;
  id_user: any;
  id_congviec: any
  id_congty: any
  ten: any
  ngayketthuc: any
  tencongty: any;
  logo:any

  ngOnInit(): void {
    this.getRoute();
  }
  getRoute(){
    let user = localStorage.getItem("user")
    if(user)
    {
      this.applyService.getluubyuser(JSON.parse(user).id_user).subscribe((res:any)=>{
        this.luuviec = res;
      });  
    }  
  }
  CTCV(id_congviec: number) {
    localStorage.removeItem("id_congviec")
    localStorage.setItem("id_congviec", id_congviec.toString())
    this.route.navigate(['ungvien/ctcv/'+id_congviec])
  }
  xoa(id_luucongviec: any) {
    if (confirm('Bạn có chắc chắn bỏ lưu công việc này không???')) {
      this.applyService.xoaluu(id_luucongviec).subscribe((res:any)=>{;
        location.reload();
      });
    }
  }
}
