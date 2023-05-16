import { getServerSession } from "next-auth"

async function authMiddleware(req, res, next) {
  const session = await getServerSession({ req })

  if (!session || !session.user) {
    res.status(401).json({ error: 'Unauthorized' })
  } else {
    // Usuário autenticado, continue para a próxima rota
    next()
  }
}

export default authMiddleware
