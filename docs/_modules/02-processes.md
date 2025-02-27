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

## 📝 Interactive Quiz

### Question 1: What is the primary function of the fork() system call?
- [x] Create a new process
- [ ] Terminate a process
- [ ] Allocate memory
- [ ] Manage file systems

**Explanation:** The primary function of the fork() system call is to create a new process.

### Question 2: What is the state of a process immediately after a fork() call in the child process?
- [ ] Terminated
- [ ] Running
- [x] Ready
- [ ] Waiting

**Explanation:** Immediately after a fork() call, the child process is in the Ready state.

### Question 3: How many processes are created after a single fork() call?
- [ ] 0
- [x] 1
- [ ] 2
- [ ] 3

**Explanation:** A single fork() call creates one new process.
