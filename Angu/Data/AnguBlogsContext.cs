using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Angu.Models
{
    public class AnguBlogsContext : DbContext
    {
        public AnguBlogsContext (DbContextOptions<AnguBlogsContext> options)
            : base(options)
        {
        }

        public DbSet<Angu.Models.ItemModel> ItemModel { get; set; }
    }
}
