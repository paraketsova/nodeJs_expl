const express = require('express');
const app = express();
const path = require('path');
const fileUpload = require('express-fileupload');
app.use(fileUpload({createParentPath: true}));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.get('/', (req, res) => {
    res.render('index');
})
app.post('/upload-photos', (req, res) => {
    try {
        let photoArr = [];
        for (let photo of req.files.photos) {
            let photoPath = `./uploads/${photo.name}`;
            photo.mv(photoPath);
            photoArr.push(photoPath);
        }
        res.render('image', {photos: photoArr})
    } catch (error) {
        console.log(error)
    }
})
app.listen(3000);