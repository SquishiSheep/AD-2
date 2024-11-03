// Wait until iframe is loaded
window.addEventListener("DOMContentLoaded", () => {
    const iframe = document.getElementById("inputFrame");

    // Wait until iframe content is loaded, then access the input inside it
    iframe.onload = () => {
        const tetrisInput = iframe.contentDocument.getElementById('tetrisInput');
        const tetrisBoard = document.getElementById('tetrisBoard');

        // Function to create and drop a block
        function dropBlock() {
            const text = tetrisInput.value.trim();
            if (text) {
                const block = document.createElement('div');
                block.classList.add('block');
                block.textContent = text;

                // Append the block to the tetris board
                tetrisBoard.appendChild(block);

                // Clear the input field
                tetrisInput.value = '';
            }
        }

        // Listen for Enter key to drop the block
        tetrisInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                dropBlock();
            }
        });
    };
});
