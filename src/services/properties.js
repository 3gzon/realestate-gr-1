export const baseUrl = "http://localhost:3001";

export function getProperties() {
    return fetch(`${baseUrl}/properties`).then((response) => {
        if (!response.ok) {
            throw new Error(`Failed to fetch properties: ${response.status} ${response.statusText}`);
        }

        return response.json();
    })
}


export function getPropertyById(id) {
    return fetch(`${baseUrl}/properties/${id}`).then((response) => {
        return response.json();
    })
}


export function createProperty(property) {
    return fetch(`${baseUrl}/properties`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(property)
    }).then((response) =>response.json)
}