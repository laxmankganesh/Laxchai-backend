import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname) //call back with the original name of the file as the name of the file to be saved in the temp folder 
    }
  })
  
export const upload = multer({ 
    storage, 
})