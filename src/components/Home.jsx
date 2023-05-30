import React from 'react'
import vg from "../asset/2.webp";
import {AiFillFacebook,AiFillAmazonCircle,AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
    return (
        <>

            <div className="home" id='Home'>
                <main>
                    <h1>MasyStar</h1>
                    <p>Solution to all Problems</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="" />
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, molestiae?
                    </p>
                </div>
            </div>


            <div className="home3" id='About'>
                <div>
                    <h1>Who are you?</h1>
                    <p>

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, officiis.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis magni minus facere repellat odio. Nam expedita sequi vitae.                    
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo possimus minima totam?
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolorem optio voluptas quam. Ipsa, dolores officia maiores similique cum aspernatur.
                        </p>
                </div>
            </div>

            <div className="home4">

                <div>
                    <h1>Brands</h1>
                    
                    <article>
                        <a target="_blank" rel="noreferrer" href='https://www.facebook.com/pratik.saravaiya' style={{animationDelay:"0.2s"}}>
                           <AiFillFacebook/>
                            <p>Google</p>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/pratiksaravaiya/?igshid=YmMyMTA2M2Y%3D" style={{animationDelay:"0.5s"}}>                          

                                <AiFillInstagram />
                            <p>Instagram</p>
                        </a>
                        <a target="_blank" rel="noreferrer" href='https://www.youtube.com/@spcreation4300' style={{animationDelay:"1s"}}>
                            <AiFillYoutube />
                            <p>You tube</p>
                        </a>
                        <a  rel="noreferrer" href='https://www.amazon.in/?&ext_vrnc=hi&tag=googhydrabk1-21&ref=pd_sl_3c01r1321r_e&adgrpid=60612964962&hvpone=&hvptwo=&hvadid=486380734071&hvpos=&hvnetw=g&hvrand=401334466810596702&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062189&hvtargid=kwd-32679660&hydadcr=14454_2154375' target="_blank" style={{animationDelay:"0.7s"}}>
                            
                            <AiFillAmazonCircle />
                            <p>Amazone</p>
                        </a>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home
