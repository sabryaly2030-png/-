// Main Script - Global Functions and Utilities

// Open Survey Modal
function openSurvey(name, type) {
    const modal = document.getElementById('surveyModal');
    const title = document.getElementById('surveyTitle');
    
    title.textContent = 'استبيان ' + name;
    document.getElementById('surveyForm').dataset.type = type;
    modal.style.display = 'block';
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

// Close Survey Modal
function closeSurvey() {
    const modal = document.getElementById('surveyModal');
    modal.style.display = 'none';
    document.getElementById('surveyForm').reset();
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('surveyModal');
    if (event.target == modal) {
        closeSurvey();
    }
}

// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('surveyForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = {
                type: form.dataset.type,
                satisfaction: formData.get('satisfaction'),
                strengths: formData.get('strengths'),
                improvements: formData.get('improvements'),
                anonymous: formData.get('anonymous') ? true : false,
                timestamp: new Date().toISOString()
            };
            
            // Log survey data (in production, send to server)
            console.log('Survey submitted:', data);
            
            // Show success message
            alert('شكراً لمشاركتك! تم استقبال استبيانك بنجاح.');
            closeSurvey();
            
            // Update statistics
            updateStatistics();
        });
    }
});

// Update Dashboard Statistics
function updateStatistics() {
    // In production, fetch from server
    const stats = {
        surveys: 4,
        participants: 125,
        satisfaction: 92,
        completion: 88
    };
    
    document.getElementById('surveyCount').textContent = stats.surveys;
    document.getElementById('participants').textContent = stats.participants;
    document.getElementById('satisfaction').textContent = stats.satisfaction + '%';
    document.getElementById('completion').textContent = stats.completion + '%';
}

// Initialize on page load
window.addEventListener('load', function() {
    updateStatistics();
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});