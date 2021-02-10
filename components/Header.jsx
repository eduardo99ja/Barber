const MyHeader = () => {
  return (
    <>
      <div className="top-bar d-none d-md-block">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="top-bar-left">
                            <div className="text">
                                <h2>9:00 - 9:00</h2>
                                <p>Horarios Lun-Dom</p>
                            </div>
                            <div className="text">
                                <h2>+123 456 7890</h2>
                                <p>Llámanos para reservar</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="top-bar-right">
                            <div className="social">
                                <a href=""><i className="fab fa-twitter"></i></a>
                                <a href=""><i className="fab fa-facebook-f"></i></a>
                                <a href=""><i className="fab fa-linkedin-in"></i></a>
                                <a href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default MyHeader
