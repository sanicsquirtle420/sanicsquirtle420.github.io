import Navbar from "../utils/navbar" ;
import footerMsg from "../utils/year";

export default function Main() {
  return (
    <>
    <title>Test dot tsx</title>
    <header>
      <h1 className="title_header">
		<img src="https://i.pinimg.com/736x/b2/33/65/b233650b836ac1718ce7f686c043802d.jpg"
            alt="Yotsuba Nakano from the Quintessential Quintuplets"/>        
		Test
	</h1>
    </header>
    <Navbar />
      <p></p>

      <img src="https://pbs.twimg.com/media/G4DZwqIWIAA63dQ?format=jpg&name=large"
			 className="wrap-left" alt="Kiriko, art credits: StrawHatPyro" />
		<h3>Kiriko:</h3>
		<p>Let the kitsune guide you! Art credits: <a href="https://x.com/StrawHatPyro">StrawHatPyro</a></p>
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

		<img src="https://pbs.twimg.com/media/GuDgrWrWkAAv_ll?format=jpg&name=large"
			className="wrap-right" alt="Juno, art credits: StrawHatPyro" />
		<h3>Juno:</h3>
		<p>Welcome to orbit! Art credits: <a href="https://x.com/StrawHatPyro">StrawHatPyro</a></p>
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

		<pre><code>
{`/* Test.java */
public static void main(String[] args) {
	System.out.println(juno()) ; 
	System.out.println(kiriko("raccoon")) ;
}

public String juno() {
	return "Welcome to orbit!" ;
}
	
public String kiriko(String name) {
	return String.format("Let the kitsune guide %s!", name) ;
}`	
	}</code></pre>

		<img src="https://pbs.twimg.com/media/GgoDquCXAAEOMn7?format=jpg&name=large"
			className="wrap-left" alt="Luna Snow, art credits: StrawHatPyro" />
		<h3>Luna Snow:</h3>
		<p>I am ready to put on a show! Art credits: <a href="https://x.com/StrawHatPyro">StrawHatPyro</a></p>
		<p>
			Who knew it would take me so long to find a spelling mistake, but as far as ultimate voicelines go. Overwatch &gt; Marvel Rivals. Lorem ipsum dolor sit amet, 
			consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
			sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
			do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
			sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p> <br style={{clear: "both"}}/>
    <h3>Note</h3>
    <p>This is just the test website, so feel free to enjoy the random mess this becomes!</p>
    <footer>
            {footerMsg()}
        </footer>
    </>
  ) ;
}