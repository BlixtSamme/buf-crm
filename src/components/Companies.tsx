import { useEffect, useState } from "react"
import SummaryList from "./SummaryList"


export default function Companies() {
  const [companies, setCompanies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  
  useEffect(() => {
    fetch('http://localhost:3001/api')
      .then((res) => res.json())
      .then((data) => {
        setCompanies(data)
        console.log(data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        console.log(error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if(error != null) {
    return <div>Error: error</div>
  }

  else {
    return (
      SummaryList({data: ["company1", "company2", "company3"]})
    )
  }

  

}