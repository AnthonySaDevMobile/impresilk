import React,{ useState } from 'react'
import { auth } from '@/services/firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [text,setText] = useState("Entrar")
  
  const router = useRouter()
  
  const handleLogin = async (e) => {
    e.preventDefault()
    setText("Entrando...");
    try {
      await signInWithEmailAndPassword(auth, email, password)
      // Login bem-sucedido, redirecionar para a página /admin
      router.push('/admin') // Usar a função router.push para redirecionar
    } catch (error) {
      setText("Dados incorretos!");
      console.log(error)
      // Tratar erro de login
    }
  }
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h2 className='text-lg font-extrabold'>Login para Painel de Edições</h2>
      <div className='mt-10'>
      <form onSubmit={handleLogin} className='flex flex-col gap-5'>
        <input
          type="email"
          placeholder="Email"
          className='p-3 rounded'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          className='p-3 rounded'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className='bg-blue-600 text-white rounded p-4 font-bold'>{text}</button>
      </form>
      </div>
    </div>
  )
}

