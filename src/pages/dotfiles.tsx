import Navbar from "../utils/navbar" ;
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
			<img src="https://64.media.tumblr.com/d0391ef985b175ebd9cb29ff37238503/a7509aa304f24313-9f/s2048x3072/e18b4f4b294acc6122150abe7579a0113e4790d8.pnj"
				alt="A screenshot of my Arch i3 configuration." class="screenshot" />
			<img src="https://64.media.tumblr.com/b5fa0850e0dc970f958b34ea036f5e0c/837b204c62db8d73-a4/s1280x1920/239957e87f0ee9ba0d496fb89498869c982eae2d.pnj"
				alt="A screenshot of my rofi configuration." class="screenshot" />
		</div>

        <div class="specs">
				<div class="div1">
					<p>CPU: Ryzen 7 5800x</p>
					<p>GPU: Radeon RX 6700 XT</p>
					<p>RAM: 32GB 3200 MHz</p>
					<p>Motherboard: ASRock B550 Steel Legend</p>
				</div>
				<div class="div2">
					<p>OS: <a href="https://archlinux.org">Arch Linux</a></p>
					<p>WM: <a href="https://i3wm.org">i3</a></p>
					<p>Terminal: <a href="https://github.com/kovidgoyal/kitty">kitty</a></p>
					<p>Additional Apps: 
						&nbsp;<a href="https://github.com/davatorium/rofi">rofi</a>,
						&nbsp;<a href="https://github.com/polybar/polybar">polybar</a>,
						&nbsp;<a href="https://github.com/dylanaraps/neofetch">neofetch</a> (RIP)
					</p>
				</div>
            </div>
            <h3 id="dotfiles">Link to Dotfiles:</h3>
            <a href="https://github.com/sanicsquirtle420/dotfiles"><img src="/assets/dotfiles64x64.png" alt="~/." /></a>
			
            <div>
			<h3 id="themePreviews">Theme Previews</h3>
			<p>Welcome to my Dotfiles Theme Previews!</p>
			<p>To see the pictures at their native resolution. Go to my <a href="https://www.tumblr.com/blog/sanicsquirtle428">Tumblr</a> page.</p>

			<a href="https://github.com/sanicsquirtle420/dotfiles/tree/main/themes/aqua"><h4 id="aqua">Aqua</h4></a>
			<img src="https://raw.githubusercontent.com/sanicsquirtle420/dotfiles/refs/heads/main/pictures/2024-12-27aqua.png"
				alt="Preview image for the Aqua theme" class="screenshot" />
			<p>Date: Dec 27, 2024</p>

			<a href="https://github.com/sanicsquirtle420/dotfiles/tree/main/themes/juno"><h4 id="juno">Juno</h4></a>
			<img src="https://raw.githubusercontent.com/sanicsquirtle420/dotfiles/refs/heads/main/pictures/2024-12-27juno.png"
				alt="Preview image for the Juno theme" class="screenshot" />
			<p>Date: Dec 27, 2024</p>

			<a href="https://github.com/sanicsquirtle420/dotfiles/tree/main/themes/yotsuba"><h4 id="yotsuba">Yotsuba</h4></a>
			<img src="https://raw.githubusercontent.com/sanicsquirtle420/dotfiles/refs/heads/main/pictures/2024-12-27yotsuba.png"
				alt="Preview image for the Yotsuba theme" class="screenshot" />
			<p>Date: Dec 27, 2024</p>
		</div>
        <footer>
            {footerMsg()}
        </footer>
        </>
    ) ;
}

export default Dotfiles ;