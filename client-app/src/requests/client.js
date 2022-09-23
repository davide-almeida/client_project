// export default function getClients() {
  // const result = fetch('http://localhost:3000/clients')
  //   .then(data => data.json()).then(data => data)

  // return result
// }

const getClients = async () => {
  const response = await fetch('http://localhost:3000/clients')
  const data = await response.json();

  return data
}

export default getClients;

// export default async () => {

// }
