'use strict'

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
    $(".results").empty()
    console.log(obj)
    for (let i=0; i < obj.length; i++) {
        $(".results").append(`<p>${obj[i].full_name}</p> <p>${obj[i].html_url}</p>`)
    }
    $(".results").css("display","block")
}

$(searchUser)