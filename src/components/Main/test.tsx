import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('shoud render the heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
  })

  it('shoud render the colors correcty', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
