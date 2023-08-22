import Menu from "./components/menu";
import Rodape from "./components/rodape";
import Barra from "./components/barra";
import "./global.css";
import Anel from "./components/anel";
import img from "./components/Captura de tela 2023-08-22 110133.png"
import Header from "./components/header";
import Icon from "./components/icon"


function App(props) {
  return (
    <>
    <Barra></Barra>
    <Header></Header>
    <Menu></Menu>
    <Anel anel={img}></Anel>     
    <Rodape></Rodape>
    <Icon></Icon>
    </>
  );
}

export default App;
