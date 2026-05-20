export const baseUrl = "http://localhost:3001";


export function registerUser(newUser) {
    return fetch(`${baseUrl}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
    }).then((response) => response.json())
}


export function loginUser(email, password) {
    return fetch(`${baseUrl}/users?email=${email}&password=${password}`)
        .then((response) => response.json())
        .then((users) => {
            const user = users[0];
            if (!user) {
                throw new Error("Invalid email or password");
            }

            localStorage.setItem("userId", user.id);
            return user;
        })
}

export function logOutUser() {
    localStorage.removeItem("userId");
}
