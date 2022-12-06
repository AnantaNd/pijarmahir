import { FaFilter } from 'react-icons/fa'
import styles from './Sort.module.css'

export default function Sort({onSorting}){
  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <FaFilter className={styles.icon_filter} size={18}></FaFilter>
        <h1 className={styles.title}>Filter</h1>
      </div>
      <select onChange={onSorting} className={styles.sort}>
        <option value="">Pilih Sorting</option>
        <option value="1">Harga Tertinggi</option>
        <option value="2">Harga Terendah</option>
        <option value="3">Terbaru</option>
        <option value="4">Rating Tertinggi</option>
        <option value="5">Rating Terendah</option>
      </select>
    </div>
  )
}