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

const sample01 = `
/* sample.c */
#include <stdio.h>

int main(int argc, char* argv[])
{
	for(int i = 0; i < argc; i++)
	{
		printf(\"argc: %i, argv: %s\\n\", argc, argv) ;
	}

	return 0 ;
}
`;

export default function Main() {
  return (
    <>
    <title>Open Source</title>
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
	<CodeBlock codeStr={sample01.trim()} lang="c"/>

	<p>
		This code block might keep changing until I eventually make an open source contribution. With school being a thing
		and not taking advantage of the time I had during the winter storm I haven't done anything. At least I am learning
		cool stuff about operating systems so hopefully that gives me more knowledge with C to be more comfortable with 
		contributing to the Linux kernel.
	</p>
	<p className="italics"> Updated by Diego R. - February 21, 2026 </p>
	
    <footer>
            {footerMsg()}
        </footer>
    </>
  ) ;
}