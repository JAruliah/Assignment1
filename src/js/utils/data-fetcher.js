function httpGetMethod(url){
    const httpResponse = fetch(url)
    .then(res => res.json())
    .then(result=> result)
    .catch(err=> console.log(err))

    return httpResponse
}

export {httpGetMethod}