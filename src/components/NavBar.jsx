import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href = "/" aria-label="Home">
            <h1 className="text-2xl font-bold text-stone-200">Sandun Theekshana</h1>
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href = "https://www.linkedin.com/in/sandun-theekshana-2a4b682b9/"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="LinkedIn Profile">
            <FaLinkedin/>
        </a>
        <a href = "https://github.com/THEEKSHANA-LS"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="Github Profile">
            <FaGithub/>
        </a>
      </div>
    </nav>
  )
}

export default NavBar
