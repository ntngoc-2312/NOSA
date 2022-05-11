import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CongtyService } from 'src/app/service/congty.service';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-congty',
  templateUrl: './congty.component.html',
  styleUrls: ['./congty.component.css']
})
export class CongtyComponent implements OnInit {
  viec:any[]=[];
congty:any;
  constructor(private Activatedroute:ActivatedRoute,private viecService:HomeService,private route: Router,private congtyService:CongtyService) { }

  ngOnInit(): void {
    this.getRoute(this.Activatedroute.snapshot.params['id_congty']);
    this.getCongty(this.Activatedroute.snapshot.params['id_congty']);
  }
  
  getRoute(id_congty:any){
    this.viecService.GetCongviecByCongty(id_congty).subscribe((res:any)=>{
      this.viec = res;
    });  
  
  }
  getCongty(id_congty:any){
    this.congtyService.find(id_congty).subscribe((res:any)=>{
      this.congty=res;
    });
  }
  CTCV(id_congviec: number) {
    localStorage.removeItem("id_congviec")
    localStorage.setItem("id_congviec", id_congviec.toString())
    this.route.navigate(['ungvien/ctcv/'+id_congviec])
  }
}
