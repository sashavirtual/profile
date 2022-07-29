import React, { useEffect } from 'react'
import './techStack.css'
import Heading from '../details/Heading'
import meadowBW from '../../assets/meadow_meadow-bw.png'
import sashaBW from '../../assets/meadow_sasha-bw.png'
import meadow from '../../assets/meadow_meadow.png'
import sasha from '../../assets/meadow_sasha.png'
import sashaCoding from '../../assets/coding_sasha.png'
const TechStack = () => {
    const onHover = () => {
        document.querySelector('.techStack__meadowBW').setAttribute('style', 'opacity:0');
        document.querySelector('.techStack__sashaBW').setAttribute('style', 'opacity:0');
        document.querySelector('.techStack__meadow').setAttribute('style', 'opacity:1');
        document.querySelector('.techStack__sasha').setAttribute('style', 'transform:scale(1.02);z-index:5;opacity:1;');
        document.querySelector('.techStack__sasha-coding').setAttribute('style', 'opacity:0.2;');
    }
    const onHoverOut = () => {
        document.querySelector('.techStack__meadowBW').setAttribute('style', 'opacity:1');
        document.querySelector('.techStack__sashaBW').setAttribute('style', 'opacity:1');
        document.querySelector('.techStack__meadow').setAttribute('style', 'opacity:0');
        document.querySelector('.techStack__sasha').setAttribute('style', 'transform:scale(1);z-index: 0;opacity:0;');
        document.querySelector('.techStack__sasha-coding').setAttribute('style', 'opacity:0;z-index:0');
    }
    useEffect(() => {
        document.querySelector('.techStack__meadow-hover').addEventListener('mouseover', () => onHover())
    }, [])
    useEffect(() => {
        document.querySelector('.techStack__meadow-hover').addEventListener('mouseout', () => onHoverOut())
    }, [])
    return (
        <section id="tech-stack" className='techStack'>
            <Heading title={'Навыки'} />
            <div className='techStack__meadow-hover'>
                <img src={meadow} className='techStack__meadow' />
                <img src={sashaCoding} className='techStack__sasha-coding' />
                <img src={sasha} className='techStack__sasha' />
                <img className='techStack__meadowBW' src={meadowBW} />
                <img src={sashaBW} className='techStack__sashaBW' />
            </div>
            <p>Первые шаги во фронтенд разработке мне помог сделать сайт freeCodeCamp.org, предлагающий ознакомление со многими основами и технологиями. <a target="_blank" href="https://www.freecodecamp.org/sashavirtual">Выполнив 3 курса</a>, я продолжил практиковать <a target="_blank" href="https://www.codewars.com/users/Aleksandr%20Semenikhin">JavaScript на CodeWars.com</a>, смотрел видео с созданием пет-проектов, чтобы наглядно наблюдать за работой профессионалов, следил за оптимизацией процесса, алгоритмами и структурированием работы, на своих проектах закреплял следующие навыки:</p>
            <div className='techStack__techList'>
                <ul >
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>CSS</li>
                    <li>Английский язык (advanced)</li>
                </ul>
                <ul>
                    <li>HTML</li>
                    <li>NPM</li>
                    <li>Photoshop</li>
                    <li>SCSS</li>
                    <li>Redux</li>
                </ul>
            </div>
        </section>
    )
}

export default TechStack