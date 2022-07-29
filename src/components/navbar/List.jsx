import React from 'react'

const List = ({ toggleMenu, setToggleMenu }) => {
    return (
        <div className={`navbar__buttons ${toggleMenu ? 'menu__opened' : 'menu__closed'}`}>
            <a href="#about-me" onClick={() => setToggleMenu(false)}>Обо мне</a>
            <a href="#tech-stack" onClick={() => setToggleMenu(false)}>Навыки</a>
            <a href="#work-experience" onClick={() => setToggleMenu(false)}>Опыт работы</a>
            <a href="#my-projects" onClick={() => setToggleMenu(false)}>Мои проекты</a>
            <a href="#contact-me" onClick={() => setToggleMenu(false)}>Контакты</a>
        </div>
    )
}

export default List