import "./intro.css"
const Intro = () => {
    return (
        <div className = "i">

            <div className=" i-left">
                <div className = "i-left-wrapper">
                    <h2 className= "i-intro">Hello, My name is </h2>
                    <h1 className= "i-name">Eriq Hampton</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                          <div className="i-title-item">Web Developer</div>
                          <div className="i-title-item">Software Developer</div>
                          <div className="i-title-item">Gaming Enthusiast</div>
                          <div className="i-title-item">Thinker</div>
                          <div className="i-title-item">Enthusiastic Creator</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" i-right"></div>
        </div>
    )
}

export default Intro