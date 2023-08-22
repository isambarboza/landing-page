import Style from "./barra.module.css";
function Barra(props){
    return(
        <>
        <figure className={Style.Barra}>
            <img src={props.Barra} alt=""/>
        </figure>
        </>
    )
}
export default Barra;