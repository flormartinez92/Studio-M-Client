import React from "react";

export default function Intro() {
  return (
    <div>
      <h1 className="text-5xl text-black font-mystery-mixed p-2 flex items-center justify-center">
        Qué vas a aprender hoy?
      </h1>
      {/* aca van las cards */}
      <h1 className="text-5xl text-black font-mystery-mixed p-2 flex items-center justify-center">
        Qué esperar de un curso en by M studio?
      </h1>
      {/* aca van los check list */}
      <h2 className="font-ms-gothic">
        Aprende a tu ritmo y de maneda asincrónica
      </h2>
      <h2 className="font-ms-gothic">Accede a contenido actualizado</h2>
      <h2 className="font-ms-gothic">
        Accede y conecta con una comunidad de trainees
      </h2>
      <h2 className="font-ms-gothic">Obten tu certificado al finalizar</h2>

      {/* <Image src={img} width={500} height={500} alt="Picture" /> */}
    </div>
  );
}
