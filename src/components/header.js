import Style from "./header.module.css"
import Img from "./Tiffany logo.png";
import Foto from "./foto"

function Header(props)
{
    return(

    <section className={Style.header}>
        <div className={Style.divicon}>
        <i class="fa-solid fa-bars"></i>
        </div>
        <div className={Style.divimg}>
        
            <Foto Foto={Img}/>
        </div>
        <div className={Style.divicon}>
            <i class="fa-regular fa-user"></i>
        </div>
    </section>
    )
}
export default Header;