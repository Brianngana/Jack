function bookNow(destination) {
  alert('Thank you for choosing ' + destination + '! We will contact you shortly.');
}function bookNow(destination) {
  alert('Thank you for choosing ' + destination + '! We will contact you shortly.');
  
}

function viewMore() {
  // Find all hidden destination cards
  var hiddenCards = document.querySelectorAll('.hidden');

  // Unhide them with a simple effect
  hiddenCards.forEach(function(card) {
    card.style.display = 'block';
    card.classList.remove('hidden');
  });

  // Hide the View More button after clicking
  document.getElementById('viewMoreBtn').style.display = 'none';
}