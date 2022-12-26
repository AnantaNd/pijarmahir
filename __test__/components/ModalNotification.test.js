import "@testing-library/jest-dom"
import { render, screen } from '@testing-library/jest-dom'
import ModalNotification from "../../components/Modal/ModalNotification/ModalNotification"

describe('ModalNotification', () => { 
  it('render children button', ()=>{
    render(<ModalNotification/>)
    const modal = screen.getByRole('h2')

    expect(modal).toHaveTextContent('Kamu Belum Memiliki Transaksi')
  })
})