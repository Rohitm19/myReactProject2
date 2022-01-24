const apiRequest = async (url = '', optionsBody, errMsg) => {

    try {
        const response = await fetch(url, optionsBody);
        if (!response.ok) throw Error('Please reload the app.')
    }
    catch(err) {
        errMsg = err.message;
    }
    finally {
        return (errMsg)
    }
}

export default apiRequest;