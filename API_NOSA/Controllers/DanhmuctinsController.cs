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
    public class DanhmuctinsController : ApiController
    {
        private DBNOSAEntities db = new DBNOSAEntities();

        // GET: api/Danhmuctins
        public IQueryable<Danhmuctin> GetDanhmuctins()
        {
            return db.Danhmuctins;
        }
        [Route("api/Danhmuctins/GetDMungvien")]
        public IQueryable<Danhmuctin> GetDMungvien()
        {
            return db.Danhmuctins.Where(x=>x.trangthai==1);
        }
        
        [Route("api/Danhmuctins/GetDMtuyendung")]
        public IQueryable<Danhmuctin> GetDMtuyendung()
        {
            return db.Danhmuctins.Where(x => x.trangthai == 2);
        }

        // GET: api/Danhmuctins/5
        [ResponseType(typeof(Danhmuctin))]
        public IHttpActionResult GetDanhmuctin(int id)
        {
            Danhmuctin danhmuctin = db.Danhmuctins.Find(id);
            if (danhmuctin == null)
            {
                return NotFound();
            }

            return Ok(danhmuctin);
        }

        // PUT: api/Danhmuctins/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutDanhmuctin(int id, Danhmuctin danhmuctin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != danhmuctin.id_danhmuctin)
            {
                return BadRequest();
            }

            db.Entry(danhmuctin).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DanhmuctinExists(id))
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

        // POST: api/Danhmuctins
        [ResponseType(typeof(Danhmuctin))]
        public IHttpActionResult PostDanhmuctin(Danhmuctin danhmuctin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Danhmuctins.Add(danhmuctin);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = danhmuctin.id_danhmuctin }, danhmuctin);
        }

        // DELETE: api/Danhmuctins/5
        [ResponseType(typeof(Danhmuctin))]
        public IHttpActionResult DeleteDanhmuctin(int id)
        {
            Danhmuctin danhmuctin = db.Danhmuctins.Find(id);
            if (danhmuctin == null)
            {
                return NotFound();
            }

            db.Danhmuctins.Remove(danhmuctin);
            db.SaveChanges();

            return Ok(danhmuctin);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool DanhmuctinExists(int id)
        {
            return db.Danhmuctins.Count(e => e.id_danhmuctin == id) > 0;
        }
    }
}