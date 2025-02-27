document.addEventListener("DOMContentLoaded", function() {
  const progressContainer = document.querySelector(".progress-container");
  const progressBar = document.querySelector(".progress-bar");
  const progressText = document.querySelector(".progress-text");

  function updateProgress() {
    const totalQuizzes = 2; // Total number of quizzes
    const completedQuizzes = getCompletedQuizzes(); // Function to get the number of completed quizzes
    const progressPercentage = (completedQuizzes / totalQuizzes) * 100;

    progressBar.style.width = `${progressPercentage}%`;
    progressText.textContent = `Progress: ${completedQuizzes}/${totalQuizzes} quizzes completed`;
  }

  function getCompletedQuizzes() {
    // Retrieve the number of completed quizzes from local storage or any other storage mechanism
    return parseInt(localStorage.getItem("completedQuizzes")) || 0;
  }

  function markQuizAsCompleted() {
    const completedQuizzes = getCompletedQuizzes() + 1;
    localStorage.setItem("completedQuizzes", completedQuizzes);
    updateProgress();
  }

  // Example usage: Mark a quiz as completed when a button is clicked
  const completeQuizButton = document.querySelector("#complete-quiz-button");
  if (completeQuizButton) {
    completeQuizButton.addEventListener("click", markQuizAsCompleted);
  }

  // Initialize progress on page load
  updateProgress();
});
