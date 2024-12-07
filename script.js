fdocument.getElementById('search').addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const hotelCards = document.querySelectorAll('.hotel-card');

    hotelCards.forEach(card => {
        const hotelName = card.querySelector('h2').textContent.toLowerCase();
        if (hotelName.includes(searchTerm)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});