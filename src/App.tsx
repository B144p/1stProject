import { useRoutes } from 'react-router-dom'
import './App.css'
import GenerateRouterScope from './router'

const App = () => {
  return (
    <PageRender />
  )
}

const PageRender = () => {
  const routers = GenerateRouterScope()
  const ROUTER_SCOPE = useRoutes(routers)

  // let [searchParams, setSearchParams] = useSearchParams()
  // useEffect(() => {
  //   setSearchParams({ ley: 'value' })
  // }, [])


  return ROUTER_SCOPE
}

export default App
