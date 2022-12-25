import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom"
import ModalCart from '../../components/Modal/ModalCart/ModalCart'

describe('Button', () => {
  it('renders a children button', () => {
    render(<ModalCart />)

    const modal = screen.getByRole('p')

    expect(modal).toHaveTextContent("Kamu Belum Memiliki Transaksi")
  })
})