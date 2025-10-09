function TaskList({ tasks }) {
    
   return (
    <div >
      {tasks.length > 0 ? (
        <ul>
          
          {tasks.map(task => (
            <li key={task.id}>
              <strong>{task.title}</strong> - {task.isCompleted ? 'Selesai' : 'Belum Selesai'}
                </li>
          ))}
        </ul>
      ) : (
        <p style={{ fontStyle: 'italic', color: '#888' }}>Tidak ada tugas dalam daftar. Ayo tambah tugas baru!</p>
      )}
    </div>
  );
}

export default TaskList;