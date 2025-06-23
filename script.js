// === Add a New Task ===
document.getElementById('addButton').addEventListener('click', function () {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    const priority = document.getElementById('prioritySelect').value;
  
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }
  
    // Create task item
    const li = document.createElement('li');
    li.textContent = taskText;
    li.classList.add(priority); // apply priority class
  
    // Add a timestamp
    const time = document.createElement('span');
    time.textContent = ' • ' + new Date().toLocaleTimeString();
    time.style.fontSize = '0.8em';
    time.style.color = 'gray';
    li.appendChild(time);
  
    // Toggle task completion when clicked
    li.addEventListener('click', () => {
      li.classList.toggle('done');
    });
  
    // Add delete button to each task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.className = 'delete-btn';
  
    // Delete task on button click only
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // prevents toggle when clicking delete
      li.remove();
    });
  
    li.appendChild(deleteBtn);
    document.getElementById('taskList').appendChild(li);
    input.value = '';
  });
  
  // === Theme Switcher Button ===
  const themeBtn = document.getElementById('themeToggle');
  themeBtn.addEventListener('click', () => {
    const body = document.body;
    const isDark = body.classList.toggle('dark-theme');
    themeBtn.textContent = isDark ? '☀️' : '🌙';
  });
  
  // === Task Filters (All / Pending / Done) ===
  document.getElementById('filters').addEventListener('click', function(e) {
    if (!e.target.dataset.filter) return;
  
    const filter = e.target.dataset.filter;
  
    document.querySelectorAll('#taskList li').forEach(li => {
      const isDone = li.classList.contains('done');
  
      li.style.display =
        filter === 'all' ||
        (filter === 'done' && isDone) ||
        (filter === 'pending' && !isDone)
        ? 'block' : 'none';
    });
  });
  
  // === Clear All Tasks Button ===
  document.getElementById('clearButton').addEventListener('click', () => {
    if (confirm('Clear all tasks?')) {
      document.getElementById('taskList').innerHTML = '';
    }
  });
  
  