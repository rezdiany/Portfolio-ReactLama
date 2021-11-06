import "./about.css"
import Award from "../../img/award.png"
const About = () => {
    return (
        <div>
            <div className="a">
                <div className="a-left">
                    <div className="a-card bg"></div>
                    <div className="a-card">
                        <img src="https://images.pexels.com/photos/5380590/pexels-photo-5380590.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-5380590.jpg&fm=jpg" alt="" className="a-img" />
                    </div>
                </div>
                <div className="a-right">
                    <h1 className="a-title">About Me</h1>
                    <p className="a-sub">it is a long established fact that a reader will be distracted by the readable content.</p>
                    <p className="a-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel deleniti fugit impedit rem, velit natus saepe dolor, laborum, nostrum alias asperiores. Nesciunt tenetur neque esse numquam non officiis cum possimus?</p>
                    <div className="a-award">
                        <img src={Award} alt="" className="a-award-img" />
                        <div className="a-award-texts">
                            <h4 className="a-award-title">International Design Awards 2021</h4>
                            <p className="a-award-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, eos fuga. Eligendi numquam fuga quam fugit debitis, consequuntur repellat eius autem hic iure quis voluptatem quia. Minus assumenda harum ab!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
