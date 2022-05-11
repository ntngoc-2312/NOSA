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
    public class TrinhdohocvansController : ApiController
    {
        private DBNOSAEntities db = new DBNOSAEntities();

        // GET: api/Trinhdohocvans
        public IQueryable<Trinhdohocvan> GetTrinhdohocvans()
        {
            return db.Trinhdohocvans;
        }
        [Route("api/Kinhnghiem/GetKinhnghiems")]
        public IQueryable<Kinhnghiem> GetKinhnghiems()
        {
            return db.Kinhnghiems;
        }
        [Route("api/Loaihinh/GetLoaihinh")]
        public IQueryable<Loaihinhcongviec> GetLoaihinh()
        {
            return db.Loaihinhcongviecs;
        }

        // GET: api/Trinhdohocvans/5
        [ResponseType(typeof(Trinhdohocvan))]
        public IHttpActionResult GetTrinhdohocvan(int id)
        {
            Trinhdohocvan trinhdohocvan = db.Trinhdohocvans.Find(id);
            if (trinhdohocvan == null)
            {
                return NotFound();
            }

            return Ok(trinhdohocvan);
        }

        // PUT: api/Trinhdohocvans/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTrinhdohocvan(int id, Trinhdohocvan trinhdohocvan)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != trinhdohocvan.id_trinhdo)
            {
                return BadRequest();
            }

            db.Entry(trinhdohocvan).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TrinhdohocvanExists(id))
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

        // POST: api/Trinhdohocvans
        [ResponseType(typeof(Trinhdohocvan))]
        public IHttpActionResult PostTrinhdohocvan(Trinhdohocvan trinhdohocvan)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Trinhdohocvans.Add(trinhdohocvan);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (TrinhdohocvanExists(trinhdohocvan.id_trinhdo))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = trinhdohocvan.id_trinhdo }, trinhdohocvan);
        }

        // DELETE: api/Trinhdohocvans/5
        [ResponseType(typeof(Trinhdohocvan))]
        public IHttpActionResult DeleteTrinhdohocvan(int id)
        {
            Trinhdohocvan trinhdohocvan = db.Trinhdohocvans.Find(id);
            if (trinhdohocvan == null)
            {
                return NotFound();
            }

            db.Trinhdohocvans.Remove(trinhdohocvan);
            db.SaveChanges();

            return Ok(trinhdohocvan);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TrinhdohocvanExists(int id)
        {
            return db.Trinhdohocvans.Count(e => e.id_trinhdo == id) > 0;
        }
    }
}