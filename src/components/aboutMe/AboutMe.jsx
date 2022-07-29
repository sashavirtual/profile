import React from 'react'
import Heading from '../details/Heading'
import './aboutMe.css'
import sasha from '../../assets/sasha2.png'
const AboutMe = () => {
    return (
        <div className="aboutMe" id='about-me'>
            <Heading title={'Обо мне'} />
            <div className='aboutMe__content'>
                <img src={sasha} />
                <p>
                    Привет, меня зовут <span>Саша</span> и я начинающий фронтенд-разработчик, мне 25 лет.
                    Я магистр в области лингвистики, изучал английский, немецкий и французский языки, преподавал английский язык для школьников и студентов.
                    После 7 лет университета и армии я решил поменять вектор своего развития и начал изучать фронтенд-разработку.
                </p>
            </div>
        </div>
    )
}

export default AboutMe