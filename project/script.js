(function(){
  const STORAGE_KEY = 'mini-todo-v1';
  const input = document.getElementById('taskInput');
  const addBtn = document.getElementById('addBtn');
  const list = document.getElementById('taskList');
  const counts = document.getElementById('counts');
  const clearCompleted = document.getElementById('clearCompleted');
  const clearAll = document.getElementById('clearAll');
  const filters = document.querySelectorAll('.filter');

  let tasks = [];
  let filter = 'all';

  function save(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks)); }
  function load(){ try{ tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }catch(e){ tasks = []; } }

  function uid(){ return Date.now().toString(36) + Math.random().toString(36).slice(2,7); }

  function render(){
    list.innerHTML = '';
    const visible = tasks.filter(t => {
      if(filter === 'all') return true;
      if(filter === 'active') return !t.done;
      return t.done;
    });

    visible.forEach(t => {
      const li = document.createElement('li');
      li.className = 'task' + (t.done ? ' completed' : '');
      li.dataset.id = t.id;

      li.innerHTML = `
        <input type="checkbox" class="chk" ${t.done ? 'checked' : ''} aria-label="Toggle ${escapeHtml(t.text)}">
        <div class="label">${escapeHtml(t.text)}</div>
        <button class="icon edit" title="Edit">✏️</button>
        <button class="icon del" title="Delete">🗑️</button>
      `;

      const chk = li.querySelector('.chk');
      const editBtn = li.querySelector('.edit');
      const delBtn = li.querySelector('.del');

      chk.addEventListener('change', ()=>{
        toggleDone(t.id); 
      });

      delBtn.addEventListener('click', ()=>{ removeTask(t.id); });

      editBtn.addEventListener('click', ()=>{ enableEdit(li, t.id); });

      list.appendChild(li);
    });

    counts.textContent = `${tasks.length} task${tasks.length===1? '':'s'}`;
  }

  function escapeHtml(s){ return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;"','\' : '&#039;'}[m] || m)); }

  function addTask(text){
    const trimmed = text && text.trim(); if(!trimmed) return;
    tasks.unshift({id: uid(), text: trimmed, done:false});
    save(); render();
  }

  function removeTask(id){ tasks = tasks.filter(t=>t.id!==id); save(); render(); }
  function toggleDone(id){ tasks = tasks.map(t=> t.id===id ? {...t, done: !t.done} : t ); save(); render(); }

  function enableEdit(li, id){
    const t = tasks.find(x=>x.id===id);
    if(!t) return;
    const label = li.querySelector('.label');
    const input = document.createElement('input');
    input.type = 'text'; input.value = t.text; input.className = 'edit-input';
    label.replaceWith(input);
    input.focus();
    input.select();

    function commit(){
      const val = input.value.trim();
      if(val) t.text = val; else removeTask(id);
      save(); render();
    }
    input.addEventListener('blur', commit);
    input.addEventListener('keydown', (e)=>{ if(e.key === 'Enter') commit(); if(e.key === 'Escape') render(); });
  }

  function clearCompletedTasks(){ tasks = tasks.filter(t=>!t.done); save(); render(); }
  function clearAllTasks(){ if(!confirm('Clear all tasks?')) return; tasks = []; save(); render(); }

  // Filters
  filters.forEach(f=> f.addEventListener('click', ()=>{
    filters.forEach(b=>b.classList.remove('active'));
    f.classList.add('active');
    filter = f.dataset.filter; render();
  }));

  // Events
  addBtn.addEventListener('click', ()=>{ addTask(input.value); input.value=''; input.focus(); });
  input.addEventListener('keydown', (e)=>{ if(e.key === 'Enter'){ addTask(input.value); input.value=''; } });
  clearCompleted.addEventListener('click', clearCompletedTasks);
  clearAll.addEventListener('click', clearAllTasks);

  // Init
  load(); render();
})();