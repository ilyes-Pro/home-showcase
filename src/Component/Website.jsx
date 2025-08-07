import Main from './main'
import About from './about'
import Projects from './Projects'
import Customer from './Customer'
import Contact from './Contact'
import Footer from './footer'
import { useRef } from 'react'
import { usePage } from './context/nav-barContext'


export default function Website() {

    const { refs } = usePage();
    return (
        <>
            <Main ref={refs.main} />
            <About ref={refs.about} />
            <Projects ref={refs.projects} />
            <Customer ref={refs.testimonials} />
            <Contact ref={refs.contact} />
            <Footer ref={refs.footer} />

        </>
    )
}