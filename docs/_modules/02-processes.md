---
layout: module
title: "Module 2: Process Management"
order: 2
---

# Process Management in Operating Systems
**Current Time:** 2025-02-24 18:20:44  
**Author:** amarjaleel1

## 🎯 Interactive Lab: Process Creation

### Theory
A process is an instance of a program in execution. Every process in Unix-like systems has:
- Process ID (PID)
- Parent Process ID (PPID)
- Process State
- Memory Space

### Hands-on Exercise

```c
#include <stdio.h>
#include <unistd.h>

int main() {
    pid_t pid = fork();
    
    if (pid < 0) {
        fprintf(stderr, "Fork failed\n");
        return 1;
    } else if (pid == 0) {
        printf("Child process: PID = %d\n", getpid());
    } else {
        printf("Parent process: PID = %d, Child PID = %d\n", getpid(), pid);
    }
    return 0;
}
```

### Try it yourself:
1. Save the code above
2. Compile: `gcc simple_fork.c -o simple_fork`
3. Run: `./simple_fork`
4. Observe parent and child processes

## 🔍 Practice Questions

1. What happens when fork() returns:
   - [ ] Negative value
   - [ ] Zero
   - [ ] Positive value

2. How many processes are created after two fork() calls?

## 📝 Assignment
Create a program that:
1. Creates a child process
2. Makes the child count from 1 to 5
3. Makes the parent wait for the child
4. Shows both PIDs
````

### /d:/modern-os-course/modern-os-course/docs/assets/js/navigation.js

Add navigation enhancements to track module progress.

<file>
```javascript
// filepath: /d:/modern-os-course/modern-os-course/docs/assets/js/navigation.js
document.addEventListener('DOMContentLoaded', function() {
    // Track current module progress
    const progressKey = 'os_course_progress';
    let progress = JSON.parse(localStorage.getItem(progressKey) || '{}');

    // Mark module as complete
    function completeModule(moduleId) {
        progress[moduleId] = true;
        localStorage.setItem(progressKey, JSON.stringify(progress));
        updateProgress();
    }

    // Update progress bar
    function updateProgress() {
        const total = document.querySelectorAll('.module-item').length;
        const completed = Object.keys(progress).length;
        const percentage = (completed / total) * 100;
        
        const progressBar = document.querySelector('.progress-bar');
        if (progressBar) {
            progressBar.style.width = `${percentage}%`;
            progressBar.querySelector('.progress-text').textContent = 
                `${completed}/${total} Completed`;
        }
    }

    // Initialize
    updateProgress();
});
