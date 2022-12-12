import defaultAxios from "axios"
import { useEffect, useState } from "react"

export const useAxios = (options, instance = defaultAxios) => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    data: null
  })
  const [trigger, setTrigger] = useState(0)
  const refetch = () => {
    setState({
      ...state,
      loading: true
    })
    setTrigger(Date.now())
    
  }
  useEffect(() => {
    if (!options.url) {
      return
    }
    instance(options).then(data => {
      setState({
        ...state,
        loading: false,
        data
      })
    })
    .catch(error => {
      setState({
        ...state,
        loading: false,
        error
      })
    })
  }, [trigger])
  return { ...state, refetch }
}
