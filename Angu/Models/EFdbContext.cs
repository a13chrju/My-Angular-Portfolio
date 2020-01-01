using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angu.Models
{
    public class EFdbContext : DbContext
    {
        public EFdbContext(DbContextOptions<EFdbContext> options) : base(options)
        {

        }

        public DbSet<ItemModel> Bloggs { get; set; }
    }
}
