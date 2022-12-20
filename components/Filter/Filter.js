import styles from './Filter.module.css'


export default function Filter({onCategory, onPrice}){


  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.Title}>Kategori Kursus</h1>
        <form onChange={onCategory} className={styles.filter}>
          <input className={styles.inpRadio} type={'radio'} value='Kartu Prakerja' name='category'/> Kartu Prakerja<br/>
          <input className={styles.inpRadio} type={'radio'} value='Mahir Digital' name='category'/> Mahir Digital<br/>
          <input className={styles.inpRadio} type={'radio'} value='Mahir Teknologi' name='category'/> Mahir Teknologi<br/>
        </form>
        <hr className={styles.gapContainer}></hr>
        <h1 className={styles.Title}>Rentang Harga</h1>
        <div className={styles.harga}>
          <form onChange={onPrice} className={styles.filter}>
          <input className={styles.inpRadio} type={'checkbox'} value='opt1'/> Gratis<br/>
          <input className={styles.inpRadio} type={'checkbox'} value='opt2'/> lebih dari Rp.100.000<br/>
          <input className={styles.inpRadio} type={'checkbox'} value='opt3'/> lebih dari Rp.500.000<br/>
          </form>
        </div> 
        <hr className={styles.gapContainer}></hr>
        
      </div>
    </>
  )
}