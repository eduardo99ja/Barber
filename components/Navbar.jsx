const Navbar = () => {
    return ( 
        <>
        <div className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <a href="index.html" className="navbar-brand">Barber</a>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto">
                        <a href="" className="nav-item nav-link active">Home</a>
                        <a href="" className="nav-item nav-link">Nosotros</a>
                        <a href="" className="nav-item nav-link">Servicios</a>
                        <a href="" className="nav-item nav-link">Precios</a>
                        <a href="" className="nav-item nav-link">Encuéntranos</a>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Navbar;