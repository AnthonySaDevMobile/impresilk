import React, { useState, useEffect } from "react";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db, storage } from "@/services/firebaseConnection";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { FaUpload } from "react-icons/fa";

export default function EditHome() {
  const [imageAvatarHome, setImageAvatarHome] = useState(null);
  const [imageAvatarHome2, setImageAvatarHome2] = useState(null);
  const [imageAvatarHome3, setImageAvatarHome3] = useState(null);
  const [avatarUrlHome, setAvatarUrlHome] = useState("");
  const [avatarUrlHome2, setAvatarUrlHome2] = useState("");
  const [avatarUrlHome3, setAvatarUrlHome3] = useState("");
  const [avatarUrlHomeFirebase, setAvatarUrlHomeFirebase] = useState("");
  const [avatarUrlHome2Firebase, setAvatarUrlHome2Firebase] = useState("");
  const [avatarUrlHome3Firebase, setAvatarUrlHome3Firebase] = useState("");
  const [homeImages, setHomeImages] = useState([]);
  const [homeImages2, setHomeImages2] = useState([]);
  const [homeImages3, setHomeImages3] = useState([]);
  const [textButton, setTextButton] = useState("Enviar alterações")
  const [textButton2, setTextButton2] = useState("Enviar alterações")
  const [textButton3, setTextButton3] = useState("Enviar alterações")


  const homeId = "6hYDsWi1IXapb6szieMF";
  const homeId2 = "8ekMhFF6IyyvNutyi9ge";
  const homeId3 = "dCEAo9x4RGpoDIgw7RYb";


  const homeCollectionRef = collection(db, "home");

  useEffect(() => {
    const getHomeImages = async () => {
      const data = await getDocs(homeCollectionRef);
        setHomeImages([
          data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[0],
        ]);
      setHomeImages2([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[1],
      ]);
      setHomeImages3([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[2],
      ]);
    };
    getHomeImages();
  }, []);

  function handleFileHome(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (
        image.type === "image/jpeg" ||
        image.type === "image/png" ||
        image.type === "image/jpg"
      ) {
        setImageAvatarHome(image);
        setAvatarUrlHome(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarHome(null);
        return null;
      }
    }
    setTextButton("Enviar alterações")
  }

  function handleFileHome2(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (
        image.type === "image/jpeg" ||
        image.type === "image/png" ||
        image.type === "image/jpg"
      ) {
        setImageAvatarHome2(image);
        setAvatarUrlHome2(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarHome2(null);
        return null;
      }
    }
    setTextButton2("Enviar alterações")

  }

  function handleFileHome3(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (
        image.type === "image/jpeg" ||
        image.type === "image/png" ||
        image.type === "image/jpg"
      ) {
        setImageAvatarHome3(image);
        setAvatarUrlHome3(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarHome3(null);
        return null;
      }
    }
    setTextButton3("Enviar alterações")

  }


  async function handleSave(e) {
    e.preventDefault();
    setTextButton("Enviando...");
    const home = homeImages[0];
    const homeRef = doc(db, "home", homeId);
  
    await handleUpload();
  
    // Wait for handleUpload() to complete and set the download URL before updating Firestore
    const updatedData = {
      imagem: avatarUrlHomeFirebase || home.imagem,
    };
    await setDoc(homeRef, updatedData)
      .then(() => {
        console.log("foi");
      })
      .catch((e) => {
        console.log("erro:" + e);
      });
    setTextButton("Enviado!");
  }
  
  async function handleUpload() {
    if (avatarUrlHome !== null) {
      const imagesRef = ref(storage, `imagesHome/${homeId}`);
      await uploadBytes(imagesRef, imageAvatarHome).then((snapshot) => {
      });
      const url = await getDownloadURL(ref(storage, `imagesHome/${homeId}`));
      setAvatarUrlHomeFirebase(url);
    } else {
      return null;
    }
  }
  
  async function handleSave2(e) {
    e.preventDefault();
    setTextButton2("Enviando...");
    const home = homeImages2[0];
    const homeRef = doc(db, "home", homeId2);
    await handleUpload2();
    // atualizar apenas os campos que foram alterados
    const updatedData = {
      imagem: avatarUrlHome2Firebase || home.imagem,
    };

    await setDoc(homeRef, updatedData)
      .then(() => {
        console.log("foi");
      })
      .catch((e) => {
        console.log("erro:" + e);
      });
    setTextButton2("Enviado!");
  }

  async function handleUpload2() {
    if (avatarUrlHome2 !== null) {
      const imagesRef = ref(storage, `imagesHome/${homeId2}`);
      await uploadBytes(imagesRef, imageAvatarHome2).then((snapshot) => {
        console.log("Uploaded 2!");
      });
      const url = await getDownloadURL(ref(storage, `imagesHome/${homeId2}`));
      setAvatarUrlHome2Firebase(url);
    } else {
      return null;
    }
  }
  async function handleSave3(e) {
    e.preventDefault();
    setTextButton3("Enviando...");
    const home = homeImages3[0];
    const homeRef = doc(db, "home", homeId3);
    await handleUpload3();
    // atualizar apenas os campos que foram alterados
    const updatedData = {
      imagem: avatarUrlHome3Firebase || home.imagem,
    };

    await setDoc(homeRef, updatedData)
      .then(() => {
        console.log("foi");
      })
      .catch((e) => {
        console.log("erro:" + e);
      });
    setTextButton3("Enviado!");
  }

  async function handleUpload3() {
    if (avatarUrlHome3 !== null) {
      const imagesRef = ref(storage, `imagesHome/${homeId3}`);
      await uploadBytes(imagesRef, imageAvatarHome3).then((snapshot) => {
      });
      const url = await getDownloadURL(ref(storage, `imagesHome/${homeId3}`));
      setAvatarUrlHome3Firebase(url);
    } else {
      return null;
    }
  }


  return (
    <div className="bg-bg-slide text-center text-white py-10">
      <h1 className="text-3xl">Home</h1>
      <p>Alterações para as imagens exibidas</p>
      <div className=" py-10">
        {homeImages.map((imagem) => (
        <form 
        key={imagem.id}
        onSubmit={handleSave}>
        <div
            className="md:flex flex-col gap-4 items-center justify-center "
          >
           <label className="w-[800px] m-auto h-[400px]  z-10 bg-blue-950 rounded flex items-center justify-center cursor-pointer">
            <span className="absolute opacity-10">
              <FaUpload size={30}/>
            </span>
           <input className="hidden" type="file" onChange={(e) => handleFileHome(e)} />
            {imageAvatarHome === null ? (
              <img
                src={imagem.imagem}
                width="250"
                height="250"
                alt="Foto da Home"
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={avatarUrlHome}
                width="250"
                height="250"
                alt="Foto da Home"
              />
            )}  
           </label>
          
            <button className="text-center bg-blue-800 px-14 py-3 rounded-3xl text-white text-sm mt-10 font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
              {textButton}
            </button>
          </div>
        </form>
        ))}
        {homeImages2.map((imagem) => (
         <form 
         key={imagem.id}
         onSubmit={handleSave2}>
         <div
            className="md:flex flex-col gap-4 items-center justify-center "
          >
                      <label className="w-[800px] m-auto h-[400px]  z-10 bg-blue-950 rounded flex items-center justify-center cursor-pointer">
            <span className="absolute opacity-10">
              <FaUpload size={30}/>
            </span>
           <input className="hidden" type="file" onChange={(e) => handleFileHome2(e)} />
            {imageAvatarHome2 === null ? (
              <img
                src={imagem.imagem}
                width="250"
                height="250"
                alt="Foto da Home"
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={avatarUrlHome2}
                width="250"
                height="250"
                alt="Foto da Home"
              />
            )}  
           </label>
            <button className="text-center bg-blue-800 px-14 py-3 rounded-3xl text-white text-sm mt-10 font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
              {textButton2}
            </button>
          </div>
         </form>
        ))}
        {homeImages3.map((imagem) => (
        <form 
        key={imagem.id}
        onSubmit={handleSave3}>
        <div
            className="md:flex flex-col gap-4 items-center justify-center "
          >
            <label className="w-[800px] m-auto h-[400px] z-10 bg-blue-950 rounded flex items-center justify-center cursor-pointer">
            <span className="absolute opacity-10">
              <FaUpload size={30}/>
            </span>
           <input className="hidden" type="file" onChange={(e) => handleFileHome3(e)} />
            {imageAvatarHome3 === null ? (
              <img
                src={imagem.imagem}
                width="250"
                height="250"
                alt="Foto da Home"
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={avatarUrlHome3}
                width="250"
                height="250"
                alt="Foto da Home"
              />
            )}  
           </label>
            <button className="text-center bg-blue-800 px-14 py-3 rounded-3xl text-white text-sm mt-10 font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
              {textButton3}
            </button>
          </div>
        </form>
        ))}
      </div>
    </div>
  );
}
