import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Feed from "./pages/Feed/Feed";
import dummyData from "./dummyData";

const router = createBrowserRouter([
    {
        path: "*",
        element: <Feed data={dummyData} />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
