import styles from '@/app/styles/common.module.css'
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return(<section className={styles.loading_section}>
        <div className={styles.loading}></div>
        </section>
    
   ) 
    
    
  }