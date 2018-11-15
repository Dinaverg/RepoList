function searchUser() {
    console.log("yoyo");
    $('form').submit(event => {
        event.preventDefault()
        let user = $("#search").val()
        fetch(`https://api.github.com/users/${user}/repos`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error(response.statusText)
            })
            .then(responseJson => parseResponse(responseJson))
            .catch(error => console.log(error))
    })
}

function parseResponse(obj) {
    console.log(obj)
}

$(searchUser)

//`/users/:username/repos/`