export async function getQuestionsAPI() {
    var response = await fetch("http://localhost:3333/questions", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })

    let data = await response.json();
    return data;
}