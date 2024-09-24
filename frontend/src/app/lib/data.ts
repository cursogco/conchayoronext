const server = 'http://localhost:3001';

export async function getData(resource: string) {
    try {
      const data = await fetch(`${server}/${resource}`, { method: 'get' });
      const result = await data.json()
      return result;
    } catch (error) {
      throw `Error while getting data: ${error}`;
    }
  }
 
export async function getDataById(resource: string, id: string) {
    try {
      const data = await fetch(`${server}/${resource}/${id}`, { method: 'get' });
      const result = await data.json()
      return result;
    } catch (error) {
      throw `Error while getting data: ${error}`;
    }
  }

export async function postData(resource: string, body: string) {
    try {
        const data  = await fetch(`${server}/${resource}`, { method: 'post', body: body })
       .then(response => response.json());
      } catch (error) {
        throw `Error while posting data: ${error}`;
      }
    
}

export async function putData(resource: string, id: string, body: string) {
    const url = `${server}/${resource}/${id}`;
    try {
      await fetch(url, { method: 'put', body: body })
      .then(response => response.json());
    } catch (error) {
      throw `Error while putting data: ${error}`;
    }
  }
  

export async function deleteData(resource: string, id: string) {
    const url = `${server}/${resource}/${id}`;
    try {
      await fetch(url, { method: 'delete'})
      .then(response => response.json());
    } catch (error) {
      throw `Error while deleting data: ${error}`;
    }
  }  

