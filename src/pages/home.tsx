import Navbar from "../utils/navbar";
import footerMsg from "../utils/year";

function Home() {
    return (
        <>
        <title>SanicSquirtle428</title>
        <header>
            <h2>
                <img src="https://i.pinimg.com/736x/1f/fb/08/1ffb088636afec128b21fc4b0b354fa3.jpg"
                style= {{
                    width: 45 ,
                    height: 45
                }} />
                SanicSquirtle420
            </h2>
        </header>
        <Navbar/>
        <div>
            <h3>About Me:</h3>
            <img className="img-diego" 
                src="https://sanicsquirtle420.github.io/assets/diego1.jpg"
                class="wrap-left"
                style={{
                    height: "15%" ,
                    width: "15%" ,
                    borderRadius: "50%" ,
                    padding: 10
                }}
                />
            <p>
                Hello, my name is Diego, and I am a current Computer Science (with an emphasis in Computer Security) student at
                the <a href="https://cs.olemiss.edu">University of Mississippi</a>. I am also minoring in Electrical Engineering, 
                and I have plans to go to grad school for Computer Engineering / Computer Science. 
            </p>
        </div>
        <br style={{clear: "both"}}/>
        <div className="program">
            <h3>Programming</h3>
            <p>
                These are some of the programing languages that I know or in the process of learning. All of my code is uploaded
		        to my GitHub account if you would like to see it.
            </p>
            <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="Java logo"/> 
        </div>
        <div>
            <h3>Raccoon Bot</h3>
            <p>
                the awful invention known as Raccoon bot.
            </p>
        </div>
        <h3>Socials</h3>
        <div className="social">
            <a href="https://github.com/SanicSquirtle420">
                <img src="https://github.com/sanicsquirtle420/sanicsquirtle420.github.io/blob/main/assets/github64x64.png?raw=true"
                    alt="GitHub logo"/>
            </a>
            <a href="https://x.com/SanicSquirtle42">
                <img src="https://github.com/sanicsquirtle420/sanicsquirtle420.github.io/blob/main/assets/x-twitter64x64.png?raw=true" 
                    alt ="X / Twitter Logo"/>
            </a>
            <a href="https://youtube.com/SanicSquirtle420">
                <img src="https://github.com/sanicsquirtle420/sanicsquirtle420.github.io/blob/main/assets/youtube64x64.png?raw=true"
                    alt="YouTube Logo" />
            </a>
        </div>
        <footer>
            {footerMsg()}
        </footer>
        </>
    ) ;
}

export default Home ;