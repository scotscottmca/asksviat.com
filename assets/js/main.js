// Simple question processor - always returns "Ask Sviat"
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('questionForm');
    const questionInput = document.getElementById('questionInput');
    const processingDiv = document.getElementById('processing');
    const answerDiv = document.getElementById('answer');
    let processingTimeout;
    let hideTimeout;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const question = questionInput.value.trim();
        
        if (question) {
            // Clear any existing timeouts
            if (processingTimeout) {
                clearTimeout(processingTimeout);
            }
            if (hideTimeout) {
                clearTimeout(hideTimeout);
            }
            
            // Hide answer if it's showing
            answerDiv.classList.remove('show');
            answerDiv.classList.add('hidden');
            
            // Show processing notification immediately
            processingDiv.classList.remove('hidden');
            processingDiv.classList.add('show');
            
            // After 5 seconds, hide processing and show answer
            processingTimeout = setTimeout(() => {
                // Hide processing
                processingDiv.classList.remove('show');
                processingDiv.classList.add('hidden');
                
                // Show answer
                answerDiv.classList.remove('hidden');
                answerDiv.classList.add('show');
                
                // Hide answer after 3 seconds
                hideTimeout = setTimeout(() => {
                    answerDiv.classList.remove('show');
                    answerDiv.classList.add('hidden');
                }, 3000);
            }, 5000);
        }
    });

    // Focus on input when page loads
    questionInput.focus();

    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Press Escape to clear input and hide all notifications
        if (e.key === 'Escape') {
            questionInput.value = '';
            if (processingTimeout) {
                clearTimeout(processingTimeout);
            }
            if (hideTimeout) {
                clearTimeout(hideTimeout);
            }
            processingDiv.classList.remove('show');
            processingDiv.classList.add('hidden');
            answerDiv.classList.remove('show');
            answerDiv.classList.add('hidden');
            questionInput.focus();
        }
    });

    // Clear notifications when input is cleared
    questionInput.addEventListener('input', function() {
        if (this.value.trim() === '') {
            if (processingTimeout) {
                clearTimeout(processingTimeout);
            }
            if (hideTimeout) {
                clearTimeout(hideTimeout);
            }
            processingDiv.classList.remove('show');
            processingDiv.classList.add('hidden');
            answerDiv.classList.remove('show');
            answerDiv.classList.add('hidden');
        }
    });
});
