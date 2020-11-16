var express = require('express');
var router = express.Router();
var controller = require ('../controller/controller')


router.post('/signup',controller.signup)
router.post('/adminlogin',controller.adminlogin);
router.post('/userlogin',controller.userlogin);
router.post('/reservation',controller.reservation);
router.get('/getCustomer',controller.getCustomer);
router.get('/getReservation',controller.getReservation);
const multer = require('multer');


const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './public/image')
    },
    filename: (req, file, callBack) => {
        callBack(null, `FunOfHeuristic_${file.originalname}`)
    }
  })
  
const upload = multer({ storage: storage })

router.post('/file', upload.single('file'), (req, res, next) => {
    const file = req.file;
    console.log(file.filename);
    if (!file) {
      const error = new Error('No File')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send(file);
  })


module.exports = router;
