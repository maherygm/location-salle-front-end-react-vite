import axios from "axios";

export function PayerOnline(parameters) {
  axios
    .post("http://localhost:8000/api/Payement", {
      param: parameters.id,
      day: parameters.days,
      typesEvenement: parameters.typesEvenement,
      dateEvenement: parameters.dateEvenement,
      prix: parameters.prix,
      user_id: parameters.user_id,
      mail: parameters.mail,
    })
    .then((res) => {
      // Redirigez l'utilisateur vers l'URL de la session de paiement Stripe

      window.location.href = res.data.url;
    })
    .catch((error) => {
      console.error("Erreur:", error);
    });
}
