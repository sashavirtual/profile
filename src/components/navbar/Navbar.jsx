import React, { useEffect, useRef, useState } from 'react'
import './navbar.css';
import sasha0 from '../../assets/sasha0.png'
import expandMenu from '../../assets/expandMenu.png'
import closeCross from '../../assets/closeline.png'

import List from './List';
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    useEffect(() => { // спрятать нав.панель
        const nav = document.querySelector(".navbar");
        let lastScrollY = window.scrollY;
        window.addEventListener("scroll", () => {
            if (lastScrollY < window.scrollY) {
                nav.classList.add("navbar__hidden");
            } else {
                nav.classList.remove("navbar__hidden")
            }
            lastScrollY = window.scrollY
        })
        return
    }, [])
    let menuRef = useRef()
    let closeline = useRef()
    useEffect(() => {
        let handler = (event) => {
            if (!menuRef.current?.contains(event.target) && !closeline.current?.contains(event.target)) {
                setToggleMenu(false)
            }
        }
        document.addEventListener("mousedown", handler)
        return () => document.removeEventListener("mousedown", handler)
    }
    )
    return (
        <section className='navbar'>
            <a><img src={sasha0} /></a>
            <List />
            <div className='navbar__menu' >
                <div className='navbar__menu-openClose' ref={closeline} onClick={() => setToggleMenu(!toggleMenu)}><img src={toggleMenu ? closeCross : expandMenu} /></div>
                {toggleMenu && <div className='navbar__menu-openClose slide-left' ref={menuRef}><List toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} /></div>}
            </div>

        </section>
    )
}

export default Navbar