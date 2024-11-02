// JavaScript for Falling Blocks and AI Interaction
const fallingBlocksContainer = document.getElementById('falling-blocks');

function submitCommand() {
    const command = document.getElementById('user-command').value;
    document.getElementById('user-command').value = ''; // Clear input

    // Generate a new Tetris block
    createFallingBlock(command);

    // Simulate AI response (dummy logic)
    const aiPopup = document.getElementById('ai-popup');
    aiPopup.style.display = 'block';
    const chatHistory = document.getElementById('chat-history');
    chatHistory.innerHTML += `<p>User Command: ${command}</p>`;

    const canSolve = Math.random() > 0.5; // Randomly decide for demonstration
    if (canSolve) {
        chatHistory.innerHTML += `<p>AI: I can handle this! Gathering information...</p>`;
    } else {
        chatHistory.innerHTML += `<p>AI: I cannot complete this task, but here are steps you can follow.</p>`;
        addToCalendar(command); // Simulate adding to calendar
    }
}

function createFallingBlock(command) {
    const block = document.createElement('div');
    block.className = 'falling-block';
    block.innerText = command.slice(0, 3); // Display part of the command
    block.style.left = Math.random() * 90 + 'vw'; // Random horizontal position
    fallingBlocksContainer.appendChild(block);

    // Remove the block after falling animation ends
    block.addEventListener('animationend', () => {
        block.remove();
    });
}

function addToCalendar(task) {
    console.log(`Task added to calendar: ${task}`);
}
