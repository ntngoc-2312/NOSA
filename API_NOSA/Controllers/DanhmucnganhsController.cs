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
    public class DanhmucnganhsController : ApiController
    {
        private DBNOSAEntities db = new DBNOSAEntities();

        // GET: api/Danhmucnganhs
        public IQueryable<Danhmucnganh> GetDanhmucnganhs()
        {
            return db.Danhmucnganhs;
        }

        // GET: api/Danhmucnganhs/5
        [ResponseType(typeof(Danhmucnganh))]
        public IHttpActionResult GetDanhmucnganh(int id)
        {
            Danhmucnganh danhmucnganh = db.Danhmucnganhs.Find(id);
            if (danhmucnganh == null)
            {
                return NotFound();
            }

            return Ok(danhmucnganh);
        }

        // PUT: api/Danhmucnganhs/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutDanhmucnganh(int id, Danhmucnganh danhmucnganh)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != danhmucnganh.id_danhmucnganh)
            {
                return BadRequest();
            }

            db.Entry(danhmucnganh).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DanhmucnganhExists(id))
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

        // POST: api/Danhmucnganhs
        [ResponseType(typeof(Danhmucnganh))]
        public IHttpActionResult PostDanhmucnganh(Danhmucnganh danhmucnganh)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Danhmucnganhs.Add(danhmucnganh);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = danhmucnganh.id_danhmucnganh }, danhmucnganh);
        }

        // DELETE: api/Danhmucnganhs/5
        [ResponseType(typeof(Danhmucnganh))]
        public IHttpActionResult DeleteDanhmucnganh(int id)
        {
            Danhmucnganh danhmucnganh = db.Danhmucnganhs.Find(id);
            if (danhmucnganh == null)
            {
                return NotFound();
            }

            db.Danhmucnganhs.Remove(danhmucnganh);
            db.SaveChanges();

            return Ok(danhmucnganh);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool DanhmucnganhExists(int id)
        {
            return db.Danhmucnganhs.Count(e => e.id_danhmucnganh == id) > 0;
        }
    }
}