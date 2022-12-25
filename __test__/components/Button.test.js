import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom"
import Button from '../../components/Button/Button'

describe('Button', () => {
  it('renders a children button', () => {
    render(<Button children={"Button"} />)

    const button = screen.getByRole('button')

    expect(button).toHaveTextContent("Button")
  })
})