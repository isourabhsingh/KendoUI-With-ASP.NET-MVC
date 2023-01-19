using Kendo_Demo.DataSource;
using Kendo_Demo.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Mvc;

namespace Kendo_Demo.Controllers
{
    public class HomeController : Controller
    {
        APIClass _api = new APIClass();
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public JsonResult GetTopics()
        {
            var result = _api.GetTopics();
            var JSONConvert = JsonConvert.DeserializeObject<List<TopicViewModel>>(JsonConvert.SerializeObject(result));
            return Json(JSONConvert, JsonRequestBehavior.AllowGet);
        }

        public ActionResult KendoGrid()
        {
            return View();
        }

        public ActionResult KendoList()
        {
            return View();
        }

        public JsonResult GetGrids()
        {
            var result = _api.GetGrids();
            var JSONConvert = JsonConvert.DeserializeObject<List<GridViewModel>>(JsonConvert.SerializeObject(result));
            return Json(JSONConvert, JsonRequestBehavior.AllowGet);
        }


        public JsonResult AddGrids(List<GridViewModel> models)
        {
            var result = _api.AddGrids(models[0]);
            var JSONConvert = JsonConvert.DeserializeObject<List<GridViewModel>>(JsonConvert.SerializeObject(result));
            return Json(true, JsonRequestBehavior.AllowGet);
        }
        public JsonResult UpdateGrids(List<GridViewModel> models)
        {
            var result = _api.UpdateGrids(models[0]);
            var JSONConvert = JsonConvert.DeserializeObject<List<GridViewModel>>(JsonConvert.SerializeObject(result));
            return Json(true, JsonRequestBehavior.AllowGet);
        }

        public JsonResult DeleteGrids(List<GridViewModel> models)
        {
            var result = _api.DeleteGrids(models[0].ID);
            var JSONConvert = JsonConvert.DeserializeObject<List<GridViewModel>>(JsonConvert.SerializeObject(result));
            return Json(true, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetKendoList()
        {
            var result = _api.GetKendoList();
            var JSONConvert = JsonConvert.DeserializeObject<List<ListViewModel>>(JsonConvert.SerializeObject(result));
            return Json(JSONConvert, JsonRequestBehavior.AllowGet);
        }


        public ActionResult KendoUpload()
        {
            return View();
        }
        [HttpPost()]
        public JsonResult UploadImage()
        {
            HttpPostedFileBase file = null;
            // checking condition for remove photo
            if (Request.Files.Count > 0)
            {
                file = Request.Files[0];
                var timestamp = new DateTimeOffset(DateTime.UtcNow).ToUnixTimeSeconds();

                var FileName = Path.GetFileNameWithoutExtension(file.FileName) + "_" + timestamp + Path.GetExtension(file.FileName);

                string dirctoryPath = Server.MapPath("../App_Data/Upload/") + FileName;

                file.SaveAs(dirctoryPath);
            }
            return Json(true, JsonRequestBehavior.AllowGet);
        }

        
    }
}