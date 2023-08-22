import Style from "./anel.module.css"

function Anel(props)
{
    return(
        <figure className={Style.Anel}>
            <img src={props.anel} alt=""></img>
        </figure>
    )
}
export default Anel;