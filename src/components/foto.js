import Style from "./foto.module.css";
function Foto (props){
    return(
        <>
        <figure className={Style.Foto}>
            <img src={props.Foto} alt=""/>
        </figure>
        </>
    )
}
export default Foto;