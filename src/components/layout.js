import * as React from "react"
import { Link } from "gatsby"
import { container, header, divStyles, heading, navLinks, navLinkItem, navLinkText, githubIcon} from "./layout.module.css"
import { StaticImage } from "gatsby-plugin-image"

const layout = ({pageTitle, pageHeader, pageHeading, children}) => {
    return (
        <main className={container}>
            <title>{pageTitle}</title>
            <header className={header}><Link to="/" >{pageHeader}</Link></header>
            <div className={divStyles}>
                <nav>
                    <ul className={navLinks}>
                        <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                        <li className={navLinkItem}><Link to="/aboutMe" className={navLinkText}>About</Link></li>
                        <li className={navLinkItem}><Link to="/contacts" className={navLinkText}>Contact</Link></li>
                        <StaticImage src="https://cdn-icons-png.flaticon.com/128/25/25657.png" alt='Link to my github'className={githubIcon} />
                    </ul>
                </nav>
                <h1 className={heading}>{pageHeading}</h1>
                {children}
            </div>   
        </main>

    )
}

export default layout