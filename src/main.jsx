import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import App from './App'
import Play from './routes/Play'
import Welcome from './routes/Welcome'
import Quiz from "./routes/Quiz"

const router = createBrowserRouter([
  {
    path: "/quiz-react",
    element: <App />,
    children: [
      {
        path: "/quiz-react",
        element: <Welcome />
      },
      {
        path: "quiz",
        element: <Quiz />
      },
      {
        path: "play",
        element: <Play />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
