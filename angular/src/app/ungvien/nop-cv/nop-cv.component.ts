import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplyService } from 'src/app/service/apply.service';

@Component({
  selector: 'app-nop-cv',
  templateUrl: './nop-cv.component.html',
  styleUrls: ['./nop-cv.component.css']
})
export class NopCVComponent implements OnInit {

  constructor(private applyService: ApplyService,private Activatedroute:ActivatedRoute,private route: Router) { }
  ungtuyen: any[]=[];
  id_nopcv:any;
  id_user: any;
  id_congviec: any
  id_congty: any
  ten: any
  ngayketthuc: any
  tencongty: any;
  logo:any
  anhcv:any;
  trangthai:any;
  ngaynop:any

  ngOnInit(): void {
    this.getRoute();
  }
  getRoute(){
    let user = localStorage.getItem("user")
    if(user)
    {
      this.applyService.getNopCVByuser(JSON.parse(user).id_user).subscribe((res:any)=>{
        this.ungtuyen = res;
      });  
    }  
  }
  CTCV(id_congviec: number) {
    localStorage.removeItem("id_congviec")
    localStorage.setItem("id_congviec", id_congviec.toString())
    this.route.navigate(['ungvien/ctcv/'+id_congviec])
  }
  
}
