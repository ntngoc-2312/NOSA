import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TinService } from 'src/app/service/tin.service';

@Component({
  selector: 'app-cttin',
  templateUrl: './cttin.component.html',
  styleUrls: ['./cttin.component.css']
})
export class CttinComponent implements OnInit {
  cttin:any;
  tintuc:any[]=[];
  constructor(private tinService: TinService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCTTin(this.route.snapshot.params['id_tin']);
    this.getall();
  }
  getCTTin(id_tin:any){
    this.tinService.getCTTin(id_tin).subscribe((res:any)=>{
      this.cttin = res;
    });  
  
  }
  getall(){
    this.tinService.getAll().subscribe((res:any)=>{
      this.tintuc = res;
    }); 
  }
}
