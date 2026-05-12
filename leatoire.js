const imagesAleatoires = [
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/u4NWPDtu0qVh2cJ4wLUvE4bXWx6.jpg', lien: 'https://allstream26.blogspot.com/p/lady-yakuza.html#Lady Yakuza' target='_self'},
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/2nQYyiIhoUv6sEfolhzFwuoXZzU.jpg', lien: 'https://allstream26.blogspot.com/p/les-petits-champions.html#Les Petits Champions' target='_self' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/t1pfgb8r4Kx3qLN4H8vDZdfD50R.jpg', lien: 'https://allstream26.blogspot.com/p/portes-disparus.html#Portés Disparus' target='_self' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/bsmX4gJTEMvUbnZFJsUqpwGELMp.jpg', lien: 'https://allstream26.blogspot.com/p/san-ku-kai-1978.html#San Ku Kaï' target='_self' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/hKk671SoqkwRXK9P4VsITIg3FUq.jpg', lien: 'https://allstream26.blogspot.com/p/total-security.html#Total Security' target='_self' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/yipCOSHafg7wdsiDrkjd79YAN61.jpg', lien: 'https://allstream26.blogspot.com/p/canal-a.html#Ange ou Démon' target='_self' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/WV1PV0G0RmKWdRkxFnacthKP1w.jpg', lien: 'https://allstream26.blogspot.com/p/canal-a.html#Adam : la corde rompue' target='_self' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/rnjMGvlaXZnUkbMjGnMaxAbADIH.jpg', lien: 'https://allstream26.blogspot.com/p/x-or-le-sherif-de-lespace-1982.html#X-OR' target='_self' },
     { img: 'https://media.themoviedb.org/t/p/w440_and_h660_face/qAWG2aH18Wfg2vFWbPBXipavus0.jpg', lien: 'https://allstream26.blogspot.com/p/canal-a.html#Assassin' target='_self' },
     { img: 'https://media.themoviedb.org/t/p/w440_and_h660_face/Ec9tItbkljpWYVMUyvktvhUjI0.jpg', lien: 'https://allstream26.blogspot.com/p/canal-a.html#Appelez-moi Monsieur Tibbs' target='_self' },
     { img: 'https://media.themoviedb.org/t/p/w440_and_h660_face/coTVFmc2aiPRaYvcO3USHTiMLig.jpg', lien: 'https://allstream26.blogspot.com/p/canal-a.html#Ave César' target='_self' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/p4ZW15twOPBgnMry2XrG0QNs5vQ.jpg', lien: 'https://allstream26.blogspot.com/p/canal-a.html#Avoir 17 ans... à 40 ans' target='_self' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/ihbZo531NxnlUI6StF9SUwF9kIK.jpg', lien: 'https://allstream26.blogspot.com/p/canal-b.html#Break Street 84' target='_self' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/5mwFJ521LHy7F7g2PrAbB3t9DoK.jpg', lien: 'https://allstream26.blogspot.com/p/canal-b.html#Ballistic' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/8xuxdpMAgXmgRyZuZRSlYVlW5OV.jpg', lien: 'https://allstream26.blogspot.com/p/canal-b.html#Bloodmoon' target='_self' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/pAtj1hZsbDvhkCrpR2KT1LUfMuF.jpg', lien: 'https://allstream26.blogspot.com/p/canal-b.html#Bone Daddy' target='_self' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/1kxn6w6lvKkrhmVxfVqI0cfBmLa.jpg', lien: 'https://allstream26.blogspot.com/p/canal-c.html#Crazy/Beautiful' target='_self' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/uvJQGioxzhB6YMIfdOBTNhRfBXT.jpg', lien: 'https://allstream26.blogspot.com/p/canal-d.html#Disparus sans laisser de traces' target='_self' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/7ARCl0Z7h7nGdw4HkQwJrpqRqpx.jpg', lien: 'https://allstream26.blogspot.com/p/canal-e.html#Extreme Danger' target='_self' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/4rs4zl3mSn5cO8Xb9IDxxKY5wly.jpg', lien: 'https://allstream26.blogspot.com/p/canal-e.html#Engrenage Mortel' target='_self' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/wsXL08E4gQHWW5pRX4qpIyyeBfs.jpg', lien: 'https://allstream26.blogspot.com/p/canal-e.html#Ethan Frome' target='_self' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/7ppYIOB2ssNynJUU1i6FX4KqYly.jpg', lien: 'https://allstream26.blogspot.com/p/canal-e.html#Encore plus de mysteres de lOuest' target='_self' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/wLTsI5HUm5QB4ILmdBOR4UHeJQ6.jpg', lien: 'https://allstream26.blogspot.com/p/canal-f.html#Force Noire' target="_self" },
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
