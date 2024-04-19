import toast from 'react-hot-toast';


const update = (index, title, content, role, token) => {
  const url = 'http://127.0.0.1:443/api/event/update';

  const requestOptions = {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      'index': index,
      'title': title,
      'content': content,
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

const create = (title, content, role, token) => {
    const url = 'http://127.0.0.1:443/api/event/create';
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        'title': title,
        'content': content,
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
  const remove = (index, token) => {
    const url = 'http://127.0.0.1:443/api/event/remove';
  
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        'index': index
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
  update,
  create,
  remove
}

export default event;