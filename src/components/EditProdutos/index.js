import React, { useState } from "react";

export default function EditProdutos() {
  const [avatarUrlProdutos, setAvatarUrlProdutos] = useState("");
  const [imageAvatarProdutos, setImageAvatarProdutos] = useState(null);
  function handleFileProdutos(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (image.type === "image/jpeg" || image.type === "image/png") {
        setImageAvatarProdutos(image);
        setAvatarUrlProdutos(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarProdutos(null);
        return null;
      }
    }
  }
  return (
    <div className="py-10 bg-zinc-200 flex flex-col items-center justify-center">
      <h1 className="text-3xl">Produtos</h1>
      <p>Alterações para cada item</p>
      <div className="mt-5 md:flex gap-2">
        <input type="file" accept="image/*" onChange={handleFileProdutos} />
        <br />
        {avatarUrlProdutos === null ? (
          <img
            src={avatar}
            width="250"
            height="250"
            alt="Foto de perfil do Produto"
          />
        ) : (
          <img
            src={avatarUrlProdutos}
            width="250"
            height="250"
            alt="Foto de perfil do Produto"
          />
        )}
        <div className="flex flex-col gap-2">
          <input type="text" placeholder="Categoria"></input>
          <input type="text" placeholder="Característica"></input>
          <input type="text" placeholder="Descrição"></input>
        </div>
      </div>
    </div>
  );
}
