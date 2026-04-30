const imagesAleatoires = [
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/l6mNo6KU3KgnilItWgRKjt166Y2.jpg', lien: 'https://allstream26.blogspot.com/p/canal-b.html#Ballistic'},
          { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/yNrMIGy1eG0cjd2WSrHz2OcUWEy.jpg', lien: 'https://allstream26.blogspot.com/p/canal-c.html#Crazy/Beautiful' },
           { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/yipCOSHafg7wdsiDrkjd79YAN61.jpg', lien: 'https://allstream26.blogspot.com/p/canal-d.html#Disparus sans laisser de traces' },
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
