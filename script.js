document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour ajouter une tâche à la liste
    function addTaskToList(task) {
      const taskList = document.getElementById('task-list');
      const newTaskItem = document.createElement('li');
      newTaskItem.textContent = task;
      taskList.appendChild(newTaskItem);
    }
  
    // Écouter l'événement de soumission du formulaire
    document.getElementById('task-form').addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Récupérer la valeur de la tâche depuis le champ de formulaire
      const taskInput = document.getElementById('task');
      const newTask = taskInput.value;
      // Vérifier si la tâche n'est pas vide
      if (newTask.trim() !== '') {
        // Ajouter la nouvelle tâche à la liste
        addTaskToList(newTask);
        // Effacer le champ du formulaire
        taskInput.value = '';
      }
    });
  });
  