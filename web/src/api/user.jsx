import toast from 'react-hot-toast';


const IP = process.env.REACT_APP_IP;
const PORT = process.env.REACT_APP_PORT;

const login = (username, password, userState, navigate) => {
  const url = `http://${IP}:${PORT}/api/user/login`;

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

const create = (username, password, role, token) => {
  const url = `http://${IP}:${PORT}/api/user/create`;

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
  const url = `http://${IP}:${PORT}/api/user/remove`;

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

const update = (username, password, role, token) => {
  const url = `http://${IP}:${PORT}/api/user/update`;

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

const search = (setUserList, username, token) => {
  const url = `http://${IP}:${PORT}/api/user/search`;

  const requestOptions = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };

  fetch(url, requestOptions).then(async (response) => {
    const data = await response.json();

    if (response.ok) {
      const newData = data.filter((item) => item.username !== username);

      setUserList(newData);
    } else {
      toast.error(data.detail);
    }
  });
}

const user = {
  login,
  create,
  remove,
  update,
  search
}

export default user;