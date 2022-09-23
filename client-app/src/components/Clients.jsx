import React from 'react'
import getClients from '../requests/client'
import { Link } from 'react-router-dom'

const Clients = () => {
  const [clients, setClients] = React.useState(null)

  React.useEffect(() => {
    getClients()
      .then(({ data }) => { setClients(data)
        // console.log(data)
      })
      .catch((error) => {throw error})
  }, [])

  if(!clients) {
    return <p>Carregando...</p>
  }

  return (
    <ul>
      { clients.map((client) => <Link key={client.first_name} to={`/client/${client.id}`}><li>{client.first_name}</li></Link>) }
    </ul>
  )
}

export default Clients
