import React from 'react'
import heroStyles from "@/app/styles/herosection.module.css"
import styles from "@/app/styles/common.module.css"
import Image from 'next/image'
import Link from 'next/link'
export default function Herosection(props) { // we will use this section in multiple pages
    console.log(props,"propsxxx");
    const title=props.title
    const imageUrl=props.imageUrl
    return (
        <main className={heroStyles.main_section}>
            <div className={styles.container}>
                <div className={styles.grid_two_section}>
                    <div className={heroStyles.hero_content}>
                        <h1> {title} </h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur eius quibusdam quod fuga consectetur ullam soluta perspiciatis dolor assumenda velit, natus consequuntur cum autem quasi obcaecati sit minima aliquid dolorem!
                        </p>
                        
                        <Link href="/Movie">
                        <button>
                            Explore Movies
                        </button>

                        </Link>
                       

                    </div>
                    <div className={heroStyles.hero_image}>
                        <Image src={imageUrl} alt='no image' width={500} height={500} />
                    </div>
                </div>
            </div>
        </main>
    )
}
