import Style from "./icon.module.css";
function Icon (props) {
    return(
        <section className={Style.icon}>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-regular fa-envelope"></i>
        </section>
    )

}
export default Icon;