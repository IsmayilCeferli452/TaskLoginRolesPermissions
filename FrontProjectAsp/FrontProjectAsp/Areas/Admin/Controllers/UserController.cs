using FrontProjectAsp.Models;
using FrontProjectAsp.ViewModels.Users;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace FrontProjectAsp.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class UserController : Controller
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public UserController(UserManager<AppUser> userManager, 
                              RoleManager<IdentityRole> roleManager)
        {
            _userManager = userManager;
            _roleManager = roleManager;
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var users = _userManager.Users.ToList();

            List<UserRoleVM> usersWithRoles = new();
            
            foreach (var user in users)
            {
                var roles = await _userManager.GetRolesAsync(user);
                string userRoles = string.Join(",", roles.ToArray());
                usersWithRoles.Add(new UserRoleVM
                {
                    Fullname = user.Fullname,
                    Username = user.UserName,
                    Email = user.Email,
                    Roles = userRoles
                });
            }

            return View(usersWithRoles);
        }

        [HttpGet]
        public IActionResult AddRole()
        {
            return View();
        }
    }
}
