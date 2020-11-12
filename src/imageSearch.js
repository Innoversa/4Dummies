function SearchImage(searchText) {

    fetch('https://api.imgur.com/3/gallery/search/top?q=' + searchText + ' ext: png OR ext: jpg', //search by given text for filetype png/jpg
        {
            method: 'get',
            headers: {
                "authentication": "Client-ID e4f15a9a27fb199" //This header may be wrong
            }
        })
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Error performing imgur api call. Status Code ' +
                        response.status);
                    return;
                }

                response.json().then(function (data) {
                    //do things with data here
                    console.log(data);
                })
            }
        )
        .catch(function (err) {
            console.log('Fetch Error: ', err);
        });
}