import { useSelector } from 'react-redux';

export default function AuthHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = useSelector((state) =>{
        console.log("state=" +state)
    });
    if (user && user.accessToken) {
      // for Node.js Express back-end
      return { 'x-access-token': user.accessToken };
    } else {
      return {};
    }
  }
