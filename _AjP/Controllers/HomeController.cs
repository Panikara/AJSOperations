using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace _AjP.Controllers
{
    public class HomeController : Controller
    {
        ajsdbEntities _ajsDb = new ajsdbEntities();
      
        [HttpPost]
        public JsonResult Index(detail dIn)
        {
            //detail dIn = new detail();
            _ajsDb.details.Add(dIn);
            _ajsDb.SaveChanges();
            return Json(dIn);
        }
        [HttpGet]
        public JsonResult GetAll()
        {
          var getList = from p in _ajsDb.details select p;
            return Json(getList);
        }
    }
}