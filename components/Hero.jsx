const Hero = () => {
    return ( 
        <>
        <div className="hero">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="hero-text">
                            <h1>HTML5 Template for Salon Website</h1>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasell nec pretum mi. Curabi ornare velit non. Aliqua metus tortor auctor quis sem.
                            </p>
                            <a className="btn" href="https://htmlcodex.com/barber-shop-template">Download Now</a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 d-none d-md-block">
                        <div className="hero-image">
                            <img src="img/hero.png" alt="Hero Image"/>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                    <span></span>
                </button>
            </div>
        </div>
        </>
     );
}
 
export default Hero;