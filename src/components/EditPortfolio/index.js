import React, { useState } from "react";

export default function EditPortfolio() {
  const [avatarUrlsPortfolio, setAvatarUrlsPortfolio] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [imageAvatarsPortfolio, setImageAvatarsPortfolio] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  function handleFilePortfolio(e, index) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (image.type === "image/jpeg" || image.type === "image/png") {
        const newImageAvatarsPortfolio = [...imageAvatarsPortfolio];
        const newAvatarUrlsPortfolio = [...avatarUrlsPortfolio];
        newImageAvatarsPortfolio[index] = image;
        newAvatarUrlsPortfolio[index] = URL.createObjectURL(image);
        setImageAvatarsPortfolio(newImageAvatarsPortfolio);
        setAvatarUrlsPortfolio(newAvatarUrlsPortfolio);
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        const newImageAvatarsPortfolio = [...imageAvatarsPortfolio];
        const newAvatarUrlsPortfolio = [...avatarUrlsPortfolio];
        newImageAvatarsPortfolio[index] = null;
        newAvatarUrlsPortfolio[index] = "";
        setImageAvatarsPortfolio(newImageAvatarsPortfolio);
        setAvatarUrlsPortfolio(newAvatarUrlsPortfolio);
        return null;
      }
    }
  }

  return (
    <div className="py-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl">Portifólio</h1>
      <p>Alterações para cada imagem exibida</p>
      <div className="grid grid-cols-3 gap-4">
        {[...Array(9)].map((_, index) => (
          <div key={index}>
            <input
              type="file"
              onChange={(e) => handleFilePortfolio(e, index)}
            />
            {imageAvatarsPortfolio[index] && (
              <img
                className="w-full h-[120px] md:w-[200px]"
                src={avatarUrlsPortfolio[index]}
                alt={`Imagem ${index}`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
