import React, { useState } from 'react'
import './projects.css'
import Heading from '../details/Heading'
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'
import project4 from '../../assets/project4.png'
import Project from './Project'
import projectName from './projectName'
let projectDescription = ['a', 'b', 'c', 'd']
const Projects = () => {
    let arr = [project1, project2, project3, project4]
    const [img, setImg] = useState('')
    const [desc, setDesc] = useState('')
    const zoomIn = (e) => {
        setImg(arr[Number(e.target.id[0])])
        setDesc(projectDescription[Number(e.target.id[0])])
        console.log(e.target.id[0])
    }
    return (
        <section className="projects" id="my-projects">
            <Heading title={'Мои проекты'} />
            <div className='projects__all'>
                {arr.map((project, index) => (
                    <Project
                        key={index}
                        id={`${index}-projectId`}
                        desc={projectName[index]}
                        source={project}
                        zoomIn={zoomIn}
                    />))}
            </div>
            <div className='project__fullscreen'>
                <img src={img} />
                <p>{desc}</p>
            </div>
        </section>
    )
}

export default Projects