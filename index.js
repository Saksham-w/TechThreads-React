import { createRoot } from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PostPage from './pages/PostPage'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/:postId',
        element: <PostPage />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
