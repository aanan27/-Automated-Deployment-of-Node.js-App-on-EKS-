// Generate a unique ID for tasks
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

// Validate task properties
function validateTask(task) {
  return task.title && typeof task.title === 'string' &&
         task.description && typeof task.description === 'string';
}

module.exports = { generateId, validateTask };

