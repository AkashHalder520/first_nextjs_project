import Link from 'next/link'
import React from 'react'
import Moviecard from '../components/Moviecard';
import style from '@/app/styles/common.module.css'

export default async function Movie() {
  const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '38279fd4bemsh8a839415267dcfbp1b7fcajsn25cd9f77733e',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
  
  // try {
    const response = await fetch(url, options);
    const result = await response.json();
    const main_data= result.titles
    // console.log(data);
  // } catch (error) {
  //   console.error(error);
  // }
  
  return (
    <>
    <section className={style.movieSection}>
    <div className={style.container}>
      <h1>Series and Movies</h1>
    <div className={style.card_section}>
    {
      main_data.map((data)=>{
        return <Moviecard key={data.id} {...data}/> //spead operator to send all data
      })
    }
    </div>
    </div>
    </section>
    </>
  )
}
