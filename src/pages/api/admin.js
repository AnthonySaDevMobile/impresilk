import authMiddleware from './_middleware'

export default function adminHandler(req, res) {
  // Aqui você pode implementar a lógica da rota /admin

  // ...

  res.status(200).json({ message: 'Protected route' })
}

export const config = {
  api: {
    bodyParser: false,
  },
}

export const middleware = [authMiddleware]
