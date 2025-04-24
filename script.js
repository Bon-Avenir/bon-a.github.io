document.addEventListener('DOMContentLoaded', function() {
    const amountSlider = document.getElementById('amount');
    const amountValue = document.getElementById('amountValue');
    const durationSlider = document.getElementById('duration');
    const durationValue = document.getElementById('durationValue');
    const interestInput = document.getElementById('interest');
    const monthlyPayment = document.getElementById('monthlyPayment');
    const loanForm = document.getElementById('loanForm');

    // Mise à jour des valeurs des sliders
    amountSlider.addEventListener('input', updateValues);
    durationSlider.addEventListener('input', updateValues);

    // Calcul initial
    updateValues();

    // Soumission du formulaire
    loanForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Demande envoyée ! Un conseiller vous contactera sous 24h.');
        // Ici, ajouter un appel API vers votre backend
    });

    function updateValues() {
        // Formatage des valeurs
        amountValue.textContent = formatNumber(amountSlider.value) + ' €';
        durationValue.textContent = durationSlider.value + ' mois';

        // Calcul de la mensualité
        const amount = parseFloat(amountSlider.value);
        const duration = parseFloat(durationSlider.value);
        const interest = parseFloat(interestInput.value) / 100 / 12;

        const payment = (amount * interest) / (1 - Math.pow(1 + interest, -duration));
        monthlyPayment.textContent = payment.toFixed(2) + ' €';
    }

    function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
});