const imagesAleatoires = [
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/u4NWPDtu0qVh2cJ4wLUvE4bXWx6.jpg', lien: 'https://allstream26.blogspot.com/p/lady-yakuza.html#Lady Yakuza' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/2nQYyiIhoUv6sEfolhzFwuoXZzU.jpg', lien: 'https://allstream26.blogspot.com/p/les-petits-champions.html#Les Petits Champions' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/t1pfgb8r4Kx3qLN4H8vDZdfD50R.jpg', lien: 'https://allstream26.blogspot.com/p/portes-disparus.html#Portés Disparus' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/bsmX4gJTEMvUbnZFJsUqpwGELMp.jpg', lien: 'https://allstream26.blogspot.com/p/san-ku-kai-1978.html#San Ku Kaï' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/hKk671SoqkwRXK9P4VsITIg3FUq.jpg', lien: 'https://allstream26.blogspot.com/p/total-security.html#Total Security' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/yipCOSHafg7wdsiDrkjd79YAN61.jpg', lien: 'https://allstream26.blogspot.com/p/ange-ou-demon-1991.html#Ange ou Demon 1991' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/WV1PV0G0RmKWdRkxFnacthKP1w.jpg', lien: 'https://allstream26.blogspot.com/p/adam-la-corde-rompue-1992.html#Adam la corde rompue 1992' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/rnjMGvlaXZnUkbMjGnMaxAbADIH.jpg', lien: 'https://allstream26.blogspot.com/p/x-or-le-sherif-de-lespace-1982.html#X-OR' },
     { img: 'https://media.themoviedb.org/t/p/w440_and_h660_face/qAWG2aH18Wfg2vFWbPBXipavus0.jpg', lien: 'https://allstream26.blogspot.com/p/assassin-1986.html#Assassin 1986' },
     { img: 'https://media.themoviedb.org/t/p/w440_and_h660_face/Ec9tItbkljpWYVMUyvktvhUjI0.jpg', lien: 'https://allstream26.blogspot.com/p/appelez-moi-monsieur-tibbs-1970.html#Appelez moi Monsieur Tibbs 1970' },
     { img: 'https://media.themoviedb.org/t/p/w440_and_h660_face/coTVFmc2aiPRaYvcO3USHTiMLig.jpg', lien: 'https://allstream26.blogspot.com/p/ave-cesar-2016.html#Ave Cesar 2016' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/p4ZW15twOPBgnMry2XrG0QNs5vQ.jpg', lien: 'https://allstream26.blogspot.com/p/avoir-17-ans-40-ans-1986.html#Avoir 17 ans a 40 ans 1986' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/ihbZo531NxnlUI6StF9SUwF9kIK.jpg', lien: 'https://allstream26.blogspot.com/p/break-street-84-1984.html#Break Street 84 1984' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/5mwFJ521LHy7F7g2PrAbB3t9DoK.jpg', lien: 'https://allstream26.blogspot.com/p/ballistic-2002.html#Ballistic 2002' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/8xuxdpMAgXmgRyZuZRSlYVlW5OV.jpg', lien: 'https://allstream26.blogspot.com/p/bloodmoon-1997_0961045414.html#Bloodmoon 1997' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/pAtj1hZsbDvhkCrpR2KT1LUfMuF.jpg', lien: 'https://allstream26.blogspot.com/p/bone-daddy-1998.html#Bone Daddy 1998' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/1kxn6w6lvKkrhmVxfVqI0cfBmLa.jpg', lien: 'https://allstream26.blogspot.com/p/crazybeautiful-2001.html#Crazy/Beautiful 2001' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/uvJQGioxzhB6YMIfdOBTNhRfBXT.jpg', lien: 'https://allstream26.blogspot.com/p/disparus-sans-laisser-de-traces-1993.html#Disparus sans laisser de traces 1993' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/7ARCl0Z7h7nGdw4HkQwJrpqRqpx.jpg', lien: 'https://allstream26.blogspot.com/p/extreme-danger-2001.html#Extreme Danger 2001' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/4rs4zl3mSn5cO8Xb9IDxxKY5wly.jpg', lien: 'https://allstream26.blogspot.com/p/engrenage-mortel-1992.html#Engrenage Mortel 1992' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/wsXL08E4gQHWW5pRX4qpIyyeBfs.jpg', lien: 'https://allstream26.blogspot.com/p/ethan-frome-1993.html#Ethan Frome 1993' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/7ppYIOB2ssNynJUU1i6FX4KqYly.jpg', lien: 'https://allstream26.blogspot.com/p/encore-plus-de-mysteres-de-louest-1980.html#Encore plus de mysteres de lOuest 1980' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/wLTsI5HUm5QB4ILmdBOR4UHeJQ6.jpg', lien: 'https://allstream26.blogspot.com/p/canal-f.html#Force Noire' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/d7ztUEeUpp3mGrD5xoLpi4sH8ad.jpg', lien: 'https://allstream26.blogspot.com/p/lady-snowblood.html#Lady Snowblood' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/sm4GAuVc07hU7Oj6DgPnWCIRcHS.jpg', lien: 'https://allstream26.blogspot.com/p/canal-h.html#Haute tension' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/9dZFFdemagHwRydu5uuC9zaF1ID.jpg', lien: 'https://allstream26.blogspot.com/p/canal-h.html#High-Rise' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/1mAemPkRF6IwUkEehwqTJVEPmq6.jpg', lien: 'https://allstream26.blogspot.com/p/cuba-1979.html#Cuba 1979' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/9CftPizIc8g2EaFcELC4cwMBgNA.jpg', lien: 'https://allstream26.blogspot.com/p/coups-pour-coups-1990.html#Coups pour coups 1990' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/dokAejva0YOH49wm9uLIeG6oLY2.jpg', lien: 'https://allstream26.blogspot.com/p/canal-h.html#Hes My Girl' },
     { img: 'https://media.themoviedb.org/t/p/w600_and_h900_face/5QPnbZLJIO1r6vP9Uejf96V1U1w.jpg', lien: 'https://allstream26.blogspot.com/p/canal-h.html#House' },
      ];

// 2. Fonction pour afficher l'image
function afficherImageAleatoire() {
    // Sélectionner un index aléatoire
    const index = Math.floor(Math.random() * imagesAleatoires.length);
    const selection = imagesAleatoires[index];

    // Générer le HTML
    const html = `<a href="${selection.lien}" target="_top">
                    <img src="${selection.img}" width="190px" height="260px" alt="" />
                  </a>`;

    // Insérer dans le conteneur HTML (ex: div avec id="container")
    document.getElementById('container').innerHTML = html;
}

// Lancer l'affichage au chargement
window.addEventListener('load', afficherImageAleatoire);
