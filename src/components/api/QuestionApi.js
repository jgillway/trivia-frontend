export function addQuestion(question) {
    return fetch("http://localhost:3333/questions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(question)
    })
    .then(response => {
        return response.text()
    })
}