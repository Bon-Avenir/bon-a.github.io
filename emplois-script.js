// Données des offres d'emploi (simulées)
const jobsData = [
    {
        id: 1,
        title: "Développeur Full-Stack",
        company: "TechSolutions Inc.",
        location: "Montréal, Canada",
        country: "canada",
        category: "tech",
        salary: "90 000 - 110 000 $CA/an",
        type: "CDI",
        description: "Nous recherchons un développeur full-stack expérimenté pour rejoindre notre équipe à Montréal. Maîtrise de JavaScript, React et Node.js requise.",
        date: "Publiée il y a 2 jours",
        visa: "Sponsorisation possible"
    },
    {
        id: 2,
        title: "Ingénieur Civil",
        company: "Dubai Construction Group",
        location: "Dubaï, Émirats Arabes Unis",
        country: "dubai",
        category: "construction",
        salary: "25 000 - 35 000 AED/mois",
        type: "Contrat 2 ans",
        description: "Poste pour un ingénieur civil avec 5+ ans d'expérience dans les grands projets immobiliers. Maîtrise de l'anglais obligatoire.",
        date: "Publiée il y a 5 jours",
        visa: "Sponsorisation incluse"
    },
    {
        id: 3,
        title: "Infirmier(ère)",
        company: "Ontario Health Services",
        location: "Toronto, Canada",
        country: "canada",
        category: "sante",
        salary: "70 000 - 85 000 $CA/an",
        type: "CDI",
        description: "Recherche d'infirmiers diplômés pour notre nouveau centre médical à Toronto. Reconnaissance des diplômes étrangers possible.",
        date: "Publiée il y a 1 semaine",
        visa: "Aide à l'immigration"
    },
    {
        id: 4,
        title: "Responsable Finances",
        company: "Gulf Financial",
        location: "Dubaï, Émirats Arabes Unis",
        country: "dubai",
        category: "finance",
        salary: "30 000 - 45 000 AED/mois",
        type: "CDI",
        description: "Poste de direction pour un expert en finance avec expérience au Moyen-Orient. MBA préféré.",
        date: "Publiée il y a 3 jours",
        visa: "Sponsorisation incluse"
    },
    {
        id: 5,
        title: "Chef de Cuisine",
        company: "Luxury Hotels Group",
        location: "Paris, France",
        country: "france",
        category: "tourisme",
        salary: "3 500 - 4 200 €/mois",
        type: "CDI",
        description: "Recherche d'un chef expérimenté pour notre restaurant 5 étoiles. Expérience internationale appréciée.",
        date: "Publiée hier",
        visa: "Aide administrative"
    },
    {
        id: 6,
        title: "Data Scientist",
        company: "Silicon Valley Tech",
        location: "California, USA",
        country: "usa",
        category: "tech",
        salary: "$120,000 - $150,000/year",
        type: "Full-time",
        description: "Looking for an experienced Data Scientist with Python and machine learning expertise. H1B sponsorship available.",
        date: "Posted 4 days ago",
        visa: "Visa sponsorship"
    }
];

// Fonction pour afficher les offres
function displayJobs(filteredJobs = jobsData) {
    const jobsGrid = document.getElementById('jobsGrid');
    jobsGrid.innerHTML = '';

    if (filteredJobs.length === 0) {
        jobsGrid.innerHTML = '<p class="no-results">Aucune offre ne correspond à vos critères.</p>';
        return;
    }

    filteredJobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        jobCard.innerHTML = `
            <div class="job-header">
                <h3 class="job-title">${job.title}</h3>
                <span class="job-company">${job.company}</span>
                <div class="job-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${job.location}</span>
                </div>
            </div>
            <div class="job-body">
                <span class="job-salary">${job.salary}</span>
                <span class="job-type">${job.type}</span>
                <p class="job-description">${job.description}</p>
                ${job.visa ? `<p><strong>Visa:</strong> ${job.visa}</p>` : ''}
            </div>
            <div class="job-footer">
                <span class="job-date">${job.date}</span>
                <button class="apply-btn">Postuler</button>
            </div>
        `;
        jobsGrid.appendChild(jobCard);
    });

    // Ajouter les événements aux boutons Postuler
    document.querySelectorAll('.apply-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Fonctionnalité de postulation à implémenter (lien vers votre ATS ou formulaire)');
        });
    });
}

// Filtrer les offres
function filterJobs() {
    const country = document.getElementById('country').value;
    const category = document.getElementById('category').value;

    const filteredJobs = jobsData.filter(job => {
        const countryMatch = country === 'all' || job.country === country;
        const categoryMatch = category === 'all' || job.category === category;
        return countryMatch && categoryMatch;
    });

    displayJobs(filteredJobs);
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    displayJobs();
    
    // Écouteurs d'événements
    document.getElementById('searchBtn').addEventListener('click', filterJobs);
    
    // Permettre aussi la touche Entrée
    document.querySelectorAll('select').forEach(select => {
        select.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') filterJobs();
        });
    });
});