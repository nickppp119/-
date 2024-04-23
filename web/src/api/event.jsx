import toast from 'react-hot-toast';


const IP = process.env.REACT_APP_IP;
const PORT = process.env.REACT_APP_PORT;

const create = (title, content, token) => {
  const url = `http://${IP}:${PORT}/api/event/create`;


  console.log(title, content, token);

  const requestOptions = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      'title': title,
      'content': content
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

const remove = (id, token) => {
  const url = `http://${IP}:${PORT}/api/event/remove`;

  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      'event_id': id
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

const update = (id, title, content, token) => {
  const url = `http://${IP}:${PORT}/api/event/update`;

  console.log(id, title, content, token);

  const requestOptions = {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      'event_id': id,
      'title': title,
      'content': content
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

const event = {
  create,
  remove,
  update
}

export default event;