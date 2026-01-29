import Navbar from "../utils/navbar" ;
import footerMsg from "../utils/year" ;
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter" ;
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism" ;

interface CodeProps {
	codeStr: string ;
	lang: string ;
}
const CodeBlock = ({ codeStr, lang }: CodeProps) => { 
	return(
		<SyntaxHighlighter language={lang} style={dracula}>
			{codeStr}
		</SyntaxHighlighter>
	) ;
} ;

const testJava = `
/* Test.java */
public class Test {
	public static void main(String[] args) {
		System.out.println(juno()) ; 
		System.out.println(kiriko("raccoon")) ;
	}
}

public static String juno() {
	return "Welcome to orbit!" ;
}
	
public static String kiriko(String name) {
	return String.format("Let the Kitsune guide %s!", name) ;	
}
`;

export default function Main() {
  return (
    <>
    <title>Test dot tsx</title>
    <header>
      <h1 className="title_header">
			<img src="https://i.pinimg.com/1200x/35/8b/10/358b102e97749c98a168db79774c6988.jpg"
				alt="Kobeni Higayashima from Chainsaw Man"/>
			Open Source
		</h1>
    </header>
    <Navbar />
	<h3>Future Plans</h3>
    <p>
		I saw a YouTube video by <a href="https://www.youtube.com/@Lewboskii">Lewboskii</a> where he became a
		contributer to the <a href="https://kernel.org">Linux kernel</a>, and I decided that I would
		also try to become a contributer to the Linux kernel. Like Lewboskii I know I won't be
		able to make a huge contribution to the Linux kernel but I think contributing to this will be
		an important milestone in my programming journey. I will rebrand this section of my GitHub pages
		to showcase my contributions to open source software.
	</p>
	<p className="italics">Written by Diego R. - January 29, 2026</p>

	<h2>Sample Code Block</h2>
		<CodeBlock codeStr={testJava.trim()} lang="java"/>

	<p>
		On January 29, 2026 I decided to check if this code was correct, and turns out it wasn't
		so I just fixed the mistakes in the code and it runs! I also added a package that adds
		syntax highlighting because I might try to show some code off... eventually.
	</p>
	
    <footer>
            {footerMsg()}
        </footer>
    </>
  ) ;
}