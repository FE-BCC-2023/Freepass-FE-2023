import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/movielist.css'
import Magnify from '../../public/search.svg'
import Ig from '../../public/instagram.svg'
import Git from '../../public/github.svg'
import Lk from '../../public/linkedin.svg'
import Logo from '../../public/logo.png'

function MovieList() {
  const [list, setList]= useState([])
  const [page, setPage]= useState(1)
  const [expand, setExpand]= useState(0)
  const [clicked, setClicked]= useState(false)
  const [load, setLoad]= useState(true)

  function getExpanded(id) {

    if(clicked === true) {
      setClicked(false)
      setExpand(0)
    }
    else {
      setClicked(true)
      setExpand(id)
    }
  }

  function getData() {
    axios.get(`https://api.themoviedb.org/4/list/1?page=${page}&api_key=9e89dc1810e00461d6f59011e04175ed`).then((movies) => {
      setList(movies.data.results)
      setLoad(false)
    })
  }

  function getSearched(value) {
   
    if (value !== '') {
      axios.get(`https://api.themoviedb.org/3/search/movie?query=${value}&&api_key=9e89dc1810e00461d6f59011e04175ed`).then((filter) => {
      setList(filter.data.results)
      })
    }
    else if (value.length === 0) {
      getData()
    }
  }

  useEffect(() => {
    getData()
  }, [page])
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

                if (page !== 1) {
                  setPage(1)
                  setLoad(true)
                } else return 0
                
              }}
              >
                Page 1              
              </li>
              <li
              onClick={() => {
                if (page !== 2) {
                  setPage(2)
                  setLoad(true)
                } else return 0
              }}
              >
                Page 2
              </li>
              <li
              onClick={() => {
                if (page !== 3) {
                  setPage(3)
                  setLoad(true)
                } else return 0
              }}
              >
                Page 3
              </li>
            </ul>
          </nav>
          <div className='search-box'>
            <img src={Magnify} alt="" />
            <input 
              className='search'
              onChange={(input) => getSearched(input.target.value)}
            />
          </div>
          <h1>Movie Lists</h1>
          <div className="card-container">
            {
              list.map((movie) => {

                if (movie.poster_path === null || movie.overview === '') {
                  return
                }
                return (
                  
                 <div key={movie.id} className='card'>
                  <img className='thumbnail' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                  <p className='info'>
                      <span>⭐ {movie.vote_average}</span> <span>📅 {movie.release_date}</span> <span>👁️ {movie.popularity}</span>
                  </p>
                  <h3 className='judul-card'>{movie.title}</h3>
                  <div className="expand-container">
                    <button
                    className='btn-expand'
                    onClick={() => {
                      getExpanded(movie.id)
                    }}
                    >{movie.id === expand ? 'Show less' : 'Show more'}</button>
                    {
                      expand === movie.id &&
                      (
                        <p className='card-txt'>{movie.overview}</p>
                      )
                    }
                  </div>
                 </div>
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

export default MovieList
