import { db, storage } from "@/services/firebaseConnection";
import {
  addDoc,
  collection,
  getDocs,
  query
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from "react";
import { FaStar, FaTrash, FaUpload } from "react-icons/fa";

export default function EditCases() {
  const casesCollectionRef = collection(db, "cases");

  const [avatarUrlCases, setAvatarUrlCases] = useState("");
  const [imageAvatarCases, setImageAvatarCases] = useState(null);
  const [avatarUrlBook, setAvatarUrlBook] = useState("");
  const [imageAvatarBook, setImageAvatarBook] = useState(null);
  const [avatarUrlBook2, setAvatarUrlBook2] = useState("");
  const [imageAvatarBook2, setImageAvatarBook2] = useState(null);
  const [avatarUrlBook3, setAvatarUrlBook3] = useState("");
  const [imageAvatarBook3, setImageAvatarBook3] = useState(null);
  const [nome, setNome] = useState("");
  const [nome2, setNome2] = useState("");
  const [nota, setNota] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tempo, setTempo] = useState("");
  const [cases, setCases] = useState([]);
  const [textButton, setTextButton] = useState("Enviar alterações");

  useEffect(() => {
    const getDepoiments = async () => {
      const data = await getDocs(casesCollectionRef);
      const casesData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      setCases(casesData);
    };
    getDepoiments();

  }, []);

  async function sendCase(e) {
    e.preventDefault();
    setTextButton("Enviando...");
    const imageUrl = await handleUpload();
    let imageUrl2 = null;
    let imageUrl3 = null;
    let imageUrl4 = null;

    if(imageAvatarBook !=null && avatarUrlBook !='null'){
       imageUrl2 = await handleUpload2();
    }
    if(imageAvatarBook !=null && avatarUrlBook !='null'){
       imageUrl3 = await handleUpload3();
    }
    if(imageAvatarBook !=null && avatarUrlBook !='null'){
       imageUrl4 = await handleUpload4();

    }
   
    const caseData = {
      nome: nome,
      segundoNome: nome2,
      nota: nota,
      descricao: descricao,
      tempo: tempo,
      imagem: imageUrl,
      book: imageUrl2||null||'',
      book2: imageUrl3||null||'',
      book3: imageUrl4||null||'',
    };

    await addDoc(collection(db, "cases"), caseData);
    setTextButton("Enviado!");

    const casesQuery = query(collection(db, "cases"));
    const casesSnapshot = await getDocs(casesQuery);
    const updatedCases = casesSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setCases(updatedCases);
    setNome("");
    setNome2("");
    setDescricao("");
    setTempo("");
    setNota("");
    setImageAvatarCases(null);
    setAvatarUrlCases("");
  }

  async function handleUpload() {
    if (avatarUrlCases !== null ) {
      const imagesRef = ref(storage, `imagesCases/${imageAvatarCases.name}`);
      const uploadTask = uploadBytesResumable(imagesRef, imageAvatarCases);

      await new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => { },
          (error) => {
            reject(error);
          },
          () => {
            resolve();
          }
        );
      });

      const url = await getDownloadURL(imagesRef);
      return url;
    }
    return null;

  }
  async function handleUpload2() {
    if (avatarUrlBook !== null && imageAvatarBook!=null) {
      const imagesRef = ref(storage, `imagesCases/${imageAvatarBook.name}`);
      const uploadTask = uploadBytesResumable(imagesRef, imageAvatarBook);

      await new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => { },
          (error) => {
            reject(error);
          },
          () => {
            resolve();
          }
        );
      });

      const url = await getDownloadURL(imagesRef);
      return url;
    }
    return null;

  }
  async function handleUpload3() {
    if (avatarUrlBook2 !== null && imageAvatarBook2!=null) {
      const imagesRef = ref(storage, `imagesCases/${imageAvatarBook2.name}`);
      const uploadTask = uploadBytesResumable(imagesRef, imageAvatarBook2);

      await new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => { },
          (error) => {
            reject(error);
          },
          () => {
            resolve();
          }
        );
      });

      const url = await getDownloadURL(imagesRef);
      return url;
    }
    return null;

  }
  async function handleUpload4() {
    if (avatarUrlBook3 !== null && imageAvatarBook3!=null) {
      const imagesRef = ref(storage, `imagesCases/${imageAvatarBook3.name}`);
      const uploadTask = uploadBytesResumable(imagesRef, imageAvatarBook3);

      await new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => { },
          (error) => {
            reject(error);
          },
          () => {
            resolve();
          }
        );
      });

      const url = await getDownloadURL(imagesRef);
      return url;
    }
    return null;

  }

  

  function handleFileCases(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      setTextButton("Enviar alterações");
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
  function handleFileBook(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      setTextButton("Enviar alterações");
      if (image.type === "image/jpeg" || image.type === "image/png") {
        setImageAvatarBook(image);
        setAvatarUrlBook(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarBook(null);
        return null;
      }
    }
  }
  function handleFileBook2(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      setTextButton("Enviar alterações");
      if (image.type === "image/jpeg" || image.type === "image/png") {
        setImageAvatarBook2(image);
        setAvatarUrlBook2(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarBook2(null);
        return null;
      }
    }
  }
  function handleFileBook3(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      setTextButton("Enviar alterações");
      if (image.type === "image/jpeg" || image.type === "image/png") {
        setImageAvatarBook3(image);
        setAvatarUrlBook3(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarBook(null);
        return null;
      }
    }
  }


  return (
    <div className="py-5 flex flex-col items-center justify-center text-white bg-bg-slide px-2">
      <h1 className="text-3xl">Cases</h1>
      <p>Alterações para o scroll de items</p>
      <form
        className="mt-5 grid grid-rows-2 md:gap-2 text-black"
        onSubmit={sendCase}
      >
        <div>
          <p className="text-white font-bold text-center mb-2">Foto Principal</p>
          <label className="w-9/12 m-auto h-[200px] z-10 bg-blue-950 rounded flex items-center justify-center cursor-pointer">
            <span className="absolute opacity-10">
              <FaUpload size={30} />
            </span>
            <input
              required
              className="hidden"
              type="file"
              onChange={handleFileCases}
            />

            <img
              src={avatarUrlCases}
              className="w-full h-full object-cover"
              alt="Foto do Case"
            />
          </label>
          <p className="text-white font-bold text-center my-5">Fotos para o book (não são obrigatórias)</p>
          <div className="grid grid-cols-3">
            <label className="w-9/12 m-auto h-[150px]  z-10 bg-blue-950 rounded flex items-center justify-center cursor-pointer">
              <span className="absolute opacity-10">
                <FaUpload size={30} />
              </span>
              <input
                
                className="hidden"
                type="file"
                onChange={handleFileBook}
              />

              <img
                src={avatarUrlBook}
                className="w-full h-full object-cover"
                alt="Foto do Case - Book"
              />
            </label>
            <label className="w-9/12 m-auto h-[150px]  z-10 bg-blue-950 rounded flex items-center justify-center cursor-pointer">
              <span className="absolute opacity-10">
                <FaUpload size={30} />
              </span>
              <input
                
                className="hidden"
                type="file"
                onChange={handleFileBook2}
              />

              <img
                src={avatarUrlBook2}
                className="w-full h-full object-cover"
                alt="Foto do Case - Book"
              />
            </label>
            <label className="w-9/12 m-auto h-[150px]  z-10 bg-blue-950 rounded flex items-center justify-center cursor-pointer">
              <span className="absolute opacity-10">
                <FaUpload size={30} />
              </span>
              <input
                
                className="hidden"
                type="file"
                onChange={handleFileBook3}
              />

              <img
                src={avatarUrlBook3}
                className="w-full h-full object-cover"
                alt="Foto do Case - Book"
              />
            </label>
          </div>
        </div>
        <div className="flex mt-5 flex-col h-fit gap-4 px-2 rounded">
          <div className="flex gap-1">
            <input
              type="number"
              maxLength={1}
              placeholder="Nota"
              required
              onChange={(e) => setNota(e.target.value)}
              className="p-2 "
            ></input>
            <input
              type="text"
              required
              placeholder="Nome"
              onChange={(e) => setNome(e.target.value)}
              className="p-2 w-1/2"
            ></input>
            <input
              type="text"
              required
              placeholder="Segundo nome"
              onChange={(e) => setNome2(e.target.value)}
              className="p-2 w-1/2"
            ></input>
          </div>
          <input
            type="text"
            required
            placeholder="Descrição"
            onChange={(e) => setDescricao(e.target.value)}
            className="p-2"
          ></input>
          <input
            type="text"
            required
            placeholder="Tempo de entrega"
            onChange={(e) => setTempo(e.target.value)}
            className="p-2"
          ></input>
        <button className="text-center bg-blue-800 px-14 py-3 rounded-3xl text-white text-sm mt-10  font-bold sm:drop-shadow-3xl drop-shadow-md ">
          {textButton}
        </button>
        </div>
      </form>
      <div className="text-center">
        <p>Cases já existentes</p>

        {cases.map((item) => (
          <div
            key={item.id}
            className="mt-5 grid grid-cols-3 gap-4 bg-blue-950 p-4 rounded"
          >
            <div
              className="flex flex-col items-center justify-center gap-2"
              onClick={() => deleteItem(item.id)}
            >
              <span className="flex flex-col items-center gap-2">
                <FaTrash color="red" />
                <p>Deletar</p>
              </span>
            </div>
            <div className="w-[100px] h-[100px] bg-zinc-100">

              <img
                src={item.imagem}
                width="250"
                height="250"
                alt="Foto da Home"
                className="w-full h-full object-cover"
              />


            </div>
            <div className="flex flex-col px-2">
              <div className="flex items-center gap-1 text-yellow-500">
                <p>{item.nota}</p>
                <FaStar color="yellow" />
                <strong className="text-white">{item.nome} </strong>
                <p className="text-white">{item.segundoNome}</p>
              </div>

              <div>
                <p className="text-xs text-zinc-500">{item.descricao}</p>
                <p className="text-sm text-yellow-400">
                  Entregue em {item.tempo}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
