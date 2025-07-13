// Simple question processor - always returns "Ask Sviat"
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('questionForm');
    const questionInput = document.getElementById('questionInput');
    const answerDiv = document.getElementById('answer');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const question = questionInput.value.trim();
        
        if (question) {
            // Show answer with animation
            answerDiv.classList.remove('hidden');
            answerDiv.classList.add('show');
        }
    });

    // Focus on input when page loads
    questionInput.focus();

    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Press Escape to clear input and hide answer
        if (e.key === 'Escape') {
            questionInput.value = '';
            answerDiv.classList.remove('show');
            answerDiv.classList.add('hidden');
            questionInput.focus();
        }
    });

    // Clear answer when input is cleared
    questionInput.addEventListener('input', function() {
        if (this.value.trim() === '') {
            answerDiv.classList.remove('show');
            answerDiv.classList.add('hidden');
        }
    });
});
