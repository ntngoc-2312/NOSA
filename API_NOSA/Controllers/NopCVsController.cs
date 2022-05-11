using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;
using API_NOSA.Models;

namespace API_NOSA.Controllers
{
    public class NopCVsController : ApiController
    {
        private DBNOSAEntities db = new DBNOSAEntities();

        // GET: api/NopCVs
        public IQueryable<NopCV> GetNopCVs()
        {
            return db.NopCVs;
        }

        [Route("api/NopCVs/Getungtuyen/{id_user}")]
        public IHttpActionResult Getungtuyen(int id_user)
        {
            var list = from user in db.User_role
                       join cv in db.NopCVs on user.id_user equals cv.id_user
                       join cviec in db.Congviecs on cv.id_congviec equals cviec.id_congviec
                       join cty in db.Congties on cviec.id_congty equals cty.id_congty
                       where user.id_user == id_user
                       select new CVModel()
                       {
                           id_nopcv = cv.id_nopcv,
                           id_user = user.id_user,
                           id_congviec = cviec.id_congviec,
                           ten = cviec.ten,
                           ngayketthuc = (DateTime)cviec.ngayketthuc,
                           id_congty=cty.id_congty,
                           tencongty=cty.ten,
                           logo=cty.logo,
                           anhcv = cv.anhcv,
                           trangthai= (int)cv.trangthai,
                           ngaynop= (DateTime)cv.ngaynop

                       };
            return Ok(list.ToList());
        }

        [Route("api/NopCVs/UploadFile")]
        public string UploadFile()
        {
            try
            {
                var httpRequest = HttpContext.Current.Request;
                var postedFile = httpRequest.Files[0];
                string fileName = postedFile.FileName;
                var physicalPath = HttpContext.Current.Server.MapPath("~/Photos/" + fileName);

                postedFile.SaveAs(physicalPath);
                return fileName;
            }
            catch (Exception)
            {
                return "empty.png";
            }
        }


        // GET: api/NopCVs/5
        [ResponseType(typeof(NopCV))]
        public IHttpActionResult GetNopCV(int id)
        {
            NopCV nopCV = db.NopCVs.Find(id);
            if (nopCV == null)
            {
                return NotFound();
            }

            return Ok(nopCV);
        }

        // PUT: api/NopCVs/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutNopCV(int id, NopCV nopCV)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != nopCV.id_nopcv)
            {
                return BadRequest();
            }

            db.Entry(nopCV).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NopCVExists(id))
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

        // POST: api/NopCVs
        [ResponseType(typeof(NopCV))]
        public IHttpActionResult PostNopCV(NopCV nopCV)
        {
            var ktra = db.NopCVs.Any(o => o.id_user == nopCV.id_user && o.id_congviec == nopCV.id_congviec);
            if (ktra)
                return Json(new { message = "Bạn đã ứng tuyển công việc này." });

            else
            {
                db.NopCVs.Add(nopCV);
                db.SaveChanges();
                return Json(new { message = "Nộp CV thành công!" });
            }
        }
        // DELETE: api/NopCVs/5
        [ResponseType(typeof(NopCV))]
        public IHttpActionResult DeleteNopCV(int id)
        {
            NopCV nopCV = db.NopCVs.Find(id);
            if (nopCV == null)
            {
                return NotFound();
            }

            db.NopCVs.Remove(nopCV);
            db.SaveChanges();

            return Ok(nopCV);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool NopCVExists(int id)
        {
            return db.NopCVs.Count(e => e.id_nopcv == id) > 0;
        }
        public class CVModel
        {
            public int id_nopcv;
            public int id_user;
            public int id_congviec;
            public string ten;
            public DateTime ngayketthuc;
            public int id_congty;
            public string tencongty;
            public string logo;
            public string anhcv;
            public int trangthai;
            public DateTime ngaynop;
        }
    }
}