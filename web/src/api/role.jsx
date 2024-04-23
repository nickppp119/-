import toast from 'react-hot-toast';


const IP = process.env.REACT_APP_IP;
const PORT = process.env.REACT_APP_PORT;

const search = (setRoleList) => {
    const url = `http://${IP}:${PORT}/api/role/search`;
  
    const requestOptions = {
      method: 'GET'
    };
  
    fetch(url, requestOptions).then(async (response) => {
      const data = await response.json();
  
      if (response.ok) {
        setRoleList(data);
      } else {
        toast.error(data.detail);
      }
    });
  }
  
  const role = {
    search
  }
  
  export default role;