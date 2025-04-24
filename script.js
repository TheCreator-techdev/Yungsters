// Additional interactivity for search functionality
const searchInput = document.querySelector('.search-container input');

searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        alert(`Searching for: ${this.value}`);
        this.value = '';
    }
});
