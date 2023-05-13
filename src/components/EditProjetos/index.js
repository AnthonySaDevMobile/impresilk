import React, { useState } from "react";

export default function EditProjetos() {
  const [avatarUrlProjetos, setAvatarUrlProjetos] = useState("");
  const [imageAvatarProjetos, setImageAvatarProjetos] = useState(null);

  function handleFileProjetos(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (image.type === "image/jpeg" || image.type === "image/png") {
        setImageAvatarProjetos(image);
        setAvatarUrlProjetos(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarProjetos(null);
        return null;
      }
    }
  }
  return (
    <div className="py-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl">Projetos</h1>
      <p>Alterações para a tag e para a imagem de fundo</p>
      <div>
        <div className="flex flex-col mt-5">
          <input type="number" placeholder="Dia"></input>
          <input type="text" maxLength={3} placeholder="Mês"></input>
        </div>
        <input type="file" accept="image/*" onChange={handleFileProjetos} />
        <br />
        {avatarUrlProjetos === null ? (
          <img src={avatar} width="250" height="250" alt="Foto de projeto" />
        ) : (
          <img
            src={avatarUrlProjetos}
            width="250"
            height="250"
            alt="Foto de projeto"
          />
        )}
      </div>
    </div>
  );
}
