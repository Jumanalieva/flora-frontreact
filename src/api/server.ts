export const server_calls = {
    get: async () => {
      const response = await fetch('https://54.162.61.238:5000/api/blogs', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch data from the server');
      }
  
      return await response.json();
    },
  
    create: async (data: any = {}) => {
      const response = await fetch('https://54.162.61.238:5000/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error('Failed to create new data on the server');
      }
  
      return await response.json();
    },
  
    update: async (id: string, data: any = {}) => {
      const response = await fetch(`https://54.162.61.238:5000/api/blogs/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error('Failed to update data on the server');
      }
  
      return await response.json();
    },
  
    delete: async (id: string) => {
      const response = await fetch(`https://54.162.61.238:5000/api/blogs/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete data from the server');
      }
    }
  };
  


  export const serverindustry_calls = {
    get: async () => {
      const response = await fetch('https://54.162.61.238:5000/api/culture', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch data from the server');
      }
  
      return await response.json();
    },
  
    create: async (data: any = {}) => {
      const response = await fetch('https://54.162.61.238:5000/api/culture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error('Failed to create new data on the server');
      }
  
      return await response.json();
    },
  
    update: async (id: string, data: any = {}) => {
      const response = await fetch(`https://54.162.61.238:5000/api/culture/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error('Failed to update data on the server');
      }
  
      return await response.json();
    },
  
    delete: async (id: string) => {
      const response = await fetch(`https://54.162.61.238:5000/api/culture/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete data from the server');
      }
    }
  };
  

  export const server_culinary_calls = {
    get: async () => {
      const response = await fetch('https://54.162.61.238:5000/api/culinary', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch data from the server');
      }
  
      return await response.json();
    },
  
    create: async (data: any = {}) => {
      const response = await fetch('https://54.162.61.238:5000/api/culinary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error('Failed to create new data on the server');
      }
  
      return await response.json();
    },
  
    update: async (id: string, data: any = {}) => {
      const response = await fetch(`https://54.162.61.238:5000/api/culinary/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error('Failed to update data on the server');
      }
  
      return await response.json();
    },
  
    delete: async (id: string) => {
      const response = await fetch(`https://54.162.61.238:5000/api/culinary/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete data from the server');
      }
    }
  };

  