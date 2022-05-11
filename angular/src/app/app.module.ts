import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UngvienComponent } from './ungvien/ungvien.component';
import { TuyendungComponent } from './tuyendung/tuyendung.component';
import { AdminComponent } from './admin/admin.component';
import { FooterComponent } from './ungvien/footer/footer.component';
import { HomeComponent } from './ungvien/home/home.component';
import { TintucComponent } from './ungvien/tintuc/tintuc.component';
import { TimkiemComponent } from './ungvien/timkiem/timkiem.component';
import { LienheComponent } from './ungvien/lienhe/lienhe.component';
import { GioithieuComponent } from './ungvien/gioithieu/gioithieu.component';
import { MenuComponent } from './ungvien/menu/menu.component';
import { CtietcvComponent } from './ungvien/ctietcv/ctietcv.component';
import { HosoComponent } from './ungvien/hoso/hoso.component';
import { DangtuyenComponent } from './tuyendung/dangtuyen/dangtuyen.component';
import { GioithieutComponent } from './tuyendung/gioithieut/gioithieut.component';
import { TintuctComponent } from './tuyendung/tintuct/tintuct.component';
import { HometComponent } from './tuyendung/homet/homet.component';
import { MenutComponent } from './tuyendung/menut/menut.component';
import { FootertComponent } from './tuyendung/footert/footert.component';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DangkyComponent } from './dangky/dangky.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { NganhngheComponent } from './ungvien/nganhnghe/nganhnghe.component';
import { CttinComponent } from './ungvien/cttin/cttin.component';
import { CtttComponent } from './tuyendung/cttt/cttt.component';
import { CongtyComponent } from './ungvien/congty/congty.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NopCVComponent } from './ungvien/nop-cv/nop-cv.component';
import { LuuviecComponent } from './ungvien/luuviec/luuviec.component';
import { AHomeComponent } from './admin/a-home/a-home.component';
import { ATintucComponent } from './admin/a-tintuc/a-tintuc.component';
import { ADanhmuctinComponent } from './admin/a-danhmuctin/a-danhmuctin.component';


@NgModule({
  declarations: [
    AppComponent,
    UngvienComponent,
    TuyendungComponent,
    AdminComponent,
    FooterComponent,
    HomeComponent,
    TintucComponent,
    TimkiemComponent,
    LienheComponent,
    GioithieuComponent,
    MenuComponent,
    CtietcvComponent,
    DangnhapComponent,
    DangkyComponent,
    HosoComponent,
    DangtuyenComponent,
    GioithieutComponent,
    TintuctComponent,
    HometComponent,
    MenutComponent,
    FootertComponent,
    NganhngheComponent,
    CttinComponent,
    CtttComponent,
    CongtyComponent,
    NopCVComponent,
    LuuviecComponent,
    AHomeComponent,
    ATintucComponent,
    ADanhmuctinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    
  ],
  providers: [{provide: APP_BASE_HREF, useValue: ''}],
  bootstrap: [AppComponent]
})
export class AppModule { }
