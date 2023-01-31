using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Interfaces;
using Domain;

namespace DAL.Repositories
{
    public class PersonRepository : EFRepository<Person>, IPersonRepository
    {
        public PersonRepository(IDbContext dbContext) : base(dbContext)
        {
        }

        public List<Person> GetAllForUser(int userId)
        {
            return DbSet.Where(p => p.UserId == userId).OrderBy(o => o.LastName).ThenBy(o => o.FirstName).Include(c =>c.Contacts).ToList();
        }

        public Person GetForUser(int personId, int userId)
        {
            return DbSet.FirstOrDefault(a => a.PersonID == personId && a.UserId == userId);
        }

    }
}
