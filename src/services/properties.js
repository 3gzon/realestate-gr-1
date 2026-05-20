export const baseUrl = "http://localhost:3001";

export function getProperties() {
    return fetch(`${baseUrl}/properties`).then((response) => {
        if (!response.ok) {
            throw new Error(`Failed to fetch properties: ${response.status} ${response.statusText}`);
        }

        return response.json();
    })
}