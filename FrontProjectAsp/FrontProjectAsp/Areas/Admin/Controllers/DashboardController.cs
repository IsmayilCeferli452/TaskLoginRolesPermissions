using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Fiorello_PB101.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class DashboardController : Controller
    {
        [Authorize(Roles = "Admin, SuperAdmin")]
        public IActionResult Index()
        {
            return View();
        }


        ////reshad123(Member) Resad123_
        ////ayxan123(Admin) Ayxan123_
        ////cavid123(SuperAdmin) Cavid123_
    }
}
