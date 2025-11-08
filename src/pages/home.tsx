import Navbar from "../utils/navbar";
import footerMsg from "../utils/year";

function Home() {
    return (
        <>
        <title>SanicSquirtle428</title>
        <header>
            <h2 style={{display: "flex" , alignItems: "center", justifyContent: "center"}}>
                <img src="https://i.pinimg.com/736x/1f/fb/08/1ffb088636afec128b21fc4b0b354fa3.jpg"
                style= {{
                    marginRight: "5px" ,
                    width: "45px" ,
                    height: "45px"
                }} />
                SanicSquirtle428
            </h2>
        </header>
        <Navbar/>
        <div>
            <h3>About Me:</h3>
            <img className="img-diego wrap-left" src="/assets/diego1.jpg" />
            <p>
                Hello, my name is Diego, I am a current Computer Science student at the <a href="https://cs.olemiss.edu">University of Mississippi</a> with 
                an emphasis in Computer Security and minoring in Electrical Engineering. I am currently serving in the US Army as an IT Specalist, which is where
                I got my Security+ and introduced to networking. My current interests are cybersecurity, networking, gaming and full stack development. After
                graduation I plan to continue serving in the military and going to grad school in Texas for Computer Science or Computer Engineering. Apart from
                coding, I love to build and research computer parts, tinker with my Linux setup, and play Overwatch (if that wasn't obvious).
            </p>
        </div>
        <br style={{clear: "both"}}/>
        <div>
            <h3>Projects</h3>
            <h4>Deep Murder / GPT Murder</h4>
            <p>
                Deep Murder was my group's hackathon project during the University of Mississippi's Hack Beta 2025. The main project was to create an
                interactive game that used the CS department's local Deepseek LLM. Our group used Deepseek to generate NPC dialogue to give the player
                clues or to lead them in a different direction. GPT Murder is a fork of Deep Murder that will use a different LLM to do the same thing Deepseek (attempted) to do
                during our Hackathon. <br /> <a href="https://github.com/Hack-Beta/deep-murder">Deep Murder: Source Code</a> | 
                <a href="https://github.com/sanicsquirtle420/gpt-murder">GPT Murder: Source Code</a>
            </p>
            <img src="/assets/gptmurder_1.png" alt="Screenshot of GPT Murder" className="screenshot" />
            <h4>RacCryption</h4>
            <p>
                RacCryption is a text encryption and decrytion tool that will encrypt/decrypt text files for you. This is based off of a project I did for my Foundations of
                Computer Security class (Csci 325) where I had to write the code to encrypt and decrypt with different ciphers. Currently the only encryption algorithm used is a
                keyword cipher, but I plan to add more soon.
                <br /> <a href="https://github.com/sanicsquirtle420/raccryption">RacCryption: Source Code</a>
            </p>
            <img src="/assets/raccryption_1.png" alt="Encrypting and Decrypting a text file" className="screenshot"/>
            <h4>Racchat</h4>
            <p>
                Racchat is a project for me to learn about ports by making a message server and client. Currently the server can listen on a port waiting
                for a response from a client. The client is able to successfully send one message before the program closes. Racchat is still under development.
                <br/> <a href="https://github.com/sanicsquirtle420/racchat">Racchat: Source Code</a>
            </p>
            <img src="/assets/racchat_1.png" alt="Screenshot of racchat server and client running" className="screenshot"/>
            <h4>Raccoon Bot</h4>
            <p>
                Raccoon Bot is a simple Discord bot that I wrote to use with my friends. As of right now it can reply with a 
                random Overwatch quote, random cringe gif (both from a json file), and a simple hello
                command. <br/> <a href="https://github.com/sanicsquirtle420/personal-experiments/tree/main/python/RaccoonBot">Raccoon Bot: Source Code</a>.
            </p>
            <img src="/assets/raccoonbot_4.png" alt="Screenshot of Raccoon Bot responses"
                className="screenshot"/>
        </div>
        
        <h3>Programming</h3>
            <p>
                These are some of the programing languages that I know or in the process of learning. All of my code is uploaded
		        to my GitHub account if you would like to see it.
            </p>
        <div className="prog">
            <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="Java logo" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1067px-ISO_C%2B%2B_Logo.svg.png" alt="C++ logo" />
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945099.png?f=webp&w=256" alt="Python logo" />
            <img src="https://images.icon-icons.com/2415/PNG/512/typescript_original_logo_icon_146317.png" alt="TypeScript logo" /> 
        </div>
        <div className="shelby">
        <img src="/assets/shelby2.png" className = "wrap-right" alt="Shelby yawning"/>
        <h3>Shelby</h3>
        
            <p>
                Sense you made it to the bottom here is a picture of Shelby! Isn't he just the best. You should also follow him  
                on <a href="https://instagram.com/shelby.the.doggo">Instagram</a> because we love Shelby &lt;3.
            </p>
        </div> <br style={{clear: "both"}}/>
        <h3>Socials</h3>
        <div className="social">
            <a href="https://github.com/SanicSquirtle420">
                <img src="/assets/github64x64.png"
                    alt="GitHub logo"/>
            </a>
            <a href="https://youtube.com/SanicSquirtle420">
                <img src="/assets/youtube64x64.png"
                    alt="YouTube Logo" />
            </a>
            <a href="https://x.com/SanicSquirtle42">
                <img src="/assets/x-twitter64x64.png" 
                    alt ="X / Twitter Logo"/>
            </a>
            <a href="https://instagram.com/sanicsquirtle428">
                <img src="/assets/instagram64x64.png" 
                    alt ="Instagram Logo"/>
            </a>
        </div>
        <footer>
            {footerMsg()}
        </footer>
        </>
    ) ;
}

export default Home ;