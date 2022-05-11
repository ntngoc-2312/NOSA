import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TinService } from 'src/app/service/tin.service';

@Component({
  selector: 'app-tintuct',
  templateUrl: './tintuct.component.html',
  styleUrls: ['./tintuct.component.css']
})
export class TintuctComponent implements OnInit {
  tintuc:any[]=[];
  dmuc:any;
  constructor(private tinService: TinService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getRoute(this.route.snapshot.params['id_danhmuctin']);
    this.getTenDM(this.route.snapshot.params['id_danhmuctin']);
  }
  
  getRoute(id_danhmuctin:any){
    this.tinService.getTinbyDM(id_danhmuctin).subscribe((res:any)=>{
      this.tintuc = res;
    });  
  
  }
  getTenDM(id_danhmuctin:any){
    this.tinService.find(id_danhmuctin).subscribe((res:any)=>{
      this.dmuc=res;
    });
  }
}
