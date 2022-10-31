import React from 'react'
import "./navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbarComponent">
            <span className="logo">EmranBooking.Com</span>
            <div className="navItems">
                <button className="navButton2">INR</button>
                {/* <img src="data:image/png;base64,iVBORw0KG
              goAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAkFBMVEX/mTMSiAf/////kAsAfQAAAIgAAIUAAH0AAIL29vro6PIAAIDj4+8AAHMAAHby8veoqMu9vdiGhrlTU6HJyd/T0+WMjLwAAHRFRZudnca4uNWsrM6ystKUlMFMTJ5ubq0qKpEiIo9YWKRmZqnZ2egpKZF9fbU6OpfFxd0yMpSbm8USEow/P5mJibseHo47O5fLhzNOAAAEYElEQVR4nO3bWXfqNhSGYapWg+VBxlPMHGMIhoTT///vumUytNlc9NxYrJXvWYuZC/HGlo1xZjMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgN/0J3w3E/AdmnBowqEJhyYcmnCP0MTOm7597p7bfjO3oQcjHqCJ3XTaGKWklEoZo7tN8CyBm9SlNj6GVHEcK39HGl3WYQcVtIkttY9g+hddusSV+qU3PpEugy4rIZssqIgy8UVEYnDiINxA9y6xoWf1IuC4AjbZx/TZi9XJiXFdGfxVLdxpVVCreB9uYMGaRB0tDq2N/P2lv1p93ovsll7rolBDC9UkounU0BpS+QdDQlcNXZJxYalorTI034aKEqoJLSV6XTgh1vQg2tDVji4bn4GeccWaVqwu0NgCNSlpxhiXCZH7TUxJl/b91ubj8wNFKcMMLkyTRSzN+jarij1degrzSjn698d+xl0bGYfZ+gRpYjVtcWj+8KuMyGlyzenDa0pFi8hqXEwuNL/Q1kcH2U8J0mSr1PZCc4nwy4WgufTwLEQqxPOB5l7x/ry7+LeFGF6IJpX+WACis59l6YOnLkojR1m2NMNGp9sWhxYnXQUYX4gmrVJNdPuwTlEcMxfn3D25/CzmhlIoN75WRY1SbYDxBWiSaGlo32w17qQl2UEstSjebGbfCqGX4pD5vZXx5aWROpl+gAGaXGmD4v/8tvT7JnU6CLWrMmqSVTslhtTv6a/Hb4EtbZ6u0w8wQBPagV3c1o5c0vIyT1d1anWSJdqm9Sqd0/Ihb/sobmGkmX6A0zehVUd93Hetmos8rV6Kpuqqa/FSpbmYq9Z9vEGFWHmmb7I2ahfVy+q2bVnq13p4ssckv+bJ0T4N9asevwiKqFrW0U6Z9eQjnL5JoVRBN8mm7PMD3enTwnb22r61V7otUr9vcsh35ebw9eZpTd9kr2R22xDbS5eei8oWR7v1B5LM1h4LWxXn9Nfltv9SZVLtJx/h9E3OSpWfRwFc/pbpJqFNkWeuSaOzv/PP6SQqlTpPPsLpm0ip/3VgxDmbVHmrxiaqzavEOvf1eqSlnHyE0zdRMrbJsNrstlJn6VOWZb+uJ3lzao70OEuzTG77Jh8ONv7aSE0GywmH+YR7xO3O6cdtd/7v/knzg/ZPsB/L4fvOHb/3vfh1+gHi+AmH42wcjsdyOG7PPcjvO8fx953jz/19B78D3oPfi+/AeQV34PwTDucp3XE7ny3B+Wz/gfMe78hxfiyH86jvwfn29+D/Mu5y803fHrsj/n/ncaEJhyYcmnBowqEJN/sLvpv9Ad+hCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpw
              aMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpw/wA1JRlXh9jshwAAAABJRU5ErkJggg==" alt="" className="logpic" /> */}
                <FontAwesomeIcon icon={faCircleQuestion} className="circle"/>
                <button className="navButton1">List your property</button>
                <button className="navButton">Register</button>
                <button className="navButton">Sing In</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
