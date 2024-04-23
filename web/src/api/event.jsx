import toast from 'react-hot-toast';
import dayjs from 'dayjs';


const IP = process.env.REACT_APP_IP;
const PORT = process.env.REACT_APP_PORT;

const create = (title, content, token) => {
  const url = `http://${IP}:${PORT}/api/event/create`;

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

const search = (date, token, setEventList) => {
  const url = `http://${IP}:${PORT}/api/event/search/date/${date}`;

  const requestOptions = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };

  fetch(url, requestOptions).then(async (response) => {
    const data = await response.json();

    if (response.ok) {
      data.map((item) => item.date = dayjs(date).format('YYYY-MM-DD'))
      setEventList(data);
    } else {
      toast.error(data.detail);
    }
  });
}

const event = {
  create,
  remove,
  update,
  search
}

export default event;