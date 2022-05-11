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
    public class TinhthanhsController : ApiController
    {
        private DBNOSAEntities db = new DBNOSAEntities();

        // GET: api/Tinhthanhs
        public IQueryable<Tinhthanh> GetTinhthanhs()
        {
            return db.Tinhthanhs;
        }
        // GET: api/Tinhthanhs/5
        [ResponseType(typeof(Tinhthanh))]
        public IHttpActionResult GetTinhthanh(int id)
        {
            Tinhthanh tinhthanh = db.Tinhthanhs.Find(id);
            if (tinhthanh == null)
            {
                return NotFound();
            }

            return Ok(tinhthanh);
        }

        // PUT: api/Tinhthanhs/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTinhthanh(int id, Tinhthanh tinhthanh)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tinhthanh.id_tinh)
            {
                return BadRequest();
            }

            db.Entry(tinhthanh).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TinhthanhExists(id))
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

        // POST: api/Tinhthanhs
        [ResponseType(typeof(Tinhthanh))]
        public IHttpActionResult PostTinhthanh(Tinhthanh tinhthanh)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Tinhthanhs.Add(tinhthanh);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = tinhthanh.id_tinh }, tinhthanh);
        }

        // DELETE: api/Tinhthanhs/5
        [ResponseType(typeof(Tinhthanh))]
        public IHttpActionResult DeleteTinhthanh(int id)
        {
            Tinhthanh tinhthanh = db.Tinhthanhs.Find(id);
            if (tinhthanh == null)
            {
                return NotFound();
            }

            db.Tinhthanhs.Remove(tinhthanh);
            db.SaveChanges();

            return Ok(tinhthanh);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TinhthanhExists(int id)
        {
            return db.Tinhthanhs.Count(e => e.id_tinh == id) > 0;
        }
    }
}