import React from 'react'
import { useParams } from 'react-router-dom'
import '../index.css'
import Header from './Header'

function SingleClient() {
  const { id } = useParams()
  const [client, setClient] = React.useState(null)
  
  React.useEffect(() => {
    const getClient = async () => {
      const response = await fetch(`http://localhost:3000/clients/${id}`)
      const data = await response.json();

      return data
    }

    getClient().then((client) => setClient(client.data))
  }, [])

  return (
    <>
      <Header title="Cliente" />
      
      <div id="container" className="center">
        <div className="header-grid">
          First Name
        </div>

        <div>
          { client?.first_name }
        </div>

        <div className="header-grid">
          Last Name
        </div>

        <div>
          { client?.last_name }
        </div>
      </div>
    </>
  )
}

export default SingleClient
