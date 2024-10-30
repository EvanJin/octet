import BaseLayout from "@/layout/base.layout"
import { createElement, lazy, Suspense } from "react"
import { createBrowserRouter, RouteObject } from "react-router-dom"

export type Route = RouteObject & {
  name?: string
  icon?: string
  children?: Route[]
  hideInMenu?: boolean
}

const routes: Route[] = [
  {
    path: "/",
    name: "Dashboard",
    icon: "House",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        {createElement(lazy(() => import("@/pages/Dashboard")))}
      </Suspense>
    ),
  },
  {
    path: "/playground",
    name: "Playground",
    icon: "SquareTerminal",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        {createElement(lazy(() => import("@/pages/Playground")))}
      </Suspense>
    ),
  },
  {
    path: "/models",
    name: "Models",
    icon: "Package",
    children: [
      {
        path: "/models/genesis",
        name: "Genesis",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            {createElement(lazy(() => import("@/pages/Models/Genesis")))}
          </Suspense>
        ),
      },
      {
        path: "/models/explorer",
        name: "Explorer",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            {createElement(lazy(() => import("@/pages/Models/Explorer")))}
          </Suspense>
        ),
      },
    ],
  },
]

export default createBrowserRouter([
  {
    path: "/signin",
    name: "Signin",
    hideInMenu: true,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        {createElement(lazy(() => import("@/pages/Signin")))}
      </Suspense>
    ),
  },
  {
    element: <BaseLayout />,
    children: routes,
  },
] as Route[])
