import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import reportWebVitals from "./reportWebVitals";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import ContactsComponent from "./Components/Contacts";
import ChartsMapComponent from "./Components/ChartsMap";
const queryClient = new QueryClient();

const Layout = () => (
  <div className="flex flex-row">
    <Sidebar />
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ContactsComponent />,
      },
      {
        path: "charts",
        element: <ChartsMapComponent />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
