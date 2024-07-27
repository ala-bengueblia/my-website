// Script JavaScript pour le formulaire de contact

// Sélection du formulaire
const form = document.getElementById('contact-form');

// Écouteur d'événement pour le soumission du formulaire
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'action par défaut du formulaire (rechargement de la page)
    
    // Récupération des valeurs des champs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validation des champs (ici, simple vérification de non-vide)
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    // Simulation de l'envoi du formulaire (vous pouvez ajouter votre propre logique ici)
    alert(`Formulaire soumis avec succès!\nNom: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Réinitialisation du formulaire
    form.reset();
});
