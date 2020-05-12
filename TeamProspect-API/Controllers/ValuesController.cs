using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Controllers
{
    // http:localhost:5000/api/values
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // code first approach, creating the class first and migrate data into db
        private DataContext _context { get; }

        public ValuesController(DataContext context)
        {
            _context = context;

        }
        // GET api/values
        [HttpGet]
        //IActionResult allows to return http responses to client
        //Ienumerable is just a collection of things
        //async will not block a thread and passes off the action of getting data from DB to a delegate
        // *********** Single threaded
        //public IActionResult GetValues()
        // {
        //     var values = _context.Values.ToList();

        //     return Ok(values);
        // }
        //******** Async version
        //It doesnt hurt to have it async, best to use it as much as possible
        public async Task<IActionResult> GetValues()
        {
            var values = await _context.Values.ToListAsync();

            return Ok(values);
        }

        // GET api/values/5 (root parameter)
        [HttpGet("{id}")]
        public async Task<ActionResult> GetValue(int id)
        {
            //first: if doesnt find a value, it will throw exception
            //firstOrDefault if value not found, it will return default for the type it is returning
            var value = await _context.Values.FirstOrDefaultAsync(x => x.Id == id);

            return Ok(value);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
