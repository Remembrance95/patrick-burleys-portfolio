import * as React from "react"
import { Link } from "gatsby"
import { container, header, divStyles, heading, navLinks, navLinkItem, navLinkText, linkIcons} from "./layout.module.css"
import { StaticImage } from "gatsby-plugin-image"

const layout = ({pageTitle, pageHeader, pageHeading, children}) => {
    return (
        <main className={container}>
            <title>{pageTitle}</title>
            <header className={header}><Link to="/" >{pageHeader}</Link></header>
            <div className={divStyles}>
                <nav>
                    <ul className={navLinks}>
                        <li className={navLinkItem}><Link to="/" className={navLinkText} alt='Link to home page'>Home</Link></li>
                        <li className={navLinkItem}><Link to="/aboutMe" className={navLinkText} alt='Link to about me page'>About</Link></li>
                        <li className={navLinkItem}><Link to="/contacts" className={navLinkText}>Contact</Link></li>
                        <Link to='https://github.com/Remembrance95'><StaticImage src="https://cdn-icons-png.flaticon.com/128/25/25657.png" alt='Link to my github'className={linkIcons} /></Link>
                        <Link to='https://www.linkedin.com/in/patrick-burley-84489bb5/'><StaticImage src="https://cdn-icons-png.flaticon.com/128/61/61109.png" alt='Link to my linkedin'className={linkIcons} /></Link>
                        <Link to='https://www.linkedin.com/in/patrick-burley-84489bb5/'><StaticImage src="https://cdn-icons-png.flaticon.com/128/61/61109.png" alt='Link to my linkedin'className={linkIcons} /></Link>
                    </ul>
                </nav>
                <h1 className={heading}>{pageHeading}</h1>
                {children}
            </div>   
        </main>

    )
}

export default layout