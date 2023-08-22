import Style from "./menu.module.css";
import Img from "./Tiffany logo.png";
import Foto from './foto'

function Menu (props) {
    return(
        <section className={Style.Menu}>
            

            <nav className={Style.Submenu}>  
                <div>
                    <li>
                        <a href="#"> Joias</a>
                    </li>
                    <li>
                        <a href="#">Amor e noivado </a>
                    </li>
                    <li>
                        <a href="#">Relógios sofisticados </a>
                    </li>
                    <li>
                        <a href="#">Casa e Acessórios  </a>
                    </li>
                    <li>
                        <a href="#">Fragrância</a>
                    </li>
                    <li>
                        <a href="#">Masculino</a>
                    </li>
                    <li>
                        <a href="#">Presentes</a>
                    </li>
                
                </div>           
            </nav>
           
            {props.children}
            
        </section>
    )

}
export default Menu;