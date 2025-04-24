<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données du formulaire
    $montant = htmlspecialchars($_POST['montant']);
    $duree = htmlspecialchars($_POST['duree']);
    $nom = htmlspecialchars($_POST['nom']);
    $email = htmlspecialchars($_POST['email']);
    $telephone = htmlspecialchars($_POST['telephone']);
    $revenu = htmlspecialchars($_POST['revenu']);
    $emploi = htmlspecialchars($_POST['emploi']);

    // Validation simple
    $erreurs = [];

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $erreurs[] = "L'adresse email n'est pas valide.";
    }

    if (!preg_match("/^[0-9]{10}$/", $telephone)) {
        $erreurs[] = "Le numéro de téléphone doit contenir 10 chiffres.";
    }

    if ($montant < 1000 || $montant > 75000) {
        $erreurs[] = "Le montant doit être compris entre 1 000€ et 75 000€.";
    }

    // Si pas d'erreurs, on traite la demande
    if (empty($erreurs)) {
        // Ici, vous pourriez enregistrer en base de données ou envoyer par email
        
        // Exemple d'enregistrement dans un fichier (pour démo seulement)
        $demande = [
            'date' => date('Y-m-d H:i:s'),
            'montant' => $montant,
            'duree' => $duree,
            'nom' => $nom,
            'email' => $email,
            'telephone' => $telephone,
            'revenu' => $revenu,
            'emploi' => $emploi
        ];
        
        file_put_contents('demandes.txt', json_encode($demande).PHP_EOL, FILE_APPEND);
        
        // Redirection vers la page de confirmation
        header('Location: confirmation.html');
        exit;
    }
}

// Si erreurs ou accès direct à la page, on redirige vers le formulaire
header('Location: formulaire.html');
exit;
?>