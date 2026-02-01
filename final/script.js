// DOM Elements
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const filterButtons = document.querySelectorAll('.filter-btn');
const actionButtons = document.getElementById('actionButtons');
const clearCompleted = document.getElementById('clearCompleted');
const totalCount = document.getElementById('totalCount');
const completedCount = document.getElementById('completedCount');
const remainingCount = document.getElementById('remainingCount');

// State
let todos = JSON.parse(localStorage.getItem('todos')) || [];
let currentFilter = 'all';

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    renderTodos();
    setupEventListeners();
    updateStats();
});

// Setup event listeners
function setupEventListeners() {
    addBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTodo();
    });

    filterButtons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach((b) => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.filter;
            renderTodos();
        });
    });

    clearCompleted.addEventListener('click', clearCompletedTodos);
}

// Add a new todo
function addTodo() {
    const text = todoInput.value.trim();

    if (text === '') {
        alert('Please enter a task!');
        return;
    }

    const todo = {
        id: Date.now(),
        text: text,
        completed: false,
        createdAt: new Date().toLocaleDateString(),
    };

    todos.unshift(todo);
    saveTodos();
    renderTodos();
    updateStats();
    todoInput.value = '';
    todoInput.focus();
}

// Delete a todo
function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id);
    saveTodos();
    renderTodos();
    updateStats();
}

// Toggle todo completion
function toggleTodo(id) {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos();
        renderTodos();
        updateStats();
    }
}

// Clear all completed todos
function clearCompletedTodos() {
    if (confirm('Are you sure you want to delete all completed tasks?')) {
        todos = todos.filter((todo) => !todo.completed);
        saveTodos();
        renderTodos();
        updateStats();
    }
}

// Render todos based on filter
function renderTodos() {
    todoList.innerHTML = '';

    let filteredTodos = todos;

    if (currentFilter === 'active') {
        filteredTodos = todos.filter((todo) => !todo.completed);
    } else if (currentFilter === 'completed') {
        filteredTodos = todos.filter((todo) => todo.completed);
    }

    if (filteredTodos.length === 0) {
        todoList.innerHTML = `
            <div class="empty-state">
                <p>${
                    currentFilter === 'all'
                        ? '📋 No tasks yet. Add one to get started!'
                        : currentFilter === 'active'
                        ? '✅ All tasks completed! Great job!'
                        : '🎉 No completed tasks. Keep going!'
                }</p>
            </div>
        `;
        return;
    }

    const todoItems = filteredTodos.map((todo) => createTodoElement(todo)).join('');
    todoList.innerHTML = todoItems;

    // Add event listeners to newly created elements
    document.querySelectorAll('.checkbox').forEach((checkbox) => {
        checkbox.addEventListener('change', (e) => {
            toggleTodo(parseInt(e.target.dataset.id));
        });
    });

    document.querySelectorAll('.delete-btn').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            deleteTodo(parseInt(e.target.dataset.id));
        });
    });

    // Show/hide action buttons
    const hasCompleted = todos.some((todo) => todo.completed);
    actionButtons.style.display = hasCompleted ? 'flex' : 'none';
}

// Create a todo element
function createTodoElement(todo) {
    return `
        <div class="todo-item ${todo.completed ? 'completed' : ''}">
            <input 
                type="checkbox" 
                class="checkbox" 
                data-id="${todo.id}"
                ${todo.completed ? 'checked' : ''}
                aria-label="Mark task as ${todo.completed ? 'incomplete' : 'complete'}"
            >
            <span class="todo-text">${escapeHtml(todo.text)}</span>
            <button 
                class="delete-btn" 
                data-id="${todo.id}"
                aria-label="Delete task"
            >
                🗑️ Delete
            </button>
        </div>
    `;
}

// Update stats
function updateStats() {
    const total = todos.length;
    const completed = todos.filter((todo) => todo.completed).length;
    const remaining = total - completed;

    totalCount.textContent = total;
    completedCount.textContent = completed;
    remainingCount.textContent = remaining;
}

// Save todos to localStorage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
}
