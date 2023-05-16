let workouts = [];

$(document).ready(function() {
  renderWorkouts();

  $('#workout-form').submit(function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the form values
    const name = $('#name').val();
    const description = $('#description').val();
    const duration = $('#duration').val();
    const intensity = $('#intensity').val();

    //Workout Object
    const workout = {
      name: name,
      description: description,
      duration: duration,
      intensity: intensity
    };

    // Add the new workout to the array
    workouts.push(workout);

    // Refresh the workout list
    renderWorkouts();

    // Clear the form after submission
    $('#workout-form')[0].reset();
  });
});

// Function to render the list of workouts
function renderWorkouts() {
  const workoutItems = $('#workout-items');

  // Clear any existing workout items
  workoutItems.empty();

  // Loop through the workouts and create list items for each one
  workouts.forEach(function(workout, index) {
    const workoutItem = $('<li>').text(workout.name).addClass('list-group-item');

    // Edit button for each workout
    const editButton = $('<button>')
      .text('Edit')
      .addClass('btn btn-secondary me-2')
      .on('click', function() {
        editWorkout(index);
      });

    // Delete button for each workout
    const deleteButton = $('<button>')
      .text('Delete')
      .addClass('btn btn-secondary')
      .on('click', function() {
        deleteWorkout(index);
      });

    workoutItem.append(editButton, deleteButton);
    workoutItems.append(workoutItem);
  });
}

// Function to edit a workout
function editWorkout(index) {
  const workout = workouts[index];
  const nameInput = $('#name');
  const descriptionInput = $('#description');
  const durationInput = $('#duration');
  const intensityInput = $('#intensity');

  // Pre-fill the form inputs with the workout details
  nameInput.val(workout.name);
  descriptionInput.val(workout.description);
  durationInput.val(workout.duration);
  intensityInput.val(workout.intensity);

  $('#workout-form')[0].scrollIntoView({ behavior: 'smooth' });
}

// Function to delete a workout
function deleteWorkout(index) {
  // Remove the workout from the array
  workouts.splice(index, 1);

  // Refresh the workout list
  renderWorkouts();
}
