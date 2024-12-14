import './App.css'
import Header from "./components/common/header/header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "./components/common/footer/Footer.jsx";

function App() {

    return (
        <>
            <Header/>
            <Outlet/>
            <Footer />
        </>
    )
}

export default App
