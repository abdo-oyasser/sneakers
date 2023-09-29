import { Link } from "react-router-dom"
function Navbar() {
    let logo = `./images/logo.svg`
    let cart = `./images/icon-cart.svg`
    let avatar = `./images/image-avatar.png`
    document.querySelectorAll(".nav-link").forEach((e) => {
        e.onclick = (ev) => {
            document.querySelectorAll(".nav-link").forEach((ele) => {
                ele.classList.remove("active-nav")
            })
            ev.target.classList.add("active-nav")
        }
    })
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand"><img src={require(`${logo}`)} alt="logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page">Collections</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link">Men</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link">Women</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link">Contact</Link>
                            </li>
                        </ul>

                    </div>
                    <ul className="nav-right">
                        <li><Link to={"/"}><img src={require(`${cart}`)} alt="cart" /></Link></li>
                        <li><Link> <img src={require(`${avatar}`)} alt="avatar" /></Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Navbar;