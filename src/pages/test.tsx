import Navbar from "../utils/navbar" ;
import footerMsg from "../utils/year";

export default function Main() {
  return (
    <>
    <title>Test dot tsx</title>
    <header>
      <h2>Test</h2>
    </header>
    <Navbar />
      <h3>A collection of my favorite characters</h3>
      <p>Art credits: <a href="https://x.com/StrawHatPyro">StrawHatPyro</a></p>

      <img src="https://pbs.twimg.com/media/GeeIjA0XQAAEx-7?format=jpg&name=4096x4096"
			 className="wrap-left" alt="Kiriko and Juno, art credits: StrawHatPyro" />
		<p>Let the kitsune guide you!</p>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
			minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
			mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
			mollit anim id est laborum.
		</p>
    <br style={{clear: "both"}} />

		<img src="https://pbs.twimg.com/media/GXIJ0FhbEAI16Lw?format=jpg&name=4096x4096"
			className="wrap-right" alt="Kiriko and Juno, art credits: StrawHatPyro" />
		<p>Welcome to orbit!</p>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
			minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
			mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
			mollit anim id est laborum.
		</p>
    <br style={{clear: "both"}}/>

		<img src="https://pbs.twimg.com/media/GgoDquCXAAEOMn7?format=jpg&name=large"
			className="wrap-left" alt="Luna Snow, art credits: StrawHatPyro" />
		<p>I am ready to put on a show!</p>
		<p>
			Who knew it would take me so long to find a spelling mistake, but as far as ultimate voicelines go. Overwatch &gt; Marvel Rivals. Lorem ipsum dolor sit amet, 
			consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
			sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
			do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
			sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
    <br style={{clear: "both"}}/>
    <h3>Note</h3>
    <p>This is just the test website, so feel free to enjoy the random mess this becomes!</p>
    <footer>
            {footerMsg()}
        </footer>
    </>
  ) ;
}