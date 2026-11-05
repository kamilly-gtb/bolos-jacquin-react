import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/home";
import ListaProdutos from "./pages/ListaProdutos/ListaProdutos";
import DetProduto from "./pages/detProduto/DetProduto";
import Login from "./pages/detProduto/login/login";



export default function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produtos" element={<ListaProdutos />}/>
                <Route path="/detProduto" element={<DetProduto />}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" 
                element=
                
                {<img className="container-notfound" src="https://www.scopycode.com/includes/images/blog/404_error_page_not_found.gif" alt="imagem de não encontrada"/>}/>
            </Routes>
            
            <Footer />
        </>
    )
}