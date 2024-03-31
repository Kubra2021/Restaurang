
const database = {
  admin: [
    { id: 1, logIn: 1 },
  ],
  items: [
    
  ],
};

export async function getAll(collection) {

  try {
    const response = await fetch(`http://localhost:3000/${collection}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error reading events data:', error);
  }

}

export async function getOne(collection, id) {
 
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = database[collection].find((item) => item.id === id);
      resolve(result);
    }, 500);
  });
}

export async function create(collection, data) {
  const response = await fetch(`http://localhost:3000/${collection}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

export async function update(collection, id, updatedData) {
  const response = await fetch(`http://localhost:3000/${collection}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  });
};

export async function remove(collection, id) {
  const response = await fetch(`http://localhost:3000/${collection}/${id}`, {
    method: 'DELETE',
  });
}
export async function fetchData() {
  try {
    const response = await fetch('./db.json'); 
    if (!response.ok) {
      throw new Error('Failed to fetch menu data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching menu data:', error);
    throw error;
  }
}