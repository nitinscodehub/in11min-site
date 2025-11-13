// Notes Search Functionality
document.getElementById('searchBtn').addEventListener('click', searchNotes);
document.getElementById('searchInput').addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        searchNotes();
    }
});

function searchNotes() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const noteCards = document.querySelectorAll('.note-card');
    
    noteCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const desc = card.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || desc.includes(searchTerm)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}