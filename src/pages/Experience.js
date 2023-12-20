import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import TerminalIcon from '@mui/icons-material/Terminal';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';

function Experience() {
  return (
    <div className='expContainer'>
      <div className='expElements'>
        <ol>
          <li>
            <SchoolIcon/>
            <h3>High School Registration-Graduation 2015-2019</h3>
            <p> Hocacihan A.İ.H.L.</p>
          </li>
          <li>
            <SchoolIcon/>
            <h3>University:Department Registration-Graduate 2021-...</h3>
            <p> Selçuk university:Biotechnology </p>
          </li>
          <li>
            <LaptopChromebookIcon/>
            <h3>University:Department Registration-Graduate 2023-...</h3>
            <p>Anadolu University:Culinary Arts </p>
          </li>
          <li>
            <TerminalIcon/>
            <h3>Software Training</h3>
            <p>Üretken Akedemi</p>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Experience