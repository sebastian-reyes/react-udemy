//const getImagenPromise = () => new Promise((resolve) => resolve('https://url-de-la-imagen.com/imagen.jpg'));
//getImagenPromise().then(console.log)

const getImage = async () => {
    try {
        const apiKey = 'YOUR_API_KEY';
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await response.json();
        const { url } = data.images.original;

        const img = document.createElement('img');

        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.error('Error fetching image:', error);
    }
}

getImage();