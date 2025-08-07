const apiKey = 'YOUR_API_KEY';

const petitionUrl = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

petitionUrl
    .then(response => response.json())
    .then(({ data }) => {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(error => {
        console.error('Error fetching Giphy:', error);
    });
    