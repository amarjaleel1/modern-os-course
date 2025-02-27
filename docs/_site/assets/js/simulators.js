document.addEventListener("DOMContentLoaded", function () {
  // CPU Scheduling Simulator
  function cpuSchedulingSimulator() {
    const processTable = document.getElementById("process-table");
    const addProcessBtn = document.getElementById("add-process");
    const simulateBtn = document.getElementById("simulate");
    const resultDiv = document.getElementById("result");

    let processes = [];

    addProcessBtn.addEventListener("click", function () {
      const processId = processes.length + 1;
      const arrivalTime = parseInt(document.getElementById("arrival-time").value);
      const burstTime = parseInt(document.getElementById("burst-time").value);

      processes.push({ processId, arrivalTime, burstTime });

      const row = processTable.insertRow();
      row.insertCell(0).textContent = processId;
      row.insertCell(1).textContent = arrivalTime;
      row.insertCell(2).textContent = burstTime;
    });

    simulateBtn.addEventListener("click", function () {
      // Sort processes by arrival time
      processes.sort((a, b) => a.arrivalTime - b.arrivalTime);

      let currentTime = 0;
      let totalWaitingTime = 0;
      let totalTurnaroundTime = 0;

      processes.forEach((process) => {
        const waitingTime = currentTime - process.arrivalTime;
        const turnaroundTime = waitingTime + process.burstTime;

        totalWaitingTime += waitingTime;
        totalTurnaroundTime += turnaroundTime;

        currentTime += process.burstTime;
      });

      const avgWaitingTime = totalWaitingTime / processes.length;
      const avgTurnaroundTime = totalTurnaroundTime / processes.length;

      resultDiv.innerHTML = `<p>Average Waiting Time: ${avgWaitingTime.toFixed(2)}</p>
                             <p>Average Turnaround Time: ${avgTurnaroundTime.toFixed(2)}</p>`;
    });
  }

  cpuSchedulingSimulator();

  // Memory Management Simulator
  function memoryManagementSimulator() {
    const memoryTable = document.getElementById("memory-table");
    const addProcessBtn = document.getElementById("add-memory-process");
    const simulateBtn = document.getElementById("simulate-memory");
    const resultDiv = document.getElementById("memory-result");

    let memoryProcesses = [];

    addProcessBtn.addEventListener("click", function () {
      const processId = memoryProcesses.length + 1;
      const memorySize = parseInt(document.getElementById("memory-size").value);

      memoryProcesses.push({ processId, memorySize });

      const row = memoryTable.insertRow();
      row.insertCell(0).textContent = processId;
      row.insertCell(1).textContent = memorySize;
    });

    simulateBtn.addEventListener("click", function () {
      let memory = [];
      let totalMemoryUsed = 0;

      memoryProcesses.forEach((process) => {
        memory.push(process.memorySize);
        totalMemoryUsed += process.memorySize;
      });

      const avgMemoryUsage = totalMemoryUsed / memoryProcesses.length;

      resultDiv.innerHTML = `<p>Total Memory Used: ${totalMemoryUsed}</p>
                             <p>Average Memory Usage: ${avgMemoryUsage.toFixed(2)}</p>`;
    });
  }

  memoryManagementSimulator();

  // File System Emulator
  function fileSystemEmulator() {
    const fileTable = document.getElementById("file-table");
    const addFileBtn = document.getElementById("add-file");
    const simulateBtn = document.getElementById("simulate-file");
    const resultDiv = document.getElementById("file-result");

    let files = [];

    addFileBtn.addEventListener("click", function () {
      const fileId = files.length + 1;
      const fileName = document.getElementById("file-name").value;
      const fileSize = parseInt(document.getElementById("file-size").value);

      files.push({ fileId, fileName, fileSize });

      const row = fileTable.insertRow();
      row.insertCell(0).textContent = fileId;
      row.insertCell(1).textContent = fileName;
      row.insertCell(2).textContent = fileSize;
    });

    simulateBtn.addEventListener("click", function () {
      let totalFileSize = 0;

      files.forEach((file) => {
        totalFileSize += file.fileSize;
      });

      const avgFileSize = totalFileSize / files.length;

      resultDiv.innerHTML = `<p>Total File Size: ${totalFileSize}</p>
                             <p>Average File Size: ${avgFileSize.toFixed(2)}</p>`;
    });
  }

  fileSystemEmulator();
});
