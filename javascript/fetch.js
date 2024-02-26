fetch('my_file.txt')
    .then(Response => {
        return Response.text()
    })

.then(data => console.log(data))

.catch(err => console.log('error'));