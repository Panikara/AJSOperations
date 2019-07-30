using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Services;

namespace _AjP
{
    /// <summary>
    /// Summary description for myservice
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class myservice : System.Web.Services.WebService
    {
        ajsdbEntities context = new ajsdbEntities();

        [WebMethod]
        public void GetAll()
        {
            var sHow = from p in context.details select p;
            JavaScriptSerializer JsonConvert = new JavaScriptSerializer();
            Context.Response.Write(JsonConvert.Serialize(sHow.ToList()));


            
        }
        [WebMethod]
        public void insert()
        {
            detail ds = new detail();
            context.details.Add(ds);
            context.SaveChanges();
        }
    }
}
