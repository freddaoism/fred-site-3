import { Link, animateScroll as scroll } from "react-scroll";
import React, {Component} from 'react';

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          
          
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            Fred Dao
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >


          <ul className='nav navbar-nav navbar-right'>
            
           <li> <Link 
            activeClass="active"
            to="features"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            >Competencies</Link>
            </li>

            <li><Link 
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            >About</Link>
            </li>

            <li><Link 
            activeClass="active"
            to="testimonials"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            >Testimonials</Link>
            </li>

            <li><Link 
            activeClass="active"
            to="team"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            >Team</Link>
            </li>

            <li><Link 
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            >Contact</Link>
            </li>



         
          </ul>
        </div>
      </div>
    </nav>
  )
}
