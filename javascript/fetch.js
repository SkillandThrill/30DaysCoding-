fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(Response => {
        return Response.json()
    })

.then(data => console.log(data))

.catch(err => console.log('error'));