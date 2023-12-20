import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My name is Tahir</h2>
        <div className='prompt'>
          <p>A software developer with a passion for learning and creating </p>
          <EmailIcon/>
          <GitHubIcon/>
          <LinkedInIcon/>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='List'>
          <li className='Item'>
            <h2>programming Languages</h2>
            <span>CSS ,HTML ,JawaScript ,React</span>
          </li>
          <li className='Item'>
            <h2>Languages</h2>
            <span>Turkish ,English ,basic level arabic</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home