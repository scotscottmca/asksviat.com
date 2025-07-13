// Simple question processor - always returns "Ask Sviat"
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('questionForm');
    const questionInput = document.getElementById('questionInput');
    const answerDiv = document.getElementById('answer');
    let hideTimeout;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const question = questionInput.value.trim();
        
        if (question) {
            // Clear any existing timeout
            if (hideTimeout) {
                clearTimeout(hideTimeout);
            }
            
            // Show answer with animation
            answerDiv.classList.remove('hidden');
            answerDiv.classList.add('show');
            
            // Hide answer after 3 seconds
            hideTimeout = setTimeout(() => {
                answerDiv.classList.remove('show');
                answerDiv.classList.add('hidden');
            }, 3000);
        }
    });

    // Focus on input when page loads
    questionInput.focus();

    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Press Escape to clear input and hide answer
        if (e.key === 'Escape') {
            questionInput.value = '';
            if (hideTimeout) {
                clearTimeout(hideTimeout);
            }
            answerDiv.classList.remove('show');
            answerDiv.classList.add('hidden');
            questionInput.focus();
        }
    });

    // Clear answer when input is cleared
    questionInput.addEventListener('input', function() {
        if (this.value.trim() === '') {
            if (hideTimeout) {
                clearTimeout(hideTimeout);
            }
            answerDiv.classList.remove('show');
            answerDiv.classList.add('hidden');
        }
    });
});
