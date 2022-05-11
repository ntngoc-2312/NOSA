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
    public class User_roleController : ApiController
    {
        private DBNOSAEntities db = new DBNOSAEntities();

        // GET: api/User_role
        [Route("api/User_role/GetAllUser_role")]
        public IQueryable<User_role> GetUser_role()
        {
            return db.User_role;
        }

        // GET: api/User_role/5
        [ResponseType(typeof(User_role))]
        public IHttpActionResult GetUser_role(int id)
        {
            User_role user_role = db.User_role.Find(id);
            if (user_role == null)
            {
                return NotFound();
            }

            return Ok(user_role);
        }

        [Route("api/User_role/Login")]
        [ResponseType(typeof(User_role))]
        public IHttpActionResult Login(string username,string pass)
        {
            User_role user_role = db.User_role.Where(x => x.email == username && x.matkhau == pass).SingleOrDefault();
            if (user_role == null)
            {
                return Json(new { message = "Thông tin đăng nhập không chính xác" });
            }

            return Ok(user_role);
        }

        // PUT: api/User_role/5
        [ResponseType(typeof(User_role))]
        public IHttpActionResult PutUser_role(int id, User_role user_role)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != user_role.id_user)
            {
                return BadRequest();
            }

            db.Entry(user_role).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!User_roleExists(id))
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

        // POST: api/User_role
        [ResponseType(typeof(User_role))]
        public IHttpActionResult PostUser_role(User_role user_role)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.User_role.Add(user_role);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = user_role.id_user }, user_role);
        }

        // DELETE: api/User_role/5
        [ResponseType(typeof(User_role))]
        public IHttpActionResult DeleteUser_role(int id)
        {
            User_role user_role = db.User_role.Find(id);
            if (user_role == null)
            {
                return null;
            }

            db.User_role.Remove(user_role);
            db.SaveChanges();

            return Ok(user_role);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool User_roleExists(int id)
        {
            return db.User_role.Count(e => e.id_user == id) > 0;
        }
    }
}