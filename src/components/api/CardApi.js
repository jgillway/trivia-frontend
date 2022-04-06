export function getQuestions() {
    return fetch("http://localhost:3333/questions", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
    .then(response => {
        return response.json();
    })
}