const baseUrl = 'https://62d56536d4406e523559e20d.mockapi.io/avi/v1/taskList';

export function fetchTasks() {
  return fetch(baseUrl).then(response => response.json());
}

export function postTask(task) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
}
export function updateTask(task) {
  return fetch(`${baseUrl}/${task.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
}
export function deleteTask(id) {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  });
}
