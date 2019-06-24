using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Angu.Models;
using Microsoft.AspNetCore.Mvc;

namespace Angu.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public List<ItemModel> WeatherForecasts()
        {
            ItemModel fsa = new ItemModel();
            fsa.id = 1;
            fsa.rate = "5";
            fsa.text = "fsafas";

            List<ItemModel> tets = new List<ItemModel>();
            tets.Add(fsa);
            return tets;
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }
    }
}
