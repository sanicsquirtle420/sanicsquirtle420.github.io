function footerMsg(){
    const getText = () => {
        let year = new Date().getFullYear() ;
        return `This website is hosted by GitHub Pages - SanicSquirtle428 (${year})` ;
    } ;

    return (
        <p>{getText()}</p>
    ) ;
}

export default footerMsg ;