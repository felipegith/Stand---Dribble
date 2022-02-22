import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

import './styles.css'

import Logo from '../../assets/logo.png'
import Linkedin from '../../assets/linkedin.png'
import Instagram from '../../assets/instagram.png'
import HomeImage from '../../assets/fotohome.jpg'
import Gmail from '../../assets/gmail.png'
import Twitter from '../../assets/twitter.png'
import Female from '../../assets/female.png'
import Femalee from '../../assets/femalee.png'
import Man from '../../assets/man.png'
import Mann from '../../assets/mann.png'
import Google from '../../assets/google.jpg'
import Microsoft from '../../assets/microsoft.png'
import Pepsi from '../../assets/pepsi.jpg'
import Visa from '../../assets/visa.svg'
import O from '../../assets/O.PNG'
import Mobile from '../../assets/mobile.png'
import Computer from '../../assets/computer.png'
import Note from '../../assets/note.png'

export default function Home(){
    return(
        <div id="container">
            <header className='header_container'>

                <div className="header_logo">
                    <img src={Logo} />
                </div>

                <div className="header_options">
                    <span className="text_header_options">Home</span>
                    <span className="text_header_options">Portfolio</span>
                    <span className="text_header_options">Service</span>
                    <span className="text_header_options">About</span>
                </div>
                    <button className="btn_contact">Contact Us</button>
            </header>

            <div className="container_home">
                <div className="container_home_left">
                    <h5 className="text_title_home">A trusted Digital Agency</h5>
                    <div className="text_home_row">
                        <h1>Make</h1>
                        <h1 className="text_prc">Digital Product</h1>
                    </div>
                    <h1>With Our Agency</h1>
                    <br></br>
                    <p>We make products more quality and elegant</p>
                    <p>with a structured process</p>

                    <div className="container_button_home">
                        <button className="btn_home_color">Let's Talk</button>
                        <button className="btn_home_not_color">Explore More</button>
                    </div>

                    <div className="container_o">
                        <img src={O} className="width_O"/>
                    </div>
                    <div className="container_linkedin">
                        <img src={Linkedin} className="width_linkedin"/>
                    </div>

                    <div className="container_instagram">
                        <img src={Instagram} className="width_linkedin"/>
                    </div>
                </div>
                <div className="container_rigth">
                    <img src={HomeImage} className="width_rigth"/>
                </div>
                <div className="container_gmail">
                    <img src={Gmail} className="width_linkedin"/>
                </div>

                <div className="container_twitter">
                    <img src={Twitter} className="width_linkedin"/>
                </div>

                <div className="container_box_rigth">
                    <div>
                        <strong>Our Expert Team</strong>
                    </div>
                    <div className="container_circle_row">
                    <div className="container_circle_blue">
                        <img src={Female} className="width_circle_image"/>
                    </div>

                    <div className="container_circle_green">
                    <img src={Mann} className="width_circle_image" />
                    </div>

                    <div className="container_circle_yellow" >
                       <img src={Femalee} className="width_circle_image" />
                    </div>
                    <div className="container_circle_plus" >
                       <strong>2+</strong>
                    </div>
                    </div>
                </div>
                 
            </div>
            <div className='container_mark'>
                <img src={Google} className="width_mark"/>
                <img src={Microsoft} className="width_mark"/>
                <img src={Visa} className="width_mark"/>
                <img src={Pepsi} className="width_mark"/>
            </div>

            <div className="container_services">
                <h3 className="text_service">Our Service</h3>
                <div className="container_services_row">
                    <h1>Digital</h1>
                    <h1 className="text_service_product">product</h1>
                    <h1>that we offer</h1>
                </div>
            </div>

            <div className="container_card">
                <div className="container_card_row">
                    <div className="container_card_circle_blue">
                        <img src={Mobile} className="width_card_circle"/>
                    </div>
                    <strong>App Development</strong>
                    <br></br>
                    <p className="text_contet">The process of creating a computer program or a set of programs</p>
                    <br></br>
                    <div className="container_service_more">
                        <p className="text_read">Read More</p>
                        <BsArrowRight size={30} color= '#455dce'/>
                    </div>
                </div>

                <div className="container_card_row">
                    <div className="container_card_circle_green">
                        <img src={Computer} className="width_card_circle"/>
                    </div>
                    <strong>App Development</strong>
                    <br></br>
                    <p className="text_contet">The process of creating a computer program or a set of programs</p>
                    <br></br>
                    <div className="container_service_more">
                        <p className="text_read">Read More</p>
                        <BsArrowRight size={30} color= '#455dce'/>
                    </div>
                </div>

                <div className="container_card_row">
                    <div className="container_card_circle_yellow">
                        <img src={Note} className="width_card_circle"/>
                    </div>
                    <strong>App Development</strong>
                    <br></br>
                    <p className="text_contet">The process of creating a computer program or a set of programs</p>
                    <br></br>
                    <div className="container_service_more">
                        <p className="text_read">Read More</p>
                        <BsArrowRight size={30} color= '#455dce'/>
                    </div>
                </div>
            </div>  
        </div>
    )
}