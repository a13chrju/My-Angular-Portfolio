using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Angu.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;

namespace Angu.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private readonly IConfiguration configuration;
        public SampleDataController(IConfiguration config)
        {
            this.configuration = config;
        }

        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public List<ItemModel> WeatherForecasts()
        {
      
            List<ItemModel> posts = new List<ItemModel>();
            MySqlConnection con7 = new MySqlConnection();
            con7.ConnectionString = configuration.GetConnectionString("AnguBlogsContext");
            con7.Open(); 
            var latestpost = 0;
            MySqlCommand fetchdata7 = new MySqlCommand("SELECT * FROM `post` order by id desc LIMIT 3", con7);
            MySqlDataReader r7 = fetchdata7.ExecuteReader();
            while (r7.Read())
            {
                ItemModel post = new ItemModel();
                post.id = Convert.ToInt32(r7["id"]);
                post.text = r7["text"].ToString();
                post.thumbnail = r7["thumbnail"].ToString();
                post.title = r7["titel"].ToString();
                posts.Add(post);
            }

            con7.Close();


            /*  ItemModel fsa = new ItemModel();
              fsa.id = 1;
              fsa.rate = "5";
              fsa.text = "fsafas";
              */
            //List<ItemModel> tets = new List<ItemModel>();
            //tets.Add(fsa);
            return posts;
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
