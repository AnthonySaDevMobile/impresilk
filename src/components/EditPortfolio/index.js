import React, { useState, useEffect } from "react";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db, storage } from "@/services/firebaseConnection";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


export default function EditPortfolio() {
  const [imageAvatarPortfolio, setImageAvatarPortfolio] = useState(null);
  const [imageAvatarPortfolio2, setImageAvatarPortfolio2] = useState(null);
  const [imageAvatarPortfolio3, setImageAvatarPortfolio3] = useState(null);
  const [imageAvatarPortfolio4, setImageAvatarPortfolio4] = useState(null);
  const [imageAvatarPortfolio5, setImageAvatarPortfolio5] = useState(null);
  const [imageAvatarPortfolio6, setImageAvatarPortfolio6] = useState(null);
  const [imageAvatarPortfolio7, setImageAvatarPortfolio7] = useState(null);
  const [imageAvatarPortfolio8, setImageAvatarPortfolio8] = useState(null);
  const [imageAvatarPortfolio9, setImageAvatarPortfolio9] = useState(null);
  const [avatarUrlPortfolio, setAvatarUrlPortfolio] = useState("");
  const [avatarUrlPortfolio2, setAvatarUrlPortfolio2] = useState("");
  const [avatarUrlPortfolio3, setAvatarUrlPortfolio3] = useState("");
  const [avatarUrlPortfolio4, setAvatarUrlPortfolio4] = useState("");
  const [avatarUrlPortfolio5, setAvatarUrlPortfolio5] = useState("");
  const [avatarUrlPortfolio6, setAvatarUrlPortfolio6] = useState("");
  const [avatarUrlPortfolio7, setAvatarUrlPortfolio7] = useState("");
  const [avatarUrlPortfolio8, setAvatarUrlPortfolio8] = useState("");
  const [avatarUrlPortfolio9, setAvatarUrlPortfolio9] = useState("");
  const [portfolioImages, setPortfolioImages] = useState([]);
  const [portfolioImages2, setPortfolioImages2] = useState([]);
  const [portfolioImages3, setPortfolioImages3] = useState([]);
  const [portfolioImages4, setPortfolioImages4] = useState([]);
  const [portfolioImages5, setPortfolioImages5] = useState([]);
  const [portfolioImages6, setPortfolioImages6] = useState([]);
  const [portfolioImages7, setPortfolioImages7] = useState([]);
  const [portfolioImages8, setPortfolioImages8] = useState([]);
  const [portfolioImages9, setPortfolioImages9] = useState([]);
  const [textButton, setTextButton] = useState("Enviar alterações")
  const [textButton2, setTextButton2] = useState("Enviar alterações")
  const [textButton3, setTextButton3] = useState("Enviar alterações")
  const [textButton4, setTextButton4] = useState("Enviar alterações")
  const [textButton5, setTextButton5] = useState("Enviar alterações")
  const [textButton6, setTextButton6] = useState("Enviar alterações")
  const [textButton7, setTextButton7] = useState("Enviar alterações")
  const [textButton8, setTextButton8] = useState("Enviar alterações")
  const [textButton9, setTextButton9] = useState("Enviar alterações")
  

  const portfolioCollectionRef = collection(db, "portfolio");

  const portfolioId =  "0jQrsgkEs0XF3dRLzAAm";
  const portfolioId2 = "32KMzUBswZtDN4VeMsoK";
  const portfolioId3 = "PfJgxCfBzxyp7ndPXqKu";
  const portfolioId4 = "PuPKwnxlwKSDfbzdm2tr";
  const portfolioId5 = "Q0TlE3PYavaoJH2pw8UL";
  const portfolioId6 = "deqH9SMM8FnONvCMx6jL";
  const portfolioId7 = "gOH8fn4VS3JCRRtjArsb";
  const portfolioId8 = "gzDEAtB4wGOPv9lxAK3R";
  const portfolioId9 = "j6qvarr66IQaYx1JOC6M";

  useEffect(() => {
    const getPortfolioImages = async () => {
      const data = await getDocs(portfolioCollectionRef);
      setPortfolioImages([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[0],
      ]);
      setPortfolioImages2([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[1],
      ]);
      setPortfolioImages3([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[2],
      ]);
      setPortfolioImages4([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[3],
      ]);
      setPortfolioImages5([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[4],
      ]);
      setPortfolioImages6([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[5],
      ]);
      setPortfolioImages7([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[6],
      ]);
      setPortfolioImages8([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[7],
      ]);
      setPortfolioImages9([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[8],
      ]);
    };
    getPortfolioImages();
  }, []);

  function handleFilePortfolio(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (
        image.type === "image/jpeg" ||
        image.type === "image/png" ||
        image.type === "image/jpg"
      ) {
        setImageAvatarPortfolio(image);
        setAvatarUrlPortfolio(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarPortfolio(null);
        return null;
      }
    }
    console.log(typeof imageAvatarPortfolio);
  }

  function handleFilePortfolio2(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (
        image.type === "image/jpeg" ||
        image.type === "image/png" ||
        image.type === "image/jpg"
      ) {
        setImageAvatarPortfolio2(image);
        setAvatarUrlPortfolio2(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarPortfolio2(null);
        return null;
      }
    }
    console.log(typeof imageAvatarPortfolio);
  }

  function handleFilePortfolio3(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (
        image.type === "image/jpeg" ||
        image.type === "image/png" ||
        image.type === "image/jpg"
      ) {
        setImageAvatarPortfolio3(image);
        setAvatarUrlPortfolio3(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarPortfolio3(null);
        return null;
      }
    }
    console.log(typeof imageAvatarPortfolio);
  }
  function handleFilePortfolio4(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (
        image.type === "image/jpeg" ||
        image.type === "image/png" ||
        image.type === "image/jpg"
      ) {
        setImageAvatarPortfolio4(image);
        setAvatarUrlPortfolio4(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarPortfolio4(null);
        return null;
      }
    }
    console.log(typeof imageAvatarPortfolio);
  }

  function handleFilePortfolio5(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (
        image.type === "image/jpeg" ||
        image.type === "image/png" ||
        image.type === "image/jpg"
      ) {
        setImageAvatarPortfolio5(image);
        setAvatarUrlPortfolio5(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarPortfolio5(null);
        return null;
      }
    }
    console.log(typeof imageAvatarPortfolio);
  }

  function handleFilePortfolio6(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (
        image.type === "image/jpeg" ||
        image.type === "image/png" ||
        image.type === "image/jpg"
      ) {
        setImageAvatarPortfolio6(image);
        setAvatarUrlPortfolio6(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarPortfolio6(null);
        return null;
      }
    }
    console.log(typeof imageAvatarPortfolio);
  }
  function handleFilePortfolio7(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (
        image.type === "image/jpeg" ||
        image.type === "image/png" ||
        image.type === "image/jpg"
      ) {
        setImageAvatarPortfolio7(image);
        setAvatarUrlPortfolio7(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarPortfolio7(null);
        return null;
      }
    }
    console.log(typeof imageAvatarPortfolio);
  }

  function handleFilePortfolio8(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (
        image.type === "image/jpeg" ||
        image.type === "image/png" ||
        image.type === "image/jpg"
      ) {
        setImageAvatarPortfolio8(image);
        setAvatarUrlPortfolio8(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarPortfolio8(null);
        return null;
      }
    }
    console.log(typeof imageAvatarPortfolio);
  }

  function handleFilePortfolio9(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (
        image.type === "image/jpeg" ||
        image.type === "image/png" ||
        image.type === "image/jpg"
      ) {
        setImageAvatarPortfolio9(image);
        setAvatarUrlPortfolio9(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarPortfolio9(null);
        return null;
      }
    }
    console.log(typeof imageAvatarPortfolio);
  }

  //1

  async function handleSave(e) {
    e.preventDefault();
    setTextButton("Enviando...");
    const portfolio = portfolioImages[0];
    const portfolioRef = doc(db, "portfolio", portfolioId);
  
    await handleUpload();
  
    // Wait for handleUpload() to complete and set the download URL before updating Firestore
    const updatedData = {
      imagem: avatarUrlPortfolio || portfolio.imagem,
    };
    await setDoc(portfolioRef, updatedData)
      .then(() => {
        console.log("foi");
      })
      .catch((e) => {
        console.log("erro:" + e);
      });
    setTextButton("Enviado!");
  }
  
  async function handleUpload() {
    if (avatarUrlPortfolio !== null) {
      const imagesRef = ref(storage, `imagesPortfolio/${portfolioId}`);
      await uploadBytes(imagesRef, imageAvatarPortfolio).then((snapshot) => {
      });
      const url = await getDownloadURL(ref(storage, `imagesPortfolio/${portfolioId}`));
      setAvatarUrlPortfolio(url);
    } else {
      return null;
    }
  }
  
  //2

  async function handleSave2(e) {
    e.preventDefault();
    setTextButton2("Enviando...");
    const portfolio = portfolioImages2[0];
    const portfolioRef = doc(db, "portfolio", portfolioId2);
    await handleUpload2();
    // atualizar apenas os campos que foram alterados
    const updatedData = {
      imagem: avatarUrlPortfolio2 || portfolio.imagem,
    };

    await setDoc(portfolioRef, updatedData)
      .then(() => {
        console.log("foi");
      })
      .catch((e) => {
        console.log("erro:" + e);
      });
    setTextButton2("Enviado!");
  }

  async function handleUpload2() {
    if (avatarUrlPortfolio2 !== null) {
      const imagesRef = ref(storage, `imagesPortfolio/${portfolioId2}`);
      await uploadBytes(imagesRef, imageAvatarPortfolio2).then((snapshot) => {
        console.log("Uploaded 2!");
      });
      const url = await getDownloadURL(ref(storage, `imagesPortfolio/${portfolioId2}`));
      setAvatarUrlPortfolio2(url);
    } else {
      return null;
    }
  }

  //3
  async function handleSave3(e) {
    e.preventDefault();
    setTextButton3("Enviando...");
    const portfolio = portfolioImages3[0];
    const portfolioRef = doc(db, "portfolio", portfolioId3);
    await handleUpload3();
    // atualizar apenas os campos que foram alterados
    const updatedData = {
      imagem: avatarUrlPortfolio3 || portfolio.imagem,
    };

    await setDoc(portfolioRef, updatedData)
      .then(() => {
        console.log("foi");
      })
      .catch((e) => {
        console.log("erro:" + e);
      });
    setTextButton3("Enviado!");
  }

  async function handleUpload3() {
    if (avatarUrlPortfolio3 !== null) {
      const imagesRef = ref(storage, `imagesPortfolio/${portfolioId3}`);
      await uploadBytes(imagesRef, imageAvatarPortfolio3).then((snapshot) => {
        console.log("Uploaded 3!");
      });
      const url = await getDownloadURL(ref(storage, `imagesPortfolio/${portfolioId3}`));
      setAvatarUrlPortfolio3(url);
    } else {
      return null;
    }
  }

  //4
  async function handleSave4(e) {
    e.preventDefault();
    setTextButton4("Enviando...");
    const portfolio = portfolioImages4[0];
    const portfolioRef = doc(db, "portfolio", portfolioId4);
  
    await handleUpload4();
  
    // Wait for handleUpload() to complete and set the download URL before updating Firestore
    const updatedData = {
      imagem: avatarUrlPortfolio4 || portfolio.imagem,
    };
    await setDoc(portfolioRef, updatedData)
      .then(() => {
        console.log("foi");
      })
      .catch((e) => {
        console.log("erro:" + e);
      });
    setTextButton4("Enviado!");
  }
  
  async function handleUpload4() {
    if (avatarUrlPortfolio !== null) {
      const imagesRef = ref(storage, `imagesPortfolio/${portfolioId4}`);
      await uploadBytes(imagesRef, imageAvatarPortfolio4).then((snapshot) => {
      });
      const url = await getDownloadURL(ref(storage, `imagesPortfolio/${portfolioId4}`));
      setAvatarUrlPortfolio4(url);
    } else {
      return null;
    }
  }
  

  //5
  async function handleSave5(e) {
    e.preventDefault();
    setTextButton5("Enviando...");
    const portfolio = portfolioImages5[0];
    const portfolioRef = doc(db, "portfolio", portfolioId5);
    await handleUpload5();
    // atualizar apenas os campos que foram alterados
    const updatedData = {
      imagem: avatarUrlPortfolio5 || portfolio.imagem,
    };

    await setDoc(portfolioRef, updatedData)
      .then(() => {
        console.log("foi");
      })
      .catch((e) => {
        console.log("erro:" + e);
      });
    setTextButton5("Enviado!");
  }

  async function handleUpload5() {
    if (avatarUrlPortfolio5 !== null) {
      const imagesRef = ref(storage, `imagesPortfolio/${portfolioId5}`);
      await uploadBytes(imagesRef, imageAvatarPortfolio5).then((snapshot) => {
        console.log("Uploaded 5!");
      });
      const url = await getDownloadURL(ref(storage, `imagesPortfolio/${portfolioId5}`));
      setAvatarUrlPortfolio5(url);
    } else {
      return null;
    }
  }

  //6
  async function handleSave6(e) {
    e.preventDefault();
    setTextButton6("Enviando...");
    const portfolio = portfolioImages6[0];
    const portfolioRef = doc(db, "portfolio", portfolioId6);
    await handleUpload6();
    // atualizar apenas os campos que foram alterados
    const updatedData = {
      imagem: avatarUrlPortfolio6 || portfolio.imagem,
    };

    await setDoc(portfolioRef, updatedData)
      .then(() => {
        console.log("foi");
      })
      .catch((e) => {
        console.log("erro:" + e);
      });
    setTextButton6("Enviado!");
  }

  async function handleUpload6() {
    if (avatarUrlPortfolio6 !== null) {
      const imagesRef = ref(storage, `imagesPortfolio/${portfolioId6}`);
      await uploadBytes(imagesRef, imageAvatarPortfolio6).then((snapshot) => {
        console.log("Uploaded 6!");
      });
      const url = await getDownloadURL(ref(storage, `imagesPortfolio/${portfolioId6}`));
      setAvatarUrlPortfolio6(url);
    } else {
      return null;
    }
  }

  //7
  async function handleSave7(e) {
    e.preventDefault();
    setTextButton7("Enviando...");
    const portfolio = portfolioImages7[0];
    const portfolioRef = doc(db, "portfolio", portfolioId7);
    await handleUpload7();
    const updatedData = {
      imagem: avatarUrlPortfolio7 || portfolio.imagem,
    };
    await setDoc(portfolioRef, updatedData)
      .then(() => {
        console.log("foi");
      })
      .catch((e) => {
        console.log("erro:" + e);
      });
    setTextButton7("Enviado!");
  }
  
  async function handleUpload7() {
    if (avatarUrlPortfolio7 !== null) {
      const imagesRef = ref(storage, `imagesPortfolio/${portfolioId7}`);
      await uploadBytes(imagesRef, imageAvatarPortfolio7).then((snapshot) => {
      });
      const url = await getDownloadURL(ref(storage, `imagesPortfolio/${portfolioId7}`));
      setAvatarUrlPortfolio7(url);
    } else {
      return null;
    }
  }
  
  //8
  async function handleSave8(e) {
    e.preventDefault();
    setTextButton8("Enviando...");
    const portfolio = portfolioImages8[0];
    const portfolioRef = doc(db, "portfolio", portfolioId8);
    await handleUpload8();
    // atualizar apenas os campos que foram alterados
    const updatedData = {
      imagem: avatarUrlPortfolio8 || portfolio.imagem,
    };

    await setDoc(portfolioRef, updatedData)
      .then(() => {
        console.log("foi");
      })
      .catch((e) => {
        console.log("erro:" + e);
      });
    setTextButton8("Enviado!");
  }

  async function handleUpload8() {
    if (avatarUrlPortfolio8 !== null) {
      const imagesRef = ref(storage, `imagesPortfolio/${portfolioId8}`);
      await uploadBytes(imagesRef, imageAvatarPortfolio8).then((snapshot) => {
        console.log("Uploaded 8!");
      });
      const url = await getDownloadURL(ref(storage, `imagesPortfolio/${portfolioId8}`));
      setAvatarUrlPortfolio8(url);
    } else {
      return null;
    }
  }

  //9
  async function handleSave9(e) {
    e.preventDefault();
    setTextButton9("Enviando...");
    const portfolio = portfolioImages9[0];
    const portfolioRef = doc(db, "portfolio", portfolioId9);
    await handleUpload9();
    // atualizar apenas os campos que foram alterados
    const updatedData = {
      imagem: avatarUrlPortfolio9 || portfolio.imagem,
    };

    await setDoc(portfolioRef, updatedData)
      .then(() => {
        console.log("foi");
      })
      .catch((e) => {
        console.log("erro:" + e);
      });
    setTextButton9("Enviado!");
  }

  async function handleUpload9() {
    if (avatarUrlPortfolio9 !== null) {
      const imagesRef = ref(storage, `imagesPortfolio/${portfolioId9}`);
      await uploadBytes(imagesRef, imageAvatarPortfolio9).then((snapshot) => {
        console.log("Uploaded 9!");
      });
      const url = await getDownloadURL(ref(storage, `imagesPortfolio/${portfolioId9}`));
      setAvatarUrlPortfolio9(url);
    } else {
      return null;
    }
  }


  return (
<div>

<div>
        {portfolioImages.map((foto) => (
        <form 
        key={foto.id}
        onSubmit={handleSave}>
        <div
            className="md:flex flex-row gap-4 items-center justify-center "
          >
            <input type="file" onChange={(e) => handleFilePortfolio(e)} />
            {imageAvatarPortfolio === null ? (
              <img
                src={foto.imagem}
                width="250"
                height="250"
                alt="Foto"
              />
            ) : (
              <img
                src={avatarUrlPortfolio}
                width="250"
                height="250"
                alt="Foto"
              />
            )}
            <button className="text-center bg-blue-800 px-14 py-3 rounded-3xl text-white text-sm mt-10 font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
              {textButton}
            </button>
          </div>
        </form>
        ))}
 </div>
<div>
        {portfolioImages2.map((foto) => (
        <form 
        key={foto.id}
        onSubmit={handleSave2}>
        <div
            className="md:flex flex-row gap-4 items-center justify-center "
          >
            <input type="file" onChange={(e) => handleFilePortfolio2(e)} />
            {imageAvatarPortfolio2 === null ? (
              <img
                src={foto.imagem}
                width="250"
                height="250"
                alt="Foto"
              />
            ) : (
              <img
                src={avatarUrlPortfolio2}
                width="250"
                height="250"
                alt="Foto"
              />
            )}
            <button className="text-center bg-blue-800 px-14 py-3 rounded-3xl text-white text-sm mt-10 font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
              {textButton2}
            </button>
          </div>
        </form>
        ))}
 </div>
<div>
        {portfolioImages3.map((foto) => (
        <form 
        key={foto.id}
        onSubmit={handleSave3}>
        <div
            className="md:flex flex-row gap-4 items-center justify-center "
          >
            <input type="file" onChange={(e) => handleFilePortfolio3(e)} />
            {imageAvatarPortfolio3 === null ? (
              <img
                src={foto.imagem}
                width="250"
                height="250"
                alt="Foto"
              />
            ) : (
              <img
                src={avatarUrlPortfolio3}
                width="250"
                height="250"
                alt="Foto"
              />
            )}
            <button className="text-center bg-blue-800 px-14 py-3 rounded-3xl text-white text-sm mt-10 font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
              {textButton3}
            </button>
          </div>
        </form>
        ))}
 </div>
<div>
        {portfolioImages4.map((foto) => (
        <form 
        key={foto.id}
        onSubmit={handleSave4}>
        <div
            className="md:flex flex-row gap-4 items-center justify-center "
          >
            <input type="file" onChange={(e) => handleFilePortfolio4(e)} />
            {imageAvatarPortfolio4 === null ? (
              <img
                src={foto.imagem}
                width="250"
                height="250"
                alt="Foto"
              />
            ) : (
              <img
                src={avatarUrlPortfolio4}
                width="250"
                height="250"
                alt="Foto"
              />
            )}
            <button className="text-center bg-blue-800 px-14 py-3 rounded-3xl text-white text-sm mt-10 font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
              {textButton4}
            </button>
          </div>
        </form>
        ))}
 </div>
<div>
        {portfolioImages5.map((foto) => (
        <form 
        key={foto.id}
        onSubmit={handleSave5}>
        <div
            className="md:flex flex-row gap-4 items-center justify-center "
          >
            <input type="file" onChange={(e) => handleFilePortfolio5(e)} />
            {imageAvatarPortfolio5 === null ? (
              <img
                src={foto.imagem}
                width="250"
                height="250"
                alt="Foto"
              />
            ) : (
              <img
                src={avatarUrlPortfolio5}
                width="250"
                height="250"
                alt="Foto"
              />
            )}
            <button className="text-center bg-blue-800 px-14 py-3 rounded-3xl text-white text-sm mt-10 font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
              {textButton5}
            </button>
          </div>
        </form>
        ))}
 </div>
<div>
        {portfolioImages6.map((foto) => (
        <form 
        key={foto.id}
        onSubmit={handleSave6}>
        <div
            className="md:flex flex-row gap-4 items-center justify-center "
          >
            <input type="file" onChange={(e) => handleFilePortfolio6(e)} />
            {imageAvatarPortfolio6 === null ? (
              <img
                src={foto.imagem}
                width="250"
                height="250"
                alt="Foto"
              />
            ) : (
              <img
                src={avatarUrlPortfolio6}
                width="250"
                height="250"
                alt="Foto"
              />
            )}
            <button className="text-center bg-blue-800 px-14 py-3 rounded-3xl text-white text-sm mt-10 font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
              {textButton6}
            </button>
          </div>
        </form>
        ))}
 </div>
<div>
        {portfolioImages7.map((foto) => (
        <form 
        key={foto.id}
        onSubmit={handleSave7}>
        <div
            className="md:flex flex-row gap-4 items-center justify-center "
          >
            <input type="file" onChange={(e) => handleFilePortfolio7(e)} />
            {imageAvatarPortfolio7 === null ? (
              <img
                src={foto.imagem}
                width="250"
                height="250"
                alt="Foto"
              />
            ) : (
              <img
                src={avatarUrlPortfolio7}
                width="250"
                height="250"
                alt="Foto"
              />
            )}
            <button className="text-center bg-blue-800 px-14 py-3 rounded-3xl text-white text-sm mt-10 font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
              {textButton7}
            </button>
          </div>
        </form>
        ))}
 </div>
<div>
        {portfolioImages8.map((foto) => (
        <form 
        key={foto.id}
        onSubmit={handleSave8}>
        <div
            className="md:flex flex-row gap-4 items-center justify-center "
          >
            <input type="file" onChange={(e) => handleFilePortfolio8(e)} />
            {imageAvatarPortfolio8 === null ? (
              <img
                src={foto.imagem}
                width="250"
                height="250"
                alt="Foto"
              />
            ) : (
              <img
                src={avatarUrlPortfolio8}
                width="250"
                height="250"
                alt="Foto"
              />
            )}
            <button className="text-center bg-blue-800 px-14 py-3 rounded-3xl text-white text-sm mt-10 font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
              {textButton8}
            </button>
          </div>
        </form>
        ))}
 </div>
<div>
        {portfolioImages9.map((foto) => (
        <form 
        key={foto.id}
        onSubmit={handleSave9}>
        <div
            className="md:flex flex-row gap-4 items-center justify-center "
          >
            <input type="file" onChange={(e) => handleFilePortfolio9(e)} />
            {imageAvatarPortfolio9 === null ? (
              <img
                src={foto.imagem}
                width="250"
                height="250"
                alt="Foto"
              />
            ) : (
              <img
                src={avatarUrlPortfolio9}
                width="250"
                height="250"
                alt="Foto"
              />
            )}
            <button className="text-center bg-blue-800 px-14 py-3 rounded-3xl text-white text-sm mt-10 font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
              {textButton9}
            </button>
          </div>
        </form>
        ))}
 </div>
</div>

  )
}
