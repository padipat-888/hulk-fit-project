import { useCookies } from 'react-cookie';
  
const Dashboard = () => {
  const [cookies] = useCookies(['user']);
  const fullname = cookies.user.fullname
  console.log(fullname)
  return (
    <div>This is Dashboard Page</div>
  )
}

export default Dashboard