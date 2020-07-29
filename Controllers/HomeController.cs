using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Emmcode.Controllers
{
    public class HomeController : Controller
    {
        [Route("api/[Controller]")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("/api/values")]
        public IEnumerable<string> Get()
        {
            return new string[] { "this", "is", "a", "test!" };
        }
    }
}