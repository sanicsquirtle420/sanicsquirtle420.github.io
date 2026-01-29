import Navbar from "../utils/navbar";
import footerMsg from "../utils/year";

function Homelab() {
    return (
        <>
        <title>Homelab</title>
        <header>
            <h1 className="title_header">
                <img src="https://i.pinimg.com/736x/71/20/4c/71204c510b65972dae7142966d2f0511.jpg"
			        alt="Waguri Karoruko from Fragrant Flower Blooms with Dignity"/>
                Homelab
            </h1>
        </header>
        <Navbar/>
        <div>
            <h2>Introduction</h2>
            <p>
                After watching a YouTube video talking about documenting your self hosting journey.
                I decided that it would probably be a good idea to start documenting my self hosting
                journey. As of January 2026, I plan to use this homelab section as a "blog" to documenting
                everything I have done within my homelab. The goal is to have everything set as monthly updates,
                but knowing myself I won't be adding that many updates to this server every month. The link to 
                my homelab is at <a href="https://raccoon2891.com">raccoon2891.com</a>. Most of the time FREE is 
                turned off to not run up my parent's electricity bill, so 9 times out of 10 you will see a CloudFlare 
                error page saying that the host is not responding... because it is off.
            </p>
            <h2>January 2026</h2>
            <h3>Minecraft Server Revival</h3>
            <p>
                Remember when I said that I originally got FREE to become a Minecraft server. Well for the longest time it was mostly
                serving as a server that I was using for only myself. My friends and I have wanted to start the 2 week Minecraft phase
                for a while now, and I decided this winter break to revive the FREE Minecraft server. I originally created a Forge Minecraft 
                server but since my friends are apparently too stupid and my computer is better than theirs I had to switch to making a 
                vanilla Minecraft server compared to a modded one. Personally I use this <a href="https://hub.docker.com/r/marctv/minecraft-papermc-server">PaperMC Docker container</a> from 
                marctv, and it runs pretty well.
            </p>
            <p className="italics">Written by Diego R. - January 12, 2026</p>
            <h2>December 2025</h2>
            <p>
                Here is a quick rundown of some applications I am running on FREE.
            </p>
            <h3>Applications Running On Server</h3>
            <p>
                For a frontend I am using <a href="https://casaos.zimaspace.com/">CasaOS</a> because I saw it in 
                a <a href="https://youtube.com/@TechHut">TechHut</a> video, and I really liked how it looked and decided to give it a 
                try. Also TechHut is one of the main reasons I started to become interested in homelabbing! I used to run Plex for 
                locally accessing music / movies, but after <a href="https://www.youtube.com/@LinusTechTips">LinusTechTips</a> talked 
                about <a href="https://www.youtube.com/watch?v=jKF5GtBIxpM">Plex becoming a subscription service</a> I decided to take 
                his suggestion and switch to <a href="https://jellyfin.org">Jellyfin</a>. Like most people I hate the fact that companies
                have decided to make everything into a subscription service, so I am slowly trying to pull myself away from Google Photos
                by using <a href="https://immich.app/">Immich</a> to store my photos. I also have <a href="https://about.gitea.com">Gitea</a> to 
                store some of my Git repositories locally instead of relying on GitHub. I am also using <a href="https://nginxproxymanager.com/">Nginx Proxy Manager</a> to 
                route traffic from my local network to the internet so I can access these applications from anywhere. Lastly, I am running
                an <a href="https://httpd.apache.org/">Apache</a> web server only because I saw that Ole Miss uses is it as our file server 
                for the computer science department.
            </p>
            <p className="italics">Written by Diego R. - January 12, 2026</p>
            <h2>January - November 2025</h2>
            <p>
                Now that I am done talking about some of the lore behind FREE, let's get into some of the mistakes I made along my 
                homelabbing journey!
            </p>
            <h3>Arch Linux</h3>
            <p>
                I don't know what demons in my head convinced me to DELETE Ubuntu server from FREE and replace it with <a href="https://archlinux.org">Arch Linux</a> as 
                my server OS, but that is a road I went down. In all honesty I think it came from my familarity with Arch Linux as my
                desktop OS, and I love how it is as a desktop OS that I thought, "Well it should be perfect as a server OS!" If I could
                go back in time I would tell myself no because it would solve many problems that I eventually ran into because of my own
                stupidity. After realizing that a rolling release Linux distribution is not the best as a server OS I went back to Ubuntu 
                server.
            </p>
            <h3>Interim Ubuntu Server Versions</h3>
            <p>
                After the "I use Arch btw" demons wasted my time, I installed an interim Ubuntu server release onto FREE. When I was 
                reinstalling my services everything was going smoothly because most services are made to run on Ubuntu server since it 
                is the most popular server OS. Everything was set back up to normal, and I turned my server off and went back to school.
                After a couple months I turn FREE back on and decide to update the system. I used apt to update the system and I got an error.
                Great! Now I have to fix something, so I consulted my best friend <a href="https://chatgpt.com">ChatGPT</a>. I was using an
                older interim version of Ubuntu and it was not pulling from the <a href="https://archive.ubuntu.com">archive Ubuntu</a> links
                to properly update my packages on Oracular Oriole (version 24.10). I then got to arguing with ChatGPT because I wanted to go from 
                the interim Ubuntu releases to the LTS even thought that is pretty much impossible without reinstalling an LTS version of Ubuntu.
                I ended up fixing the apt issue and got everything to update to 25.04 (Plucky Puffin). I would also like to note that I love the
                naming for Ubuntu versions they are goofy and I appreciate them.
            </p>
            <h3>Words of Advice</h3>
            <p>
                Now what I learned from this whole experience is that I should have stuck with an LTS version of Ubuntu server because people
                recommend it for a reason. While a rolling release Linux distribution might be nice for a desktop OS since you want drivers for
                the newest software as soon as possible, in a server the most important thing is stability.
            </p>
            <p className="italics">Written by Diego R. - January 12, 2026</p>
            <h2>January - December 2024</h2>
            <img src="https://64.media.tumblr.com/8483b8ebfeb46743d75d3f6f215fc3ee/e9a1efd051238021-47/s540x810/56b466a025511e526783b41ac724c5e6b4d0b358.pnj" 
                className="wrap-right" alt="Picture of FREE"/>
            <h3>The Lore</h3>
            <p>
                I don't specifically remember when I started using FREE (I'll explain the lore in a bit) as a
                personal server but for now it will be January 2024 even though I am sure I got this PC back in 2023.
                One of my best friends saw this PC that was left outside his neighborhood for free and had the text "FREE!" 
                (see image for proof) and he decided to take it home and use it for himself if it ran
                decently. Luckily the PC did turn on and ran fairly slow but was still usable for watching YouTube videos or simple
                web browsing. After some time I ended up asking him if I could take FREE from him to turn it into a Minecraft server.
                He wasn't using the PC and honestly didn't believe it could run a Minecraft server on it so he gave it to me to try it
                out. By that point I have never managed a Linux server and decided this would be a perfect opportunity to learn more
                about using Linux as a server OS compared to a desktop OS. I ended up installing <a href="https://ubuntu.com/download/server">Ubuntu Server</a> LTS 
                20.04 because I couldn't get <a href="https://rufus.ie">Rufus</a> to make a GPT bootable USB of Ubuntu Server LTS version 22.04 even
                though I eventually updated it to LTS version 22.04. 
            </p>
            <br style={{clear: "both"}}/>
            <table>
                <tr>
                    <td className="center">Kiriko</td>
                    <td className="center">Juno</td>
                    <td className="center">Luna Snow</td>
                </tr>
                <tr>
                    <td>
                        <img src="https://pbs.twimg.com/media/G4DZwqIWIAA63dQ?format=jpg&name=large"
                            className="screenshot" alt="Kiriko, art credits: StrawHatPyro" />
                    </td>
                    <td>
                        <img src="https://pbs.twimg.com/media/GuDgrWrWkAAv_ll?format=jpg&name=large"
                            className="screenshot" alt="Juno, art credits: StrawHatPyro" />
                    </td>
                    <td>
                        <img src="https://pbs.twimg.com/media/GgoDquCXAAEOMn7?format=jpg&name=large"
                            className="screenshot" alt="Luna Snow, art credits: StrawHatPyro" />
                    </td>
                </tr>
            </table>
            <p>Source: <a href="https://x.com/StrawHatPyro">StrawHatPyro</a></p> 
            <p className="italics">Written by Diego R. - January 29, 2026</p>
        </div>
        <footer>
            {footerMsg()}
        </footer>
        </>
    ) ;
}

export default Homelab ;