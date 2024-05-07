import "./__main.css";
const Main = () => {
  return (
    <div className="w-full">
      <div className="w-full h-screen flex justify-center items-center">
        <h1 className="text-zinc-700 text-9xl">
          Salut Bienvenue dans l'exploration de notre salle 😁
          <br />
          🖱scroller pour visiter
        </h1>
        <div></div>
      </div>
      <div className="w-full h-screen flex justify-center items-center">
        <h1 className="text-zinc-700 text-9xl w-full text-right">
          UN appercu global de salle 😇
        </h1>
        <div></div>
      </div>
      <div className="w-full h-screen flex justify-center items-center">
        <div></div>
      </div>
      <div className=" w-full h-screen flex justify-center items-center">
        <div className="p-32">
          <h1 className="text-zinc-700 z-50 text-9xl  text-left  bg-white/70 rounded-3xl p-10">
            Nous Somme dans la salle principale 🙄
          </h1>
        </div>
      </div>
      <div className="w-full h-screen flex justify-center items-center">
        <div></div>
      </div>
      <div className="w-full h-screen flex justify-center items-center">
        <div></div>
      </div>
      <div className="w-full h-48 flex justify-center items-center">
        <div></div>
      </div>

      <div className=" w-dvw h-screen flex justify-center items-center">
        <div className="p-32 w-full">
          <div>
            <h1 className="text-zinc-700 z-50 text-7xl w-1/2  text-center bg-white/90 rounded-3xl p-10">
              Salle de divertissements 😎
            </h1>
          </div>
          <div className="flex justify-end items-end">
            <h1 className="text-zinc-700 z-50 text-7xl w-1/2  text-center bg-white/90 rounded-3xl p-10">
              c'est super non 🥰
            </h1>
          </div>
        </div>
      </div>
      <div className="w-dvw">
        <div
          className="p-32 
          flex justify-end items-end
        "
        >
          <h1 className="text-zinc-700 z-50 text-7xl w-1/2  text-center bg-white/90 rounded-3xl p-10  hover:text-red-600 transition-colors duration-500 ease-in-out cursor-pointer">
            Merci de votre exploration 😁
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Main;
