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

export function login(mail, mdp) {
  let data = getClient();

  return data.then((res) => {
    let array = [...res.data];

    let filteredArray = array.filter((el) => el.email == mail && el.mdp == mdp);

    if (filteredArray.length > 0) {
      return {
        login: true,
        user: filteredArray[0],
      };
    } else {
      return {
        login: false,
      };
    }
  });
}

export function getClient() {
  return axios.get("http://localhost:8000/api/Client").then((res) => res.data);
}

export function getEvent() {
  return axios
    .get("http://localhost:8000/api/Evenement")
    .then((res) => res.data);
}
