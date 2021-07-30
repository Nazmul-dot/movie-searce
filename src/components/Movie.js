import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Item from './Item'
const Movie = () => {
    const [data, setdata] = useState('')
    const [movie, setmovie] = useState('')
    const [nmovie, setnmovie] = useState(false)
    const cheak = async (e) => {
        e.preventDefault();
        const result = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=dac3864f&s=${movie}`)
        console.log(result.data.Search)
        if (result.data.Search) {
            setdata(result.data.Search)
            setnmovie(false)
        } else {
            setnmovie(true)
            setdata('')
        }
        setmovie('')
    }
    return (
        <>
            <h1 className='text-center mt-5 text-capitalize text-shadow fw-bolder ms-3 h-100
            animate__animated animate__bounce' style={{ color: '#20c997' }}>search your favourit Movie 📽️</h1>
            <div className='container mt-5'>
                <div className='row' >
                    <div className='col-md-6  mx-auto'>
                        <form className='row g-3'>
                            <div className='col-8  mx-auto form-floating'>
                                <input type="text" class="form-control" id="floatingInput"
                                    placeholder="food" onChange={(e) => setmovie(e.target.value)}
                                    value={movie}
                                />
                                <label for="floatingInput" className='ms-3'>Food Name</label>
                            </div>
                            <div className='col-5  mx-auto'>
                                <input type="submit" value='Search' class="form-control btn btn-info" aria-label="First name"
                                    onClick={cheak}
                                />
                            </div>
                        </form>
                    </div>
                    <div className='w-100'></div>
                    <div className='col-md-10  mx-auto my-5'>
                        <div className='row'>
                            {
                                nmovie && (
                                    <h1 className='d-inline py-3 my-3 text-center shadow-lg rounded-3 ' >Your Searching Movie not here</h1>
                                )
                            }
                            {
                                data ? (
                                    data.map((item, id) => {
                                        return (<Item
                                            item={item}
                                            key={id}
                                        />)
                                    })
                                ) : (
                                    <>
                                        {
                                            !nmovie && (
                                                <h1 className='d-inline py-3 text-center shadow-lg rounded-3' >Search Your Favourit Movie</h1>
                                            )
                                        }

                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Movie
