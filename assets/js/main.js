// Simple question processor - always returns "Ask Sviat"
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('questionForm');
    const questionInput = document.getElementById('questionInput');
    const answerDiv = document.getElementById('answer');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const question = questionInput.value.trim();
        
        if (question) {
            // Hide answer first
            answerDiv.classList.remove('show');
            answerDiv.classList.add('hidden');
            
            // Show answer after a brief delay for effect
            setTimeout(() => {
                answerDiv.classList.remove('hidden');
                answerDiv.classList.add('show');
                
                // Optional: Clear the input after showing answer
                setTimeout(() => {
                    questionInput.value = '';
                    questionInput.focus();
                }, 1000);
            }, 300);
        }
    });

    // Focus on input when page loads
    questionInput.focus();

    // Add some keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Press Escape to clear input and hide answer
        if (e.key === 'Escape') {
            questionInput.value = '';
            answerDiv.classList.remove('show');
            answerDiv.classList.add('hidden');
            questionInput.focus();
        }
    });

    // Add enter key support (already handled by form submit, but good to be explicit)
    questionInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            form.dispatchEvent(new Event('submit'));
        }
    });
});
