import Button from '../../Button/Button'
import Input from '../../Input/Input'
import styles from './CardNewProfile.module.css'

export default function CardNewProfile(){
  return(
    <div className={styles.container}>
      <h1 className={styles.title}>data profil</h1>
      <p className={styles.subtitle}>lengkapi profil sesuai identitas kamu</p>
      <Input onChangeInput={(e) => validate(e)} label="nama-legkap" name="name" type="text" />
      <p>pastikan sesuai dengan ktp untuk persyaratan settifikat</p>
      <Input onChangeInput={(e) => validate(e)} label="no-telepon" name="tel" type="tel" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}"/>
      <Button buttonType='primary'>Selesai</Button>
    </div>
  )
}