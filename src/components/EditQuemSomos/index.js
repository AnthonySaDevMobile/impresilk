import React from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/services/firebaseConnection";
export default function EditQuemSomos() {
  return (
    <div className="py-10 bg-zinc-200 flex gap-5 flex-col items-center justify-center">
          <h1 className="text-3xl">Quem Somos</h1>
          <p>Alterações para texto exibido na tela</p>
          <textarea style={{resize:"none"}} className='w-9/12 h-[300px] px-2'/>
          <p>Alterações para texto exibido ao abrir "Leia Mais"</p>
          <textarea style={{resize:"none"}} className='w-9/12 h-[300px] px-2'/>
        </div>

  )
}
