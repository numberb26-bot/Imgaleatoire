const imagesAleatoires = [
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/u4NWPDtu0qVh2cJ4wLUvE4bXWx6.jpg', lien: 'https://allstream26.blogspot.com/p/lady-yakuza.html#Lady Yakuza'},
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/2nQYyiIhoUv6sEfolhzFwuoXZzU.jpg', lien: 'https://allstream26.blogspot.com/p/les-petits-champions.html#Les Petits Champions' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/t1pfgb8r4Kx3qLN4H8vDZdfD50R.jpg', lien: 'https://allstream26.blogspot.com/p/portes-disparus.html#Portés Disparus' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/bsmX4gJTEMvUbnZFJsUqpwGELMp.jpg', lien: 'https://allstream26.blogspot.com/p/san-ku-kai-1978.html#San Ku Kaï' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/hKk671SoqkwRXK9P4VsITIg3FUq.jpg', lien: 'https://allstream26.blogspot.com/p/total-security.html#Total Security' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/yipCOSHafg7wdsiDrkjd79YAN61.jpg', lien: 'https://allstream26.blogspot.com/p/canal-a.html#Ange ou Démon' },
    ];

// 2. Fonction pour afficher l'image
function afficherImageAleatoire() {
    // Sélectionner un index aléatoire
    const index = Math.floor(Math.random() * imagesAleatoires.length);
    const selection = imagesAleatoires[index];

    // Générer le HTML
    const html = `<a href="${selection.lien}" target="_blank">
                    <img src="${selection.img}" width="190px" height="260px" alt="Image aléatoire" />
                  </a>`;

    // Insérer dans le conteneur HTML (ex: div avec id="container")
    document.getElementById('container').innerHTML = html;
}

// Lancer l'affichage au chargement
window.addEventListener('load', afficherImageAleatoire);
