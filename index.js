    var socket = io()

    $(() => {
        $("#send").click(() => {
            var message = { name: $("#name").val(), message: $("#message").val()}
            postMessages(message)
        })
        getMessages()
    })

    socket.on('message', addMessage)

    function addMessage(message){
        $("#messages").append(`<div class="message-container p-2 mb-3 rounded"><h4> ${message.name} </h4> <p> ${message.message} </p></div>`)
    }

    function getMessages() {
        $.get('http://localhost:3000/messages', (data) => {
            data.forEach(addMessage);
        })
    }

    function postMessages(message) {
        $.post('http://localhost:3000/messages', message)
    }