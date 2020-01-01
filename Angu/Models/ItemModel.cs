using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
 
namespace Angu.Models //ditto like a blog post
{
    public class ItemModel
    {

        public int id { get; set; }
        public string title { get; set; }
        public string text { get; set; }
        public string thumbnail { get; set; }
    }
}
