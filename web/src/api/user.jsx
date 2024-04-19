import toast from 'react-hot-toast';


const login = (username, password, userState, navigate) => {
  const url = 'http://127.0.0.1:443/api/user/login';

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      'username': username,
      'password': password
    })
  };

  fetch(url, requestOptions)
    .then(async (response) => {
      const data = await response.json();
  
      if (response.ok) {
        userState.setValue(data.detail);

        navigate('/');
      } else {
        toast.error(data.detail);
      }
    });
}

const update = (username, password, role, token) => {
  const url = 'http://127.0.0.1:443/api/user/update';

  const requestOptions = {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      'username': username,
      'password': password,
      'role': role
    })
  };

  fetch(url, requestOptions).then(async (response) => {
    const data = await response.json();

    if (response.ok) {
      toast.success(data.detail);
    } else {
      toast.error(data.detail);
    }
  });
}
const create = (username, password, role, token) => {
    const url = 'http://127.0.0.1:443/api/user/create';
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        'username': username,
        'password': password,
        'role': role
      })
    };
  
    fetch(url, requestOptions).then(async (response) => {
      const data = await response.json();
  
      if (response.ok) {
        toast.success(data.detail);
      } else {
        toast.error(data.detail);
      }
    });
  }
  const remove = (username, token) => {
    const url = 'http://127.0.0.1:443/api/user/delete';
  
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        'username': username,
      })
    };
  
    fetch(url, requestOptions).then(async (response) => {
      const data = await response.json();

      if (response.ok) {
        toast.success(data.detail);
      } else {
        toast.error(data.detail);
      }
    });
  }

const user = {
  login,
  update,
  create,
  remove
}

export default user;