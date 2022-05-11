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
    public class CongtiesController : ApiController
    {
        private DBNOSAEntities db = new DBNOSAEntities();

        // GET: api/Congties
        public IQueryable<Congty> GetCongties()
        {
            return db.Congties;
        }

        // GET: api/Congties/5
        [ResponseType(typeof(Congty))]
        public IHttpActionResult GetCongty(int id)
        {
            Congty congty = db.Congties.Find(id);
            if (congty == null)
            {
                return NotFound();
            }

            return Ok(congty);
        }
        [Route("api/Congties/GetCongtyByUser/{id_user}")]
        public IHttpActionResult GetCongtyByUser(int id_user)
        {
            var list = from u in db.User_role
                       join cty in db.Congties on u.id_user equals cty.id_user
                       where u.id_user == id_user
                       select new CongtyModel()
                       {
                           id_congty = cty.id_congty,
                           id_user = u.id_user,
                           tencongty=cty.ten,
                           email=cty.email,
                           diachi=cty.diachi,
                           dienthoai=cty.dienthoai,
                           logo=cty.logo,
                           gioithieu=cty.gioithieu,
                           url_website=cty.url_website,
                           email_user=u.email,
                           matkhau_user=u.matkhau,
                           hoten=u.hoten,
                           gioitinh=u.gioitinh,
                           ngaysinh= (DateTime)u.ngaysinh,
                           dienthoai_user=u.dienthoai,
                           diachi_user=u.diachi                           
                       };
            return Ok(list.ToList());
        }

        public class CongtyModel
        {
            public int id_congty;
            public int id_user;
            public string tencongty;
            public string email;
            public string diachi;
            public string dienthoai;
            public string logo;
            public string gioithieu;
            public string url_website;
            public string email_user;
            public string matkhau_user;
            public string hoten;
            public string gioitinh;
            public DateTime ngaysinh;
            public string dienthoai_user;
            public string diachi_user;
        }

            // PUT: api/Congties/5
            [ResponseType(typeof(void))]
        public IHttpActionResult PutCongty(int id, Congty congty)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != congty.id_congty)
            {
                return BadRequest();
            }

            db.Entry(congty).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CongtyExists(id))
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

        // POST: api/Congties
        [ResponseType(typeof(Congty))]
        public IHttpActionResult PostCongty(Congty congty)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Congties.Add(congty);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = congty.id_congty }, congty);
        }

        // DELETE: api/Congties/5
        [ResponseType(typeof(Congty))]
        public IHttpActionResult DeleteCongty(int id)
        {
            Congty congty = db.Congties.Find(id);
            if (congty == null)
            {
                return NotFound();
            }

            db.Congties.Remove(congty);
            db.SaveChanges();

            return Ok(congty);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CongtyExists(int id)
        {
            return db.Congties.Count(e => e.id_congty == id) > 0;
        }
    }
}