import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DangkyComponent } from './dangky/dangky.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { CtttComponent } from './tuyendung/cttt/cttt.component';
import { DangtuyenComponent } from './tuyendung/dangtuyen/dangtuyen.component';
import { GioithieutComponent } from './tuyendung/gioithieut/gioithieut.component';
import { HometComponent } from './tuyendung/homet/homet.component';
import { TintuctComponent } from './tuyendung/tintuct/tintuct.component';
import { TuyendungComponent } from './tuyendung/tuyendung.component';
import { CongtyComponent } from './ungvien/congty/congty.component';
import { CtietcvComponent } from './ungvien/ctietcv/ctietcv.component';
import { CttinComponent } from './ungvien/cttin/cttin.component';
import { GioithieuComponent } from './ungvien/gioithieu/gioithieu.component';
import { HomeComponent } from './ungvien/home/home.component';
import { HosoComponent } from './ungvien/hoso/hoso.component';
import { LienheComponent } from './ungvien/lienhe/lienhe.component';
import { LuuviecComponent } from './ungvien/luuviec/luuviec.component';
import { NganhngheComponent } from './ungvien/nganhnghe/nganhnghe.component';
import { NopCVComponent } from './ungvien/nop-cv/nop-cv.component';
import { TimkiemComponent } from './ungvien/timkiem/timkiem.component';
import { TintucComponent } from './ungvien/tintuc/tintuc.component';
import { UngvienComponent } from './ungvien/ungvien.component';

const routes: Routes = [
  {path:'dangky',component:DangkyComponent},
  {path:'dangnhap',component:DangnhapComponent},
  { 
    path: 'ungvien', 
    component: UngvienComponent,
    children: [
      {path:"",component:HomeComponent},
      {path: 'gioithieu',component:GioithieuComponent},
      {path:"lienhe",component:LienheComponent},
      {path:"tintuc/:id_danhmuctin",component:TintucComponent},
      {path:"ketqua",component:TimkiemComponent},
      {path:"ctcv/:id_congviec",component:CtietcvComponent},
      {path:"timkiem",component:TimkiemComponent},
      {path:"hoso",component:HosoComponent},
      {path:"nganhnghe/:id_danhmucnganh",component:NganhngheComponent},
      {path:"cttin/:id_tin",component:CttinComponent},
      {path:"congty/:id_congty",component:CongtyComponent},
      {path:"luuviec",component:LuuviecComponent},
      {path:"viec-da-ung-tuyen",component:NopCVComponent}
   ]
  },
  {
    path:'nhatuyendung',
    component:TuyendungComponent,
    children:[
      {path:"",component:HometComponent},
      {path: 'gioithieu',component:GioithieutComponent},
      {path:"lienhe",component:LienheComponent},
      {path:"tintuc/:id_danhmuctin",component:TintuctComponent},
      {path:"ketqua",component:TimkiemComponent},
      {path:"dangtuyen",component:DangtuyenComponent},
      {path:"timkiem",component:TimkiemComponent},
      {path:"cttin/:id_tin",component:CtttComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
