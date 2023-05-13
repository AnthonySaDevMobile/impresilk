import React, { useState } from "react";

export default function EditCases() {
  const [avatarUrlCases, setAvatarUrlCases] = useState("");
  const [imageAvatarCases, setImageAvatarCases] = useState(null);
  function handleFileCases(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (image.type === "image/jpeg" || image.type === "image/png") {
        setImageAvatarCases(image);
        setAvatarUrlCases(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarCases(null);
        return null;
      }
    }
  }

  return (
    <div className="py-10 flex flex-col gap-2 items-center justify-center text-white bg-bg-slide px-2">
      <h1 className="text-3xl">Cases</h1>
      <p>Alterações para o scroll de items</p>
      <div className="mt-5 md:flex md:gap-2">
        <div>
          <input type="file" accept="image/*" onChange={handleFileCases} />
          <br />
          {avatarUrlCases === null ? (
            <img src={avatar} width="250" height="250" alt="Foto do Case" />
          ) : (
            <img
              src={avatarUrlCases}
              width="250"
              height="250"
              alt="Foto do Case"
            />
          )}
        </div>
        <div className="flex flex-col gap-2 px-2 rounded">
          <div className="flex gap-1">
            <input type="number" maxLength={1} placeholder="Nota"></input>
            <input type="text" placeholder="Nome"></input>
          </div>
          <input type="text" placeholder="Descrição"></input>
          <input type="text" placeholder="Tempo de entrega"></input>
        </div>
      </div>
    </div>
  );
}
