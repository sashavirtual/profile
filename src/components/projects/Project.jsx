import React, { useEffect, useState } from 'react'
import './project.css'
const Project = ({ source, desc, zoomIn, id }) => {

    return (<>
        <div className='project__block' id={id} onClick={zoomIn}>
            <img src={source} id={id + 'img'} />
            <p id={id + '-paragraph'}>{desc}</p>
        </div>
    </>
    )
}

export default Project