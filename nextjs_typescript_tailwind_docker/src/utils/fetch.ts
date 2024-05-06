// Example fetch api function
export default async function fetchApi() {
    try {
        const response = await fetch('https://httpbin.org/get')

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Failed to fetch api:', error);
    }
}
