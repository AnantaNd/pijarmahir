import { BiSliderAlt } from "react-icons/bi";
import styles from './Sort.module.css';

export default function Sort({onSorting}){
  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <BiSliderAlt className={styles.icon_filter} size={19}></BiSliderAlt>
        <h1 className={styles.title}>Filter</h1>
      </div>
      <select onChange={onSorting} className={styles.sort}>
        <option value="">Pilih Sorting</option>
        <option value="maxPrice">Harga Tertinggi</option>
        <option value="lowPrice">Harga Terendah</option>
        {/* <option value="new">Terbaru</option> */}
        <option value="maxRating">Rating Tertinggi</option>
        <option value="lowRating">Rating Terendah</option>
      </select>
    </div>
  )
}