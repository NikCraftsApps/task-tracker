using System.ComponentModel.DataAnnotations;

namespace TodoApi.Models
{
    public class TodoItem
    {
        public int Id { get; set; }

        [Required]
        [MinLength(1)]
        public string Title { get; set; } = string.Empty;

        public DateTime? Deadline { get; set; }

        public bool IsDone { get; set; } = false;
    }
}
