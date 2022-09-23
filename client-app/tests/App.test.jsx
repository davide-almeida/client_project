import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import '@testing-library/jest-dom'
import Routes from '../src/routes'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import ClientPage from '../src/components/ClientPage'

describe('App', () => {

  const jsonResponse = {
    data: [
      {
        id: 1,
        first_name: "Davide",
        last_name: "Almeida",
        birth_date: "1990-01-01",
        created_at: "2022-09-19T12:02:02.575Z",
        updated_at: "2022-09-19T12:02:32.759Z"
      }
    ]
  }

  const response = {
    json: () => Promise.resolve(jsonResponse)
  }

  global.fetch = jest.fn(() => Promise.resolve(response))

  it('Verificar texto no App (ROLE)', async () => {
    render(<Routes />)
    const dialogDiv = screen.getByRole('heading')
    await waitForElementToBeRemoved(screen.getByText('Carregando...'))
    const listDiv = screen.getByRole('list')
    
    expect(dialogDiv).not.toHaveTextContent('asdasdasd')
    expect(dialogDiv).toHaveTextContent('Clientes')
    expect(listDiv).toHaveTextContent('Davide')
  })
  
  it('Visit wrong path', async () => {
    render(<ClientPage />)
    const history = createMemoryHistory()
    history.push('/clients/1')
    // render(
    //   <Router history={history}>
    //     <Routes />
    //   </Router>
    // )
    console.log('history', history.location.pathname)

    // expect(screen.getByText('Error 404')).toBeInTheDocument()
  })
})
