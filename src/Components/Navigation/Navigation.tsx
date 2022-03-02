import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import './Navigation.css'

function Navigation() {
    const [showNavItems, setShowNavItems] = useState(false)
    return (
        <div>
            <Header />
            <div className='navigation'>
                <div className='logo'>
                    <Link to="/" className='tdn'><img src="./Images/wansa.png" alt='' /></Link>
                </div>
                <div className={
                    showNavItems ? "nav-items mobile-nav-items" : "nav-items"
                }>
                    <ul>
                        <li className="nav-item">
                            SEO & Lead Generation
                            <ul className="sub-list-1">
                                <ul className="list">
                                    <div className='list-1'>
                                        <div>Heading1</div>
                                        <li className="list-item">List1</li>
                                        <li className="list-item">List2</li>
                                        <li className="list-item">List3</li>
                                        <li className="list-item">List4</li>
                                        <li className="list-item">List5</li>
                                        <li className="list-item">List6</li>
                                    </div>
                                </ul>
                                <ul className="list">
                                    <div className='list-2'>
                                        <div>Heading1</div>
                                        <li className="list-item">List1</li>
                                        <li className="list-item">List2</li>
                                        <li className="list-item">List3</li>
                                        <li className="list-item">List4</li>
                                        <li className="list-item">List5</li>
                                        <li className="list-item">List6</li>
                                    </div>
                                </ul>
                                <ul className="list">
                                    <div className='list-3'>
                                        <div>Heading1</div>
                                        <li className="list-item">List1</li>
                                        <li className="list-item">List2</li>
                                        <li className="list-item">List3</li>
                                        <li className="list-item">List4</li>
                                        <li className="list-item">List5</li>
                                        <li className="list-item">List6</li>
                                    </div>
                                </ul>
                                <ul className="list">
                                    <div className='list-4'>
                                        <div>Heading1</div>
                                        <li className="list-item">List1</li>
                                        <li className="list-item">List2</li>
                                        <li className="list-item">List3</li>
                                        <li className="list-item">List4</li>
                                        <li className="list-item">List5</li>
                                        <li className="list-item">List6</li>
                                    </div>
                                </ul>
                            </ul>
                        </li>
                        <li className="nav-item">Ecommerce 
                            <ul className="sub-list-2">
                                <ul className="list">
                                    <div className='list-1'>
                                        <div>Heading2</div>
                                        <li className="list-item">List1</li>
                                        <li className="list-item">List2</li>
                                        <li className="list-item">List3</li>
                                        <li className="list-item">List4</li>
                                        <li className="list-item">List5</li>
                                        <li className="list-item">List6</li>
                                    </div>
                                </ul>
                                <ul className="list">
                                    <div className='list-2'>
                                        <div>Heading2</div>
                                        <li className="list-item">List1</li>
                                        <li className="list-item">List2</li>
                                        <li className="list-item">List3</li>
                                        <li className="list-item">List4</li>
                                        <li className="list-item">List5</li>
                                        <li className="list-item">List6</li>
                                    </div>
                                </ul>
                                <ul className="list">
                                    <div className='list-3'>
                                        <div>Heading2</div>
                                        <li className="list-item">List1</li>
                                        <li className="list-item">List2</li>
                                        <li className="list-item">List3</li>
                                        <li className="list-item">List4</li>
                                        <li className="list-item">List5</li>
                                        <li className="list-item">List6</li>
                                    </div>
                                </ul>
                                <ul className="list">
                                    <div className='list-4'>
                                        <div>Heading2</div>
                                        <li className="list-item">List1</li>
                                        <li className="list-item">List2</li>
                                        <li className="list-item">List3</li>
                                        <li className="list-item">List4</li>
                                        <li className="list-item">List5</li>
                                        <li className="list-item">List6</li>
                                    </div>
                                </ul>
                            </ul>
                        </li>
                        <li className="nav-item">UX & Interactive
                            <ul className="sub-list-3">
                                <ul className="list">
                                    <div className='list-1'>
                                        <div>Heading3</div>
                                        <li className="list-item">List1</li>
                                        <li className="list-item">List2</li>
                                        <li className="list-item">List3</li>
                                        <li className="list-item">List4</li>
                                        <li className="list-item">List5</li>
                                        <li className="list-item">List6</li>
                                    </div>
                                </ul>
                                <ul className="list">
                                    <div className='list-2'>
                                        <div>Heading3</div>
                                        <li className="list-item">List1</li>
                                        <li className="list-item">List2</li>
                                        <li className="list-item">List3</li>
                                        <li className="list-item">List4</li>
                                        <li className="list-item">List5</li>
                                        <li className="list-item">List6</li>
                                    </div>
                                </ul>
                                <ul className="list">
                                    <div className='list-3'>
                                        <div>Heading3</div>
                                        <li className="list-item">List1</li>
                                        <li className="list-item">List2</li>
                                        <li className="list-item">List3</li>
                                        <li className="list-item">List4</li>
                                        <li className="list-item">List5</li>
                                        <li className="list-item">List6</li>
                                    </div>
                                </ul>
                                <ul className="list">
                                    <div className='list-4'>
                                        <div>Heading3</div>
                                        <li className="list-item">List1</li>
                                        <li className="list-item">List2</li>
                                        <li className="list-item">List3</li>
                                        <li className="list-item">List4</li>
                                        <li className="list-item">List5</li>
                                        <li className="list-item">List6</li>
                                    </div>
                                </ul>
                            </ul>
                        </li>
                        <li className="nav-item">Our Technology
                            <ul className="sub-list-4">
                                <ul className="list">
                                    <div className='list-1'>
                                        <div>Heading4</div>
                                        <li className="list-item">List1</li>
                                        <li className="list-item">List2</li>
                                        <li className="list-item">List3</li>
                                        <li className="list-item">List4</li>
                                        <li className="list-item">List5</li>
                                        <li className="list-item">List6</li>
                                    </div>
                                </ul>
                                <ul className="list">
                                    <div className='list-2'>
                                        <div>Heading4</div>
                                        <li className="list-item">List1</li>
                                        <li className="list-item">List2</li>
                                        <li className="list-item">List3</li>
                                        <li className="list-item">List4</li>
                                        <li className="list-item">List5</li>
                                        <li className="list-item">List6</li>
                                    </div>
                                </ul>
                                <ul className="list">
                                    <div className='list-3'>
                                        <div>Heading4</div>
                                        <li className="list-item">List1</li>
                                        <li className="list-item">List2</li>
                                        <li className="list-item">List3</li>
                                        <li className="list-item">List4</li>
                                        <li className="list-item">List5</li>
                                        <li className="list-item">List6</li>
                                    </div>
                                </ul>
                                <ul className="list">
                                    <div className='list-4'>
                                        <div>Heading4</div>
                                        <li className="list-item">List1</li>
                                        <li className="list-item">List2</li>
                                        <li className="list-item">List3</li>
                                        <li className="list-item">List4</li>
                                        <li className="list-item">List5</li>
                                        <li className="list-item">List6</li>
                                    </div>
                                </ul>
                            </ul>
                        </li>
                        <li className="nav-item">Who We Are
                            <ul className="sub-list-5">
                                <ul className="list">
                                    <div className='list-1'>
                                        <div>Heading5</div>
                                        <li className="list-item">List1</li>
                                        <li className="list-item">List2</li>
                                        <li className="list-item">List3</li>
                                        <li className="list-item">List4</li>
                                        <li className="list-item">List5</li>
                                        <li className="list-item">List6</li>
                                    </div>
                                </ul>
                                <ul className="list">
                                    <div className='list-2'>
                                        <div>Heading5</div>
                                        <li className="list-item">List1</li>
                                        <li className="list-item">List2</li>
                                        <li className="list-item">List3</li>
                                        <li className="list-item">List4</li>
                                        <li className="list-item">List5</li>
                                        <li className="list-item">List6</li>
                                    </div>
                                </ul>
                                <ul className="list">
                                    <div className='list-3'>
                                        <div>Heading5</div>
                                        <li className="list-item">List1</li>
                                        <li className="list-item">List2</li>
                                        <li className="list-item">List3</li>
                                        <li className="list-item">List4</li>
                                        <li className="list-item">List5</li>
                                        <li className="list-item">List6</li>
                                    </div>
                                </ul>
                                <ul className="list">
                                    <div className='list-4'>
                                        <div>Heading5</div>
                                        <li className="list-item">List1</li>
                                        <li className="list-item">List2</li>
                                        <li className="list-item">List3</li>
                                        <li className="list-item">List4</li>
                                        <li className="list-item">List5</li>
                                        <li className="list-item">List6</li>
                                    </div>
                                </ul>
                            </ul>
                        </li>
                    </ul>
                </div>
                    <div className="proposal-p">
                        <Link to="/proposal" className='tdn'><button className="nav-item button">Get a Proposal</button></Link>
                    </div>
                <div className="menu"><a href="#" onClick={() => setShowNavItems(!showNavItems)}>&#8801;</a></div>
            </div>
        </div>
    )
}

export default Navigation
