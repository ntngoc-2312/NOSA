using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using API_NOSA.Models;

namespace API_NOSA.Controllers
{
    public class CongviecsController : ApiController
    {
        private DBNOSAEntities db = new DBNOSAEntities();

        // GET: api/Congviecs
        [Route("api/Congviecs/GetAllCongviec")]
        public IQueryable<Congviec> GetAllCongviec()
        {
            return db.Congviecs;
        }

        // GET: api/Congviecs/5
        [ResponseType(typeof(Congviec))]
        public IHttpActionResult GetCongviecById(int id)
        {
            Congviec congviec = db.Congviecs.Find(id);
            if (congviec == null)
            {
                return NotFound();
            }

            return Ok(congviec);
        }
        

        [Route("api/Congviecs/GetbyID/{id_congviec}")]
        public IHttpActionResult GetbyID(int id_congviec)
        {
            var list = from cv in db.Congviecs
                       join dm in db.Danhmucnganhs on cv.id_danhmucnganh equals dm.id_danhmucnganh
                       join lhcv in db.Loaihinhcongviecs on cv.id_loaihinhcv equals lhcv.id_loaihinhcv
                       join kn in db.Kynangs on cv.id_kynang equals kn.id_kynang
                       join t in db.Tinhthanhs on cv.id_tinh equals t.id_tinh
                       join kng in db.Kinhnghiems on cv.id_kinhnghiem equals kng.id_kinhnghiem
                       join hv in db.Trinhdohocvans on cv.id_trinhdo equals hv.id_trinhdo
                       join cty in db.Congties on cv.id_congty equals cty.id_congty
                       where cv.id_congviec == id_congviec
                       select new
                       {
                           id_congviec = cv.id_congviec,
                           ten = cv.ten,
                           soluong = (int)cv.soluong,
                           luongtoithieu = (int)cv.luongtoithieu,
                           luongtoida = (int)cv.luongtoida,
                           ngaybatdau = (DateTime)cv.ngaybatdau,
                           ngayketthuc = (DateTime)cv.ngayketthuc,
                           mota = cv.mota,
                           kinhnghiemchitiet=cv.kinhnghiemchitiet,
                           id_danhmucnganh = dm.id_danhmucnganh,
                           tendanhmuc = dm.tendanhmuc,
                           id_loaihcv = lhcv.id_loaihinhcv,
                           tenloaihcv = lhcv.tenloaihinhcv,
                           id_kynang = kn.id_kynang,
                           tenkn = kn.ten,
                           motakn = kn.mota,
                           id_tinh = t.id_tinh,
                           tentinh = t.tentinh,
                           id_kinhnghiem = kng.id_kinhnghiem,
                           tenknghiem = kng.ten,
                           motaknghiem = kng.mota,
                           id_trinhdo = hv.id_trinhdo,
                           tentrinhdo = hv.ten,
                           id_congty = cty.id_congty,
                           tencongty = cty.ten,
                           logo = cty.logo,
                           email=cty.email,
                           diachi=cty.diachi,
                           dienthoai=cty.dienthoai,
                           url_website=cty.url_website,
                           gioithieu=cty.gioithieu
                       };
            return Ok(list.ToList());
        }

        [HttpGet]
        [Route("api/Congviecs/Timkiem")]
        public IHttpActionResult Timkiem(string tencongviec, string id_tinh)
        {
            var rs = db.Congviecs.Where(o => o.ten.Contains(tencongviec) && o.id_tinh.ToString().Contains(id_tinh));
            return Ok(rs);
        }

        [Route("api/Congviecs/GetCongviecByDMuc/{id_danhmucnganh}")]
        public IHttpActionResult GetCongviecByDMuc(int id_danhmucnganh)
        {

            var list = from dm in db.Danhmucnganhs
                       join cv in db.Congviecs on dm.id_danhmucnganh equals cv.id_danhmucnganh
                       join cty in db.Congties on cv.id_congty equals cty.id_congty
                       join t in db.Tinhthanhs on cv.id_tinh equals t.id_tinh
                       join lhcv in db.Loaihinhcongviecs on cv.id_loaihinhcv equals lhcv.id_loaihinhcv
                       where dm.id_danhmucnganh == id_danhmucnganh
                       select new CongviecModel()
                       {
                           id_congviec = cv.id_congviec,
                           ten = cv.ten,
                           luongtoithieu = (int)cv.luongtoithieu,
                           luongtoida = (int)cv.luongtoida,
                           ngayketthuc = (DateTime)cv.ngayketthuc,
                           logo = cty.logo,
                           tenloaihcv = lhcv.tenloaihinhcv,
                           id_danhmucnganh=dm.id_danhmucnganh,
                           tendanhmuc=dm.tendanhmuc,
                           tentinh = t.tentinh
                       };
            return Ok(list.ToList());
        }

        [Route("api/Congviecs/GetCongviecByCongty/{id_congty}")]
        public IHttpActionResult GetCongviecByCongty(int id_congty)
        {

            var list = from cty in db.Congties
                       join cv in db.Congviecs on cty.id_congty equals cv.id_congty
                       join t in db.Tinhthanhs on cv.id_tinh equals t.id_tinh
                       join lhcv in db.Loaihinhcongviecs on cv.id_loaihinhcv equals lhcv.id_loaihinhcv
                       where cty.id_congty == id_congty
                       select new CongviecModel()
                       {
                           id_congviec = cv.id_congviec,
                           ten = cv.ten,
                           luongtoithieu = (int)cv.luongtoithieu,
                           luongtoida = (int)cv.luongtoida,
                           ngayketthuc = (DateTime)cv.ngayketthuc,
                           logo = cty.logo,
                           tenloaihcv = lhcv.tenloaihinhcv,
                           tentinh = t.tentinh
                       };
            return Ok(list.ToList());
        }

        [HttpGet]
        [Route("api/Congviecs/GetCongviecFull")]
        public List<CongviecModel> GetCongviecFull()
        {

            var query1 = (from cty in db.Congties
                          join cv in db.Congviecs on cty.id_congty equals cv.id_congty
                          join t in db.Tinhthanhs on cv.id_tinh equals t.id_tinh
                          join lhcv in db.Loaihinhcongviecs on cv.id_loaihinhcv equals lhcv.id_loaihinhcv
                          where (lhcv.id_loaihinhcv == 3001)
                          select new CongviecModel()
                          {
                              id_congviec = cv.id_congviec,
                              ten = cv.ten,
                              luongtoithieu = (int)cv.luongtoithieu,
                              luongtoida = (int)cv.luongtoida,
                              ngaybatdau = (DateTime)cv.ngaybatdau,
                              ngayketthuc = (DateTime)cv.ngayketthuc,
                              id_congty = cty.id_congty,
                              tencongty = cty.ten,
                              logo = cty.logo,
                              id_loaihcv = lhcv.id_loaihinhcv,
                              tenloaihcv = lhcv.tenloaihinhcv,
                              id_tinh = t.id_tinh,
                              tentinh = t.tentinh
                          });
            List<CongviecModel> cv_Cties = new List<CongviecModel>();
            cv_Cties.AddRange(query1);
            return cv_Cties;

        }
       
        [HttpGet]
        [Route("api/Congviecs/GetCongviec")]
        public List<CongviecModel> GetCongviec()
        {
                var query = (from cty in db.Congties
                              join cv in db.Congviecs on cty.id_congty equals cv.id_congty
                              join t in db.Tinhthanhs on cv.id_tinh equals t.id_tinh
                              join lhcv in db.Loaihinhcongviecs on cv.id_loaihinhcv equals lhcv.id_loaihinhcv
                              orderby cv.ngaybatdau descending 
                              select new CongviecModel()
                              {
                                  id_congviec = cv.id_congviec,
                                  ten = cv.ten,
                                  luongtoithieu = (int)cv.luongtoithieu,
                                  luongtoida = (int)cv.luongtoida,
                                  ngaybatdau = (DateTime)cv.ngaybatdau,
                                  ngayketthuc = (DateTime)cv.ngayketthuc,
                                  id_congty = cty.id_congty,
                                  tencongty = cty.ten,
                                  logo = cty.logo,
                                  id_loaihcv = lhcv.id_loaihinhcv,
                                  tenloaihcv = lhcv.tenloaihinhcv,
                                  id_tinh = t.id_tinh,
                                  tentinh = t.tentinh
                              }).Take(30);
                List<CongviecModel> cviec = new List<CongviecModel>();
                cviec.AddRange(query);
                return cviec;
        }

        // PUT: api/Congviecs/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCongviec(int id, Congviec congviec)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != congviec.id_congviec)
            {
                return BadRequest();
            }

            db.Entry(congviec).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CongviecExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Congviecs
        [ResponseType(typeof(Congviec))]
        public IHttpActionResult PostCongviec(Congviec congviec)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Congviecs.Add(congviec);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = congviec.id_congviec }, congviec);
        }

        // DELETE: api/Congviecs/5
        [ResponseType(typeof(Congviec))]
        public IHttpActionResult DeleteCongviec(int id)
        {
            Congviec congviec = db.Congviecs.Find(id);
            if (congviec == null)
            {
                return NotFound();
            }

            db.Congviecs.Remove(congviec);
            db.SaveChanges();

            return Ok(congviec);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CongviecExists(int id)
        {
            return db.Congviecs.Count(e => e.id_congviec == id) > 0;
        }
        public class CongviecModel
        {
            public int id_congviec;
            public string ten;
            public int soluong;
            public int luongtoithieu;
            public int luongtoida;
            public string mota;
            public DateTime ngaybatdau;
            public DateTime ngayketthuc;
            public int trangthai;
            public int id_loaihcv;
            public string tenloaihcv;
            public int id_congty;
            public string tencongty;
            public string logo;
            public string email;
            public string diachi;
            public string url_website;
            public string gioithieu;
            public string dienthoai;
            public int id_tinh;
            public string tentinh;
            public int id_kynang;
            public string tenkn;
            public string motakn;
            public string kinhnghiemchitiet;
            public int id_kinhnghiem;
            public string tenknghiem;
            public string motaknghiem;
            public int id_danhmucnganh;
            public string tendanhmuc;
            public int id_trinhdo;
            public string tentrinhdo;


        }


    }
}