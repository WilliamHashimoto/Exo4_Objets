// ## Exo 

// ### Créer un objet "vieille_dame" avec une propriété "âge" assez élevée une propriété "nom" contenant un "prenom" et un "nom de famille" (/!\ Objet dans objet), une propriété "moral" avec comme valeur "mal" et une propriété "objet" par exemple une canne 

// ### une méthode "parler" qui selon son moral fait une alert différente, si son moral = "mal" alors elle dira "Vous me dérangez et le frappe avec son objet", si son moral = "bien" alors elle dira "bonjour" + le nom du vieil_homme.

// ### Créer ensuite l'objet vieil_homme avec une propriété "nom" et une méthode "adoucir" qui change le moral de la "vieille_dame" en "bien".

// ### Faites parler la vieille dame, puis lancer la méthode adoucir du vieil homme et relancer la méthode parler de la vieille dame.

let vieille_dame = {
    age: 103 + "ans",
    nom: {prenom: "Chiyoko", nom_de_famille: "Obasan"},
    moral: "mal",
    object: "sa canne",
    parler(){
        if (this.moral == "mal") {
            console.log(`${this.nom.prenom} ${this.nom.nom_de_famille} dit: "Vous me dérangez!" et le frappe avec ${this.object}.`);
        } else {
            console.log(`${this.nom.prenom} ${this.nom.nom_de_famille} dit: "Bonjour ${viel_homme.nom}."`);
        }
    }
}

let viel_homme = {
    nom: "Akira",
    adoucir(){
        vieille_dame.moral = "bien";
        console.log(`${this.nom} utilise adoucir`);
    }
}

vieille_dame.parler()
viel_homme.adoucir()
vieille_dame.parler()