import React, { useState, useEffect } from 'react'
import {
  collection,
  getDocs,
  addDoc,
  query,
  doc,
  deleteDoc
} from "firebase/firestore";
import { db } from "@/services/firebaseConnection";
export default function EditCategorias() {

  const categoriasRef = collection(db, "categorias");
  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState('');
  const [textButton, setTextButton] = useState("Enviar alterações");

  useEffect(() => {
    const getCategorias = async () => {
      const data = await getDocs(categoriasRef);
      setCategorias(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getCategorias();
  }, []);


  async function sendCategory(e) {
    setTextButton("Enviando...");

    const categoriasData = {
      categoria: categoria
    };

    await addDoc(collection(db, "categorias"), categoriasData);
    setTextButton("Enviado!");

    const categoriasQuery = query(collection(db, "categorias"));
    const categoriaSnapshot = await getDocs(categoriasQuery);
    const updateCategorias = categoriaSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setCategorias(updateCategorias);

  }
  async function deleteItem(id) {

    try {
      const itemRef = doc(db, "categorias", id);
      await deleteDoc(itemRef);

      setCategorias((prevCategorias) =>
        prevCategorias.filter((item) => item.id !== id)
      );
    } catch (error) {
      console.error("Erro ao deletar o item:", error);
    }
  }

  return (
    <div className="py-10 bg-zinc-200 flex gap-5 flex-col items-center justify-center">
      <h1 className="text-3xl">Adicionar Categorias</h1>
      <p>Sempre coloque a primeira letra maiúscula!</p>
      <input type='text' style={{ resize: "none" }} className='px-2' onChange={(e) => setCategoria(e.target.value)} />
      <button onClick={() => sendCategory()} className="text-center bg-blue-800 px-14 py-3 rounded-3xl text-white text-sm mt-10  font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
        {textButton}
      </button>
      <p className='font-bold'>Deletar Categorias:</p>
      {categorias.map((item) => (
        <div key={item.id}>
          <div className='flex items-center justify-center gap-2'>
            <p>{item.categoria}</p>
            <span
              onClick={() => deleteItem(item.id)}
            >
              <p className="cursor-pointer text-[#f62a28] font-extrabold">X</p>
            </span>
          </div>
        </div>
      ))}
      <p>Após adicionar dê um F5 na página para alterar abaixo.</p>
      <p>(é possível adicionar e remover ilimitadamente antes de dar o F5)</p>
    </div>

  )
}
