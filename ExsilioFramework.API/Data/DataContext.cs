using API.Models;
using Microsoft.EntityFrameworkCore;
using TeamProspect.API.Models;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}

        public DbSet<Value> Values {get; set;}
        public DbSet<User> Users { get; set; }
    }
}