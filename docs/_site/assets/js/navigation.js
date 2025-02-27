function updateProgressBar() {
  const progressBar = document.querySelector('.progress-bar');
  const progressText = document.querySelector('.progress-text');
  const totalQuizzes = 2; // Total number of quizzes
  let completedQuizzes = 0;

  // Check if quizzes are completed
  if (localStorage.getItem('quiz1Completed') === 'true') {
    completedQuizzes += 1;
  }
  if (localStorage.getItem('quiz2Completed') === 'true') {
    completedQuizzes += 1;
  }

  // Calculate progress percentage
  const progressPercentage = (completedQuizzes / totalQuizzes) * 100;

  // Update progress bar and text
  progressBar.style.width = `${progressPercentage}%`;
  progressText.textContent = `${progressPercentage}% Completed`;
}

// Call the function to update the progress bar
updateProgressBar();
