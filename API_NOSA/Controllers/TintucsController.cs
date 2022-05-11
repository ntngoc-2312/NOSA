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
    public class TintucsController : ApiController
    {
        private DBNOSAEntities db = new DBNOSAEntities();

        // GET: api/Tintucs
        public IQueryable<Tintuc> GetTintucs()
        {
            return db.Tintucs;
        }

        // GET: api/Tintucs/5
        [ResponseType(typeof(Tintuc))]
        public IHttpActionResult GetTintuc(int id)
        {
            Tintuc tintuc = db.Tintucs.Find(id);
            if (tintuc == null)
            {
                return NotFound();
            }

            return Ok(tintuc);
        }

        [HttpGet]
        [Route("api/Tintucs/GetTinByDM/{id_danhmuctin}")]
        public IEnumerable<Tintuc> GetTinByDM(int id_danhmuctin)
        {
            var listsc = from dm in db.Danhmuctins
                         join t in db.Tintucs on dm.id_danhmuctin equals t.id_danhmuctin
                         where (dm.id_danhmuctin == id_danhmuctin)
                         select new { sub_ID = t.id_tin };
            List<Tintuc> list = new List<Tintuc>();
            foreach (var l in listsc)
            {
                list.Add(db.Tintucs.SingleOrDefault(x => x.id_tin == l.sub_ID));
            }
            return list;
        }

        // PUT: api/Tintucs/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTintuc(int id, Tintuc tintuc)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tintuc.id_tin)
            {
                return BadRequest();
            }

            db.Entry(tintuc).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TintucExists(id))
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

        // POST: api/Tintucs
        [ResponseType(typeof(Tintuc))]
        public IHttpActionResult PostTintuc(Tintuc tintuc)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Tintucs.Add(tintuc);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = tintuc.id_tin }, tintuc);
        }

        // DELETE: api/Tintucs/5
        [ResponseType(typeof(Tintuc))]
        public IHttpActionResult DeleteTintuc(int id)
        {
            Tintuc tintuc = db.Tintucs.Find(id);
            if (tintuc == null)
            {
                return NotFound();
            }

            db.Tintucs.Remove(tintuc);
            db.SaveChanges();

            return Ok(tintuc);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TintucExists(int id)
        {
            return db.Tintucs.Count(e => e.id_tin == id) > 0;
        }
    }
}