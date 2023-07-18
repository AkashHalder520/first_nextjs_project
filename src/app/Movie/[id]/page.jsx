import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import styles from "@/app/styles/common.module.css"
export default async function  page({params}) {
  // console.log(params);
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${params.id}&lang=en`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '38279fd4bemsh8a839415267dcfbp1b7fcajsn25cd9f77733e',
		'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
	}
};


	const response = await fetch(url, options);
	const result = await response.json();
  const main_data = result[0].details;// on get request it comes with array format so specifying the loacation

	// console.log(result);

    return (
      <div className={styles.container}>
                <h2 className={styles.movie_title}>   Netflix \ <span> {main_data.type} </span> </h2>
                <div className={styles.card_section}>
                    <div>
                        <Image src={main_data.backgroundImage.url} alt={main_data.title} width={600} height={300} />
                    </div>
                    <div>
                        <h1>{main_data.title}</h1>
                        <p>{main_data.synopsis}</p>
                    </div>
                </div>
            </div>

  )
}
