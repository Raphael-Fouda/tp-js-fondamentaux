console.log("Laboratoire prêt !");
const nom = "Fouda";
let age = 17;
//nom = "Durand";
age = 18;
console.log(age);
const motDePasseAttendu = "secret123";
let motDePasseUtilisateur = "trop"; // Changez cette valeur pour tester
if (motDePasseAttendu === motDePasseUtilisateur) {
    console.log("Accès autorisé. Bienvenue !");
    } else if (motDePasseUtilisateur.length<8) {
         console.log("Accès refusé. Votre mot de passe est trop court (8 caractères min).");
    } else {
         console.log("Accès refusé. Mot de passe incorrect.");
    }   
