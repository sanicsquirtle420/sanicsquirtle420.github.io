import Navbar from "../utils/navbar";
import footerMsg from "../utils/year";

function Home() {
    return (
        <>
        <title>SanicSquirtle428</title>
        <header>
            <h1 className="title_header">
                <img src="https://i.pinimg.com/736x/f7/75/75/f775757de363727ccc12ecdcdf851c40.jpg"
			        alt="Rio Futaba from Rascal Does Not Dream of"/>
                SanicSquirtle428
            </h1>
        </header>
        <Navbar/>
        <div>
            <h2>Diego / SanicSquirtle428</h2>
            <img className="img-diego wrap-left" src="/assets/diego1.jpg" />
            <p>
                Location: Central Mississippi / <a href="https://olemiss.edu">University of Mississippi</a><br/>
                Major: Computer Science | Minor: Electrical Engineering | Emphasis: Computer Security <br/>
                Currently serving in the US Army Reserves as an IT Specalist, and I am Security+ certified <br/>
                Interests: Cybersecurity, networking, and full stack development<br/><br/>
                I plan to continue serving in the military and going to grad school in Texas after graduating from
                Ole Miss in May 2027.
            </p>
        </div>
        <br style={{clear: "both"}}/>
        <div>
            <h2>Projects</h2>
            <h3>Deep Murder / GPT Murder</h3>
            <p>
                Deep Murder was my group's hackathon project during the University of Mississippi's Hack Beta 2025. The main project was to create an
                interactive game that used the CS department's local Deepseek LLM. Our group used Deepseek to generate NPC dialogue to give the player
                clues or to lead them in a different direction. GPT Murder is a fork of Deep Murder that will use a different LLM to do the same thing Deepseek (attempted) to do
                during our Hackathon. <br /> <a href="https://github.com/Hack-Beta/deep-murder">Deep Murder: Source Code</a> | <a href="https://github.com/sanicsquirtle420/gpt-murder">GPT Murder: Source Code</a>
            </p>
            <img src="/assets/gptmurder_1.png" alt="Screenshot of GPT Murder" className="screenshot" />
            <h3>RacCryption</h3>
            <p>
                RacCryption is a text encryption and decrytion tool that will encrypt/decrypt text files for you. This is based off of a project I did for my Foundations of
                Computer Security class (Csci 325) where I had to write the code to encrypt and decrypt with different ciphers. Currently the only encryption algorithm used is a
                keyword cipher, but I plan to add more soon.
                <br /> <a href="https://github.com/sanicsquirtle420/raccryption">RacCryption: Source Code</a>
            </p>
            <img src="/assets/raccryption_1.png" alt="Encrypting and Decrypting a text file" className="screenshot"/>
            <h3>Racchat</h3>
            <p>
                Racchat is a project for me to learn about ports by making a message server and client. Currently the server can listen on a port waiting
                for a response from a client. The client is able to successfully send one message before the program closes. Racchat is still under development.
                <br/> <a href="https://github.com/sanicsquirtle420/racchat">Racchat: Source Code</a>
            </p>
            <img src="/assets/racchat_1.png" alt="Screenshot of racchat server and client running" className="screenshot"/>
            <h3>Raccoon Bot</h3>
            <p>
                Raccoon Bot is a simple Discord bot that I wrote to use with my friends. As of right now it can reply with a 
                random Overwatch quote, random cringe gif (both from a json file), and a simple hello
                command. <br/> <a href="https://github.com/sanicsquirtle420/personal-experiments/tree/main/python/RaccoonBot">Raccoon Bot: Source Code</a>.
            </p>
            <img src="/assets/raccoonbot_4.png" alt="Screenshot of Raccoon Bot responses"
                className="screenshot"/>
        </div>
        
        <h2>Programming</h2>
            <p>
                These are some of the programing languages that I know or in the process of learning. All of my code is uploaded
		        to my GitHub account if you would like to see it.
            </p>
        <div className="prog">
            <img className="prog-logo" src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="Java logo" />
            <img className="prog-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1067px-ISO_C%2B%2B_Logo.svg.png" alt="C++ logo" />
            <img className="prog-logo" src="https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945099.png?f=webp&w=256" alt="Python logo" />
            <img className="prog-logo" src="https://images.icon-icons.com/2415/PNG/512/typescript_original_logo_icon_146317.png" alt="TypeScript logo" /> 
        </div>
        <div className="shelby">
        <img src="/assets/shelby2.png" className = "wrap-right" alt="Shelby yawning"/>
        <h2>Shelby</h2>
        
            <p>
                Sense you made it to the bottom here is a picture of Shelby! Isn't he just the best. You should also follow him  
                on <a href="https://instagram.com/shelby.the.doggo">Instagram</a> because we love Shelby &lt;3.
            </p>
        </div> <br style={{clear: "both"}}/>
        <h2>Socials</h2>
        <div className="social">
            <a href="https://github.com/sanicsquirtle420">
                <img src="/assets/github64x64.png"
                    alt="GitHub logo"/>
            </a>
            <a href="https://youtube.com/sanicsquirtle420">
                <img src="/assets/youtube64x64.png"
                    alt="YouTube Logo" />
            </a>
            <a href="https://x.com/sanicsquirtle42">
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