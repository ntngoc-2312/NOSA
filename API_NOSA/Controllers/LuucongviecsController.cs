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
    public class LuucongviecsController : ApiController
    {
        private DBNOSAEntities db = new DBNOSAEntities();

        // GET: api/Luucongviecs
        public IQueryable<Luucongviec> GetLuucongviecs()
        {
            return db.Luucongviecs;
        }

        [Route("api/Luucongviecs/GetLuucviec/{id_user}")]
        public IHttpActionResult GetLuucviec(int id_user)
        {
            var list = from user in db.User_role
                       join luu in db.Luucongviecs on user.id_user equals luu.id_user
                       join cviec in db.Congviecs on luu.id_congviec equals cviec.id_congviec
                       join cty in db.Congties on cviec.id_congty equals cty.id_congty
                       where user.id_user == id_user
                       select new CVModel()
                       {
                           id_luucv = luu.id_luucongviec,
                           id_user = user.id_user,
                           id_congviec = cviec.id_congviec,
                           ten = cviec.ten,
                           ngayketthuc = (DateTime)cviec.ngayketthuc,
                           id_congty=cty.id_congty,
                           tencongty = cty.ten,
                           logo = cty.logo
                       };
            return Ok(list.ToList());
        }

        // GET: api/Luucongviecs/5
        [ResponseType(typeof(Luucongviec))]
        public IHttpActionResult GetLuucongviec(int id)
        {
            Luucongviec luucongviec = db.Luucongviecs.Find(id);
            if (luucongviec == null)
            {
                return NotFound();
            }

            return Ok(luucongviec);
        }

        // PUT: api/Luucongviecs/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutLuucongviec(int id, Luucongviec luucongviec)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != luucongviec.id_luucongviec)
            {
                return BadRequest();
            }

            db.Entry(luucongviec).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LuucongviecExists(id))
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

        // POST: api/Luucongviecs
        [ResponseType(typeof(Luucongviec))]
        public IHttpActionResult PostLuucongviec(Luucongviec luucongviec)
        {         
            var ktra= db.Luucongviecs.Any(o => o.id_user == luucongviec.id_user && o.id_congviec == luucongviec.id_congviec);
            if (ktra)
                return null;
            else
            {
                db.Luucongviecs.Add(luucongviec);
                db.SaveChanges();
                return CreatedAtRoute("DefaultApi", new { id = luucongviec.id_luucongviec }, luucongviec);
            }

            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            //db.Luucongviecs.Add(luucongviec);
            //db.SaveChanges();

            //return CreatedAtRoute("DefaultApi", new { id = luucongviec.id_luucv }, luucongviec);
        }

        // DELETE: api/Luucongviecs/5
        [ResponseType(typeof(Luucongviec))]
        public IHttpActionResult DeleteLuucongviec(int id)
        {
            Luucongviec luucongviec = db.Luucongviecs.Find(id);
            if (luucongviec == null)
            {
                return NotFound();
            }

            db.Luucongviecs.Remove(luucongviec);
            db.SaveChanges();

            return Ok(luucongviec);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool LuucongviecExists(int id)
        {
            return db.Luucongviecs.Count(e => e.id_luucongviec == id) > 0;
        }
        public class CVModel
        {
            public int id_luucv;
            public int id_user;
            public int id_congviec;
            public string ten;
            public DateTime ngayketthuc;
            public int id_congty;
            public string tencongty;
            public string logo;
        }
    }
}