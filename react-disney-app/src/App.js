import { Outlet, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Nav from "./components/Nav";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import SearchPage from "./pages/SearchPage";

const Layout = () => {
    return (
        <div>
            <Nav />

            <Outlet />
        </div>
    )
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<LoginPage />} />
                <Route path="main" element={<MainPage />} />
                <Route path=":movieId" element={<DetailPage />} />
                <Route path="search" element={<SearchPage />} />
            </Route>
        </Routes>
    );
}


export default App;
