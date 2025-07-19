using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApi.Data;
using TodoApi.Models;

namespace TodoApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TodoController : ControllerBase
{
    private readonly TodoDbContext _context;

    public TodoController(TodoDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<TodoItem>>> GetAllAsync()
    {
        return Ok(await _context.TodoItems.OrderBy(t => t.Deadline).ToListAsync());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<TodoItem>> GetByIdAsync(int id)
    {
        var todo = await _context.TodoItems.FindAsync(id);
        return todo is null ? NotFound() : Ok(todo);
    }

    [HttpPost]
    public async Task<ActionResult<TodoItem>> CreateAsync(TodoItem item)
    {
        _context.TodoItems.Add(item);
        await _context.SaveChangesAsync();

        return Created($"/api/todo/{item.Id}", item);
    }

    [HttpPut("{id}/complete")]
    public async Task<IActionResult> MarkCompleteAsync(int id)
    {
        var todo = await _context.TodoItems.FindAsync(id);
        if (todo is null) return NotFound();

        if (!todo.IsDone)
        {
            todo.IsDone = true;

            var points = await _context.Points.FirstOrDefaultAsync();
            if (points is null)
            {
                points = new PointTotal { Total = 1 };
                _context.Points.Add(points);
            }
            else
            {
                points.Total++;
            }

            await _context.SaveChangesAsync();
        }

        return Ok(todo);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateAsync(int id, TodoItem updatedItem)
    {
        var existingItem = await _context.TodoItems.FindAsync(id);
        if (existingItem is null) return NotFound();

        existingItem.Title = updatedItem.Title;
        existingItem.Deadline = updatedItem.Deadline;
        existingItem.IsDone = updatedItem.IsDone;

        await _context.SaveChangesAsync();

        return Ok(existingItem);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteAsync(int id)
    {
        var todo = await _context.TodoItems.FindAsync(id);
        if (todo is null) return NotFound();

        _context.TodoItems.Remove(todo);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpGet("/api/points")]
    public async Task<IActionResult> GetPointsAsync()
    {
        var points = await _context.Points.FirstOrDefaultAsync();
        return Ok(new { points = points?.Total ?? 0 });
    }
}
