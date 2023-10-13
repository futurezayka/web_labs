document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            cards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.style.transform = 'scale(0.95)';
                }
            });
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            cards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.style.transform = 'scale(1)';
                }
            });
        });

        card.style.transition = 'transform 0.3s ease-in-out';
    });
});
