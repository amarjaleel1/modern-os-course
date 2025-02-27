document.addEventListener("DOMContentLoaded", function() {
  // CPU Scheduling Simulator
  const cpuSimulator = document.getElementById("cpu-simulator");
  if (cpuSimulator) {
    const processes = [];
    const addProcessButton = document.getElementById("add-process");
    const simulateButton = document.getElementById("simulate");

    addProcessButton.addEventListener("click", function() {
      const processId = processes.length + 1;
      const burstTime = parseInt(document.getElementById("burst-time").value);
      processes.push({ id: processId, burstTime: burstTime });
      updateProcessList();
    });

    simulateButton.addEventListener("click", function() {
      simulateCPUScheduling();
    });

    function updateProcessList() {
      const processList = document.getElementById("process-list");
      processList.innerHTML = "";
      processes.forEach(process => {
        const listItem = document.createElement("li");
        listItem.textContent = `Process ${process.id}: Burst Time = ${process.burstTime}`;
        processList.appendChild(listItem);
      });
    }

    function simulateCPUScheduling() {
      const result = document.getElementById("simulation-result");
      result.innerHTML = "";
      processes.forEach(process => {
        const resultItem = document.createElement("div");
        resultItem.textContent = `Process ${process.id} executed for ${process.burstTime} units`;
        result.appendChild(resultItem);
      });
    }
  }

  // Memory Management Simulator
  const memorySimulator = document.getElementById("memory-simulator");
  if (memorySimulator) {
    const memoryBlocks = [];
    const addBlockButton = document.getElementById("add-block");
    const allocateButton = document.getElementById("allocate");

    addBlockButton.addEventListener("click", function() {
      const blockSize = parseInt(document.getElementById("block-size").value);
      memoryBlocks.push({ size: blockSize, allocated: false });
      updateMemoryList();
    });

    allocateButton.addEventListener("click", function() {
      allocateMemory();
    });

    function updateMemoryList() {
      const memoryList = document.getElementById("memory-list");
      memoryList.innerHTML = "";
      memoryBlocks.forEach((block, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Block ${index + 1}: Size = ${block.size}, Allocated = ${block.allocated}`;
        memoryList.appendChild(listItem);
      });
    }

    function allocateMemory() {
      const processSize = parseInt(document.getElementById("process-size").value);
      const result = document.getElementById("allocation-result");
      result.innerHTML = "";
      for (let block of memoryBlocks) {
        if (!block.allocated && block.size >= processSize) {
          block.allocated = true;
          const resultItem = document.createElement("div");
          resultItem.textContent = `Process of size ${processSize} allocated to block of size ${block.size}`;
          result.appendChild(resultItem);
          updateMemoryList();
          return;
        }
      }
      result.textContent = "No suitable block found for allocation";
    }
  }

  // File System Emulator
  const fileSystemEmulator = document.getElementById("file-system-emulator");
  if (fileSystemEmulator) {
    const files = [];
    const addFileButton = document.getElementById("add-file");
    const viewFilesButton = document.getElementById("view-files");

    addFileButton.addEventListener("click", function() {
      const fileName = document.getElementById("file-name").value;
      const fileSize = parseInt(document.getElementById("file-size").value);
      files.push({ name: fileName, size: fileSize });
      updateFileList();
    });

    viewFilesButton.addEventListener("click", function() {
      viewFiles();
    });

    function updateFileList() {
      const fileList = document.getElementById("file-list");
      fileList.innerHTML = "";
      files.forEach(file => {
        const listItem = document.createElement("li");
        listItem.textContent = `File: ${file.name}, Size: ${file.size}`;
        fileList.appendChild(listItem);
      });
    }

    function viewFiles() {
      const result = document.getElementById("file-system-result");
      result.innerHTML = "";
      files.forEach(file => {
        const resultItem = document.createElement("div");
        resultItem.textContent = `File: ${file.name}, Size: ${file.size}`;
        result.appendChild(resultItem);
      });
    }
  }
});
