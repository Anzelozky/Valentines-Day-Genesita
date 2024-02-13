import { useState, useRef, useEffect } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Estas segura?",
      "Super segura?",
      "Piénsalo de nuevo!",
      "Otra oportunidad!",
      "Segura que no?",
      "Ya no vas a tener un Jommysaurio :c!",
      "Piénsalo otra veeeeez!",
      "Estas completamente segura?",
      "Esto puede ser un error!",
      "Ten corazón :c!",
      "No seas friaaa!",
      "Pliiiis?",
      "Lo podrías reconsiderar?",
      "Es tu respuesta final?",
      "me rompes el corazón ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">
      <div>
        <video
          style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
          playsInline
          loop
          controls
          hidden
          src="src\foundyouvideo.mp4"
          ref={videoEl}
        />
      </div>
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <audio src="/foundyou.mp4" autoPlay={true}></audio>
            <h1 className="text-container">Genesita</h1>
            <img src="https://gifdb.com/images/high/dinosaur-celebrating-capoo-cat-mamhhfrtjbb4b7an.gif" />
            <div className="text-container">Wuwuwuwu!!!</div>
            <div className="text-container">
              Hay algo que te quiero decir Genesita, estos meses que me la he
              pasado contigo, han sido los mejores, he aprendido cosas nuevas,
              me he superado a mi mismo, y me he convertido en una persona super
              linda, me encanta la manera en la que nos llevamos, compartimos
              los mismos gustos y opinamos sobre lo que pensamos, tenemos
              tantísimas cosas en común, como opiniones diversas no hay duda que
              cada día que pasa estoy más convencido que elegí a la persona
              correcta para que tuviera mi corazón, mi alma y mi mente, eres un
              ser super especial para mi, y no importa la forma ni la manera, ni
              la distancia, espero encontrar la manera de todos los días
              enamorarte un poco más, pues tu eres la mejor persona para mi, me
              haces ser mejor, y me haces ser un mejor hombre, para mi y para el
              mundo que me rodea
            </div>
            <div className="text-container">
              me encanta que seas mi mejor amiga, a la que le cuento todo, y me
              encanta ser el tuyo, se que es dificil confiar en las demás
              personas, pero te quiero dar gracias por haber confiado en mi, por
              darme la oportunidad de entrar en tu corazon y decirte todos los
              días lo mucho que te quiero, eres una hadita super increible y
              super especial para mi, no cabe duda que contigo es con quien
              quiero estar, me motiva mucho verte y superarte, caminar a tu lado
              es una experiencia increible, así sean 12 días los que nos veamos,
              fueron los mejores para mi de este año, y los que faltan, no
              importa si es con una carta con flores, o por medio de paginas lo
              que tenga que expresarte, tenemos muchas aventuras que descubrir
              juntos, el mundo por explorar y muchas personitas nuevas que
              hacer, feliz San Valentín my lovesito :***
            </div>
            <h1 className="text-container">
              Me encanta amarte con todo mi ser, me siento tan yo
            </h1>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://raw.githubusercontent.com/gist/harrytran103/24b1e3b5f38a37c03362120e17e72504/raw/31f87d6ff27caf55ce470e5a3889bc5e7e9dc1d2/cat-dinosaur.gif"
            />
            <h1 className="text-container">Quieres ser mi san Valentín?</h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Si
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
