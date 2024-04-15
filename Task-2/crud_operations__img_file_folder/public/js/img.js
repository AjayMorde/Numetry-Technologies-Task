// img.js
async function submitImgdata(event) {
    event.preventDefault();

    const btn = document.getElementById('btn');

    const imageName = document.getElementById('imageName').value;
    const imageUrl = document.getElementById('imageUrl').value;
    const obj = {
        imageName: imageName,
        imageUrl: imageUrl
    }

    try {
        const response = await axios.post('http://localhost:3000/image/save', obj);
        // console.log('============================>',response.status)

        if (response.status == 200) {
            console.log('Image saved successfully===================================>:', response.data.message);
            alert('Image saved successfully!');
        }
        document.getElementById('imageName').value = "";
        document.getElementById('imageUrl').value = "";
    } catch (error) {
        console.error('Error saving image===================>:', error);
        alert('Failed to save image. Please try again.');
    }
}