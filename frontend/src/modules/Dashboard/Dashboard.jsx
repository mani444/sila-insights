import { useSelector } from 'react-redux';
import { authSelector } from '../../redux/auth/authSlice';

const Dashboard = () => {
  const { userInfo } = useSelector(authSelector);
  const userType = userInfo?.userType;

  return (
    userType === "tech" ? (
      <div>Tech Dashboard</div>
    ) : (
      <div>Sales Dashboard</div>
    )
  );
}

export default Dashboard