function mostraDettagliNutrizionali(button) {
  // Trova il div .dettagli-nutrizionali più vicino al bottone cliccato
  const dettagliDiv = button.nextElementSibling;

  // Alterna la visibilità del div .dettagli-nutrizionali
  if (dettagliDiv.style.display === "none") {
    dettagliDiv.style.display = "block";
    button.textContent = "Nascondi cibi e grammature";
  } else {
    dettagliDiv.style.display = "none";
    button.textContent = "Mostra cibi e grammature";
  }
}
document.querySelectorAll('.tooltip').forEach(tooltip => {
  tooltip.addEventListener('mouseover', function() {
      this.style.transform = 'scale(1.0)';
  });
  tooltip.addEventListener('mouseout', function() {
      this.style.transform = 'scale(1)';
  });
});
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then((reg) => console.log('Service worker registered', reg))
    .catch((err) => console.log('Service worker not registered', err));
}