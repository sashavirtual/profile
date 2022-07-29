import React, { useEffect, useState } from 'react'
import './workxp.css';
import Heading from '../details/Heading'
import info from './jobExp'
let years = ['2018-2020', '2021', 'Сейчас']

const Workxp = () => {
    const [job, setJob] = useState(info[0])
    let prev = 0;
    const handleJob = (index) => {
        document.querySelector('.disabled')?.classList.remove('disabled')
        setJob(info[index])
        let arr = [0, 1, 2, 3]

        document.querySelectorAll('.workxp__table-years-period').forEach((item, id) => {
            id !== index && item.removeAttribute('disabled')
        })
        document.querySelector(`#period-${index}`).setAttribute('disabled', '')
    }
    const visibility = () => {
        document.querySelector('.workxp__table-job').classList.remove('visible')
        setTimeout(() => {
            document.querySelector('.workxp__table-job').classList.add('visible')

        }, 50)

    }
    useEffect(() => {
        document.querySelector('.workxp__table-years').addEventListener('click', () => visibility())
        return document.querySelector('.workxp__table-years').removeEventListener('click', () => visibility())
    }, [])
    return (
        <section className="workxp" id="work-experience">
            <Heading title={'Опыт работы'} />
            <div className='workxp__table'>
                <div className='workxp__table-years'>
                    {years.map((year, index) => {
                        return (<button className={`workxp__table-years-period ${index === 0 ? 'disabled' : ''}`} id={`period-${index}`} onClick={() => handleJob(index)} value='disabled'>{year}</button>)
                    })}
                </div>
                <div className='workxp__table-job visible'>
                    <p>{job}</p>
                </div>
            </div>
        </section>
    )
}

export default Workxp