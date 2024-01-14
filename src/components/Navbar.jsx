import React, { useState } from 'react'
import Logo from '../assets/white.png';
import './Navbar.css';
import { Link } from 'react-scroll';
import {
    FaBars,
    FaGithub,
    FaLinkedin,
    FaSearch,
    FaTimes
  } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { SearchResult } from './SearchResult';

function Navbar() {
    const [nav, setNav] = useState(false);
    const [input, setInput] = useState("");
    const [results, setResults] = useState([])
    const handleClick = () => setNav(!nav)
    const fetchData = (value) => {
        fetch("http://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => {
                const filteredResults = json.filter((user) => {
                    return value && user && user.name && user.name.toLowerCase().includes(value.toLowerCase());
                });
                setResults(filteredResults);
            });
    };
    const handleChange = (e) => {
        const value = e.target.value;
        setInput(value);
        fetchData(value);
    }
  return (
    <div className='nav-container'>
        <div>
            <img src={Logo} alt='Logo Image' style={{ width: '200px' }} />
        </div>
        
        <div className='search-bar'>
            <div className='search-container'>
                <FaSearch id='search-icon' />
                <input
                type='text'
                placeholder='Search...'
                value={input} 
                onChange={handleChange}
                />
            </div>
            <div className='results-list' results={results}>
                {results.map((result, id) => (
                    <SearchResult key={id} result={result.name} />
                ))}
            </div>
        </div>
        <ul className='fs'>
            <li>
                <Link to='home' smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li>
                <Link to='about' smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li>
            <Link to='skills' smooth={true} duration={500}>
                Course
            </Link>
            </li>
            <li>
            <Link to='work' smooth={true} duration={500}>
                Resources
            </Link>
            </li>
            <li>
            <Link to='contact' smooth={true} duration={500}>
                Contact
            </Link>
            </li>
        </ul>
        <div onClick={handleClick} className='hb'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        <ul
        className={!nav ? 'hidden' : 'nav-list'}
        >
            <li>
            <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                Home
            </Link>
            </li>
            <li>
            {' '}
            <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                About
            </Link>
            </li>
            <li>
            {' '}
            <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                Courses
            </Link>
            </li>
            <li>
            {' '}
            <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                Resources
            </Link>
            </li>
            <li>
            {' '}
            <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                Contact
            </Link>
            </li>
        </ul>
        <div className='social-media'>
            <ul className='sm' style={{ flexDirection: "column" }}>
                <li>
                <a href='https://www.linkedin.com/company/oh-puhleeez/'>
                    Linkedin <FaLinkedin style={{width: "5.5rem", height: "5.5rem", padding: "1rem"}}/>
                </a>
                </li>
                <li >
                    <a href='/'>
                        Github <FaGithub style={{width: "5.5rem", height: "5.5rem", padding: "1rem"}}/>
                    </a>
                </li>
                <li>
                    <a href='/'>
                        Email <HiOutlineMail style={{width: "5.5rem", height: "5.5rem", padding: "1rem"}}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar