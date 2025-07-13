// Simple question processor - always returns "Ask Sviat"
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('questionForm');
    const questionInput = document.getElementById('questionInput');
    const processingDiv = document.getElementById('processing');
    const answerDiv = document.getElementById('answer');
    let processingTimeout;
    let hideTimeout;

    // Hide both notifications first
    answerDiv.classList.remove('show');
    answerDiv.classList.add('hidden');
    processingDiv.classList.remove('show');
    processingDiv.classList.add('hidden');

    // Confetti function
    function createConfetti() {
        const colors = ['#ff6b35', '#4285f4', '#34a853', '#fbbc05', '#ea4335', '#9c27b0', '#00d4aa'];
        const confettiCount = 50;
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            document.body.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 5000);
        }
    }
    
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
            
            
            // Show processing notification
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
                
                // Trigger confetti when answer is shown
                createConfetti();
                
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
