import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // rederizar o component
    const { container } = render(<Main />)

    // busca o elemento e verifica a existência dele
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    //gerar um snapshot
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the color correctly', () => {
    // rederizar o component
    const { container } = render(<Main />)

    // verifica se o background-color está correto
    expect(container.firstChild).toHaveStyle({ 'background-color': '#028090' })
  })
})
