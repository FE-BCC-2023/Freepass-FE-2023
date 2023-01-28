import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/movielist.css'
import Ig from '../../public/instagram.svg'
import Git from '../../public/github.svg'
import Lk from '../../public/linkedin.svg'
import Logo from '../../public/logo.png'

function Trending() {
  const [list, setList]= useState([])
  const [load, setLoad]= useState(true)
  const [time, setTime]= useState('day')
  const [expand, setExpand]= useState(0)
  const [clicked, setClicked]= useState(false)
  const [detail, setDetail]= useState('Show more')

  function getExpanded(id) {

    if(clicked === true) {
      setClicked(false)
      setExpand(0)
      // if(id == expand) setDetail('Show more')
    }
    else {
      setClicked(true)
      setExpand(id)
      // if (expand == 0) setDetail('Show less')
    }
  }

  function getType(show) {
    if(show.media_type === 'movie') return show.title
    else return show.name
  }

  function getRelease(show) {
    if(show.media_type === 'movie') return show.release_date
    else return show.first_air_date
  }

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/tv/1?api_key=9e89dc1810e00461d6f59011e04175ed&language=en-US`).then((movies) => {
      setList(movies.data)
      setTimeout(() => setLoad(false), 1000)
      console.log(movies.data)
    })
  }, [time])

  return (
    <>
    {load ? (
      <div className="container-svg">
        <svg className='svg' viewBox='0 0 50 50'>
          <circle
            cx={25}
            cy={25}
            r={20}
          />
        </svg>
      </div>
    ) 
    : 
    (
      <>
        <div className="content">
          <nav>
            <ul>
              <li>
                <Link className='link' to='/'>
                  Home
                </Link>
              </li>
              <li
              onClick={() => {
                setTime('day')
                setLoad(true)
              }}
              >
                Day     
              </li>
              <li
              onClick={() => {
                setTime('week')
                setLoad(true)
              }}
              >
                Week
              </li>
            </ul>
          </nav>
          <h1 className='trend-txt'>Trending Shows</h1>
          <div className="card-container">
            {
              list.map((show) => {
                return (
                 console.log(show.name)
                )
              })
            }
            </div>
        </div>
        <footer>
          <div className="brand">
            <img src={Logo} alt="" />
            <p>Rizz Movie List</p>
          </div>
          <div className="kontak">
            <a target='_blank' href="https://www.instagram.com/syafi_islam/"><img src={Ig}  /></a>
            <a target='_blank' href="https://github.com/BlueFZ/"><img src={Git} /></a>
            <a target='_blank' href="https://www.linkedin.com/in/muhammad-syafi-513588241/"><img src={Lk} /></a>
          </div>
        </footer>
      </>
    )}
   </>
  )
}

export default Trending