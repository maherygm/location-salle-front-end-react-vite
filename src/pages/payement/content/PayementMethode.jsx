import axios from "axios";
import { useState, useEffect } from "react";
// import "./App.css";

const ProductDisplay = () => {
  function functionName(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/Payement", "")
      .then((res) => {
        // Redirigez l'utilisateur vers l'URL de la session de paiement Stripe

        window.location.href = res.data.url;
      })
      .catch((error) => {
        console.error("Erreur:", error);
      });

    // axios
    //   .get("http://localhost:8000/api/Payement")
    //   .then((res) => {
    //     // Redirigez l'utilisateur vers l'URL de la session de paiement Stripe
    //     console.log(res);
    //     // window.location.href = data.url;
    //   })
    //   .catch((error) => {
    //     console.error("Erreur:", error);
    //   });
  }
  return (
    <section className="flex h-screen justify-center items-center flex-col">
      <div className="w-fit bg-white shadow-md p-10 rounded-md">
        <div className="product">
          <img
            src="https://i.imgur.com/EHyR2nP.png"
            alt="The cover of Stubborn Attachments"
          />
          <div className="description">
            <h3>Stubborn Attachments</h3>
            <h5>$20.00</h5>
          </div>
        </div>
        <form>
          <button
            className="bg-green-500 w-full text-white p-2 rounded-md hover:bg-green-600 transition-colors duration-300"
            onClick={functionName}
          >
            Checkout
          </button>
        </form>
      </div>
    </section>
  );
};

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function PayementMethode() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
  }, []);

  return message ? <Message message={message} /> : <ProductDisplay />;
}
