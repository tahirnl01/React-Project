import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <InstagramIcon/>
        <TwitterIcon/>
        <LinkedInIcon/>
        <GitHubIcon/>        
        </div>
        <p> &copy; Github.com/tahirnl01 </p>
    </div>
  )
}

export default Footer