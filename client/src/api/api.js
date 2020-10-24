const api_url = 'http://localhost:5500';

export async function listProductEntries() {
    const response = await fetch(`${api_url}/`);
    return response.json();
}