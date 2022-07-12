import React, { useEffect } from 'react'
import './header.css';
import sashaBg from '../../assets/sasha1.png'
import sashaBg_hover from '../../assets/sasha1sm-hover.png'


const Header = () => {
    const onHover = () => {
        document.querySelector('.firstChildImg').setAttribute('style', 'opacity:0');
        document.querySelector('.lastChildImg').setAttribute('style', 'opacity:1');
    }
    const onHoverOut = () => {
        document.querySelector('.firstChildImg').setAttribute('style', 'opacity:1');
        document.querySelector('.lastChildImg').setAttribute('style', 'opacity:0');
    }
    useEffect(() => {
        document.querySelector('.firstChildImg').addEventListener('mouseover', () => onHover())
    }, [])
    useEffect(() => {
        document.querySelector('.firstChildImg').addEventListener('mouseout', () => onHoverOut())

    }, [])
    return (
        <section className='header'>
            <div className='header__name'>
                <h1>Александр Семенихин</h1>
                <h2>Front End Developer</h2>
            </div>
            <div className='header__quote'>
                <p>"Чужих меж нами нет! <br />
                    Все мы друг другу братья <br />
                    Под вишнями в цвету." </p>
                <p>Кобаяси Исса </p>
            </div>
            <div className='firstChildImg' />
            <div className='lastChildImg' />

        </section>
    )
}

export default Header