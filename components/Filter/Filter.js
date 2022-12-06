import styles from './Filter.module.css'


export default function Filter({onRating, onCategory, onPrice, onMitra}){


  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.Title}>Kategori Kursus</h1>
        <form onChange={onCategory}>
          <div className={styles.radio}>
            <label>
              <input type="radio" value="option1" />
              Kartu Prakerja
            </label>
          </div>
          <div className={styles.radio}>
            <label className={styles.label}>
              <input type="radio" value="option2" />
              Mahir Digital
            </label>
          </div>
          <div className={styles.radio}>
            <label>
              <input type="radio" value="option3" />
              Mahir Teknologi
            </label>
          </div>
        </form>
        <hr className={styles.gapContainer}></hr>
        <h1 className={styles.Title}>Rentang Harga</h1>
        <div className={styles.harga}>
          <form onChange={onPrice}>
            <div className={styles.radio}>
              <label>
                <input type="radio" value="option1" />
                Gratis
              </label>
            </div>
            <div className={styles.radio}>
              <label>
                <input type="radio" value="option2" />
                lebih dari Rp.100.000
              </label>
            </div>
            <div className={styles.radio}>
              <label>
                <input type="radio" value="option3" />
                Rp.100.000 - Rp.499.999
              </label>
            </div>
            <div className={styles.radio}>
              <label>
                <input type="radio" value="option3" />
                lebih dari Rp.499.999
              </label>
            </div>
          </form>
        </div> 
        <hr className={styles.gapContainer}></hr>
        <h1 className={styles.Title}>Rating</h1>
        <div className={styles.rating}>
          <input onChange={onRating} type="checkbox" value="lebihDari4" name="lebihDari4" />4 keatas
        </div> 
        <hr className={styles.gapContainer}></hr>
        <h1 className={styles.Title}>Mitra Pelatihan</h1>
        <div className={styles.mitra}>
          <form onChange={onMitra}>  
            <div className={styles.checkbox}>
              <input type="checkbox" value="bakingworld" name="bakingworld" />baking world
            </div>
            <div className={styles.checkbox}>
              <input type="checkbox" value="cakap" name="cakap" />cakap
            </div>
          </form>
        </div> 
      </div>
    </>
  )
}