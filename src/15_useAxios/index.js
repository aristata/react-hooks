import { useAxios } from "./useAxios"

const UseAxiosSample = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json"
  })
  return (
    <div>
      <h1>{data && data.status}</h1>
      <h1>{loading && "loading"}</h1>
      <h1>{error && error.message}</h1>
      <button onClick={refetch}>Refetch</button>
    </div>
  )
  
}

export default UseAxiosSample
