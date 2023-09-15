const express = require('express');
const router = express.Router();
const Users = require('../Models/user');
const {getAllUser,addNew,getUser, editUser,register,login,getMyProfile,logout} = require('../Controller/user')
const isAuth = require('../Middleware/auth')

//console.log(Users);

router.get('/all', getAllUser);

router.post('/new', addNew);
router.get('/trying',getUser);

// router.get('/userId', async (req, res) => {
//   const id = req.query.id;
//   const user = await Users.findById(id);
//   res.status(201).cookie('Token', 'This is Token new').json({
//     success: true,
//     User: user,
//   });
// });

//router.post('/login',login)
router.post('/Register',register)
router.post('/login',login)
router.get('/me',isAuth,getMyProfile)
router.get('/logout',logout)

router.route('/:id').get(editUser).put(editUser);

//router.put('/:id',editUser)

module.exports = router;