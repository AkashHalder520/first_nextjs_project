import React from 'react'
import styles from '@/app/styles/common.module.css'
import Image from 'next/image';
import Link from 'next/link';
export default function Moviecard(data) {
    // console.log(data);
    const {id,type,title, synopsis}=data.jawSummary;
  return (
    <>
    <div className={styles.card}>
        <div className={styles.card_image}> 
            <Image src={data.jawSummary.backgroundImage.url} alt={title} width={250} height={200}/>
        </div>
        <div className={styles.card_data}>
            <h2>{title.slice(0,20)}</h2>
            <p>{synopsis.slice(0,66)} .....</p>

            <Link href={`/Movie/${id}`}>

                <button>
                    read more
                </button>

            </Link>
        </div>
    </div>
    </>
  )
}
// to set the image we have to set the domain in next.config ... as shown in the 