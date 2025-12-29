import Navbar from "../utils/dotfiles_nav" ;
import footerMsg from "../utils/year";

function Dotfiles() {
    return (
        <>
        <title>Dotfiles</title>
        <header>
            <h2>Dotfiles</h2>
        </header>
        <Navbar/>

        <div className="archImages">
        	<h3 id="archConfig">Arch Linux Config</h3>	
			<img src="https://raw.githubusercontent.com/sanicsquirtle420/dotfiles/refs/heads/main/pictures/2025-12-29main.png"
				alt="A screenshot of my Arch Linux i3 configuration." className="screenshot" />
		</div>

        <div className="specs">
				<div className="div1">
					<p>CPU: Ryzen 7 5800x</p>
					<p>GPU: Radeon RX 6700 XT</p>
					<p>RAM: 32GB 3200 MHz</p>
					<p>Motherboard: ASRock B550 Steel Legend</p>
				</div>
				<div className="div2">
					<p>OS: <a href="https://archlinux.org">Arch Linux</a></p>
					<p>WM: <a href="https://i3wm.org">i3</a></p>
					<p>Terminal: <a href="https://github.com/kovidgoyal/kitty">kitty</a></p>
					<p>Additional Apps: 
						&nbsp;<a href="https://github.com/davatorium/rofi">rofi</a>,
						&nbsp;<a href="https://github.com/polybar/polybar">polybar</a>,
						&nbsp;<a href="https://github.com/fastfetch-cli/fastfetch">fastfetch</a>
					</p>
				</div>
            </div>
            <h3 id="dotfiles" style={{display: "flex" , alignItems: "center"}}>
				Link to my dotfiles: 
            	<a href="https://github.com/sanicsquirtle420/dotfiles"><img src="/assets/dotfiles64x64.png" alt="~/." /></a>
			</h3>
			
            <div>
			<h3 id="themePreviews">Theme Previews</h3>
			<p>Welcome to my Dotfiles Theme Previews!</p>
			<p>To see the pictures at their native resolution. Go to my <a href="https://www.tumblr.com/blog/sanicsquirtle428">Tumblr</a> page.</p>

			<a href="https://github.com/sanicsquirtle420/dotfiles/tree/main/themes/aqua"><h4 id="aqua">Aqua</h4></a>
			<img src="https://raw.githubusercontent.com/sanicsquirtle420/dotfiles/refs/heads/main/pictures/2025-12-29aqua.png"
				alt="Preview image for the Aqua theme" className="screenshot" />
			<p>Date: Dec 29, 2025</p>

			<a href="https://github.com/sanicsquirtle420/dotfiles/tree/main/themes/juno"><h4 id="juno">Juno</h4></a>
			<img src="https://raw.githubusercontent.com/sanicsquirtle420/dotfiles/refs/heads/main/pictures/2025-12-29juno.png"
				alt="Preview image for the Juno theme" className="screenshot" />
			<p>Date: Dec 29, 2025</p>

			<a href="https://github.com/sanicsquirtle420/dotfiles/tree/main/themes/yotsuba"><h4 id="yotsuba">Yotsuba</h4></a>
			<img src="https://raw.githubusercontent.com/sanicsquirtle420/dotfiles/refs/heads/main/pictures/2025-12-29yotsuba.png"
				alt="Preview image for the Yotsuba theme" className="screenshot" />
			<p>Date: Dec 29, 2025</p>
		</div>
        <footer>
            {footerMsg()}
        </footer>
        </>
    ) ;
}

export default Dotfiles ;