const imagesAleatoires = [
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/u4NWPDtu0qVh2cJ4wLUvE4bXWx6.jpg', lien: 'https://allstream26.blogspot.com/p/lady-yakuza.html#Lady Yakuza'},
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/2nQYyiIhoUv6sEfolhzFwuoXZzU.jpg', lien: 'https://allstream26.blogspot.com/p/les-petits-champions.html#Les Petits Champions' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/t1pfgb8r4Kx3qLN4H8vDZdfD50R.jpg', lien: 'https://allstream26.blogspot.com/p/portes-disparus.html#Portés Disparus' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/bsmX4gJTEMvUbnZFJsUqpwGELMp.jpg', lien: 'https://allstream26.blogspot.com/p/san-ku-kai-1978.html#San Ku Kaï' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/hKk671SoqkwRXK9P4VsITIg3FUq.jpg', lien: 'https://allstream26.blogspot.com/p/total-security.html#Total Security' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/yipCOSHafg7wdsiDrkjd79YAN61.jpg', lien: 'https://allstream26.blogspot.com/p/canal-a.html#Ange ou Démon' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/WV1PV0G0RmKWdRkxFnacthKP1w.jpg', lien: 'https://allstream26.blogspot.com/p/canal-a.html#Adam : la corde rompue' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/rnjMGvlaXZnUkbMjGnMaxAbADIH.jpg', lien: 'https://allstream26.blogspot.com/p/x-or-le-sherif-de-lespace-1982.html#X-OR' },
     { img: 'https://media.themoviedb.org/t/p/w440_and_h660_face/qAWG2aH18Wfg2vFWbPBXipavus0.jpg', lien: 'https://allstream26.blogspot.com/p/canal-a.html#Assassin' },
     { img: 'https://media.themoviedb.org/t/p/w440_and_h660_face/Ec9tItbkljpWYVMUyvktvhUjI0.jpg', lien: 'https://allstream26.blogspot.com/p/canal-a.html#Appelez-moi Monsieur Tibbs' },
     { img: 'https://media.themoviedb.org/t/p/w440_and_h660_face/coTVFmc2aiPRaYvcO3USHTiMLig.jpg', lien: 'https://allstream26.blogspot.com/p/canal-a.html#Ave César' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/p4ZW15twOPBgnMry2XrG0QNs5vQ.jpg', lien: 'https://allstream26.blogspot.com/p/canal-a.html#Avoir 17 ans... à 40 ans' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/ihbZo531NxnlUI6StF9SUwF9kIK.jpg', lien: 'https://allstream26.blogspot.com/p/canal-b.html#Break Street 84' },
      { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/5mwFJ521LHy7F7g2PrAbB3t9DoK.jpg', lien: 'https://allstream26.blogspot.com/p/canal-b.html#Ballistic' },
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
