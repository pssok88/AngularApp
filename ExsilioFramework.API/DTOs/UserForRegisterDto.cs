using System.ComponentModel.DataAnnotations;

namespace ExsilioFramework.API.DTOs
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        
        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "You must enter a password between 4 and 8 characters")]
        public string Password { get; set; }
    }
}