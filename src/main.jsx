import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main.jsx";
import Phones from "./components/Phones.jsx";
import Phone from "./components/Phone.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/phones",
				element: <Phones />,
				loader: () => fetch("http://localhost:5000/phones/"),
			},
			{
				path: "/phone/:id",
				element: <Phone></Phone>,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/phones/${params.id}`),
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
