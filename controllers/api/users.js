

//* Request handler Logic
const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

//* /*-- Helper Functions --*/
function createJWT(user) {
    return jwt.sign({user}, process.env.SECRET, {expiresIn: '24h'});
}

async function create(req, res) {
    // console.log('[From POST handler]', req.body)
    try {
        //* creating a new user
        const user = await User.create(req.body);
        console.log(user);

        //* creating a new jwt
        const token = createJWT(user);

        res.json(token);
        
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
}

//update user function 
async function update(req, res){
    const {id} = req.params
    console.log(req.body)
    try{
      console.log(req.user)
      const dbUser = await User.findById(req.user._id)
      console.log('OLD password',dbUser)
      const match = await bcrypt.compare(req.body.password, dbUser.password)
  
  if(!match){
    console.log('USER', req.body)
    res.status(400).json("Password Error")
    return
  }else{
    req.body.password = await bcrypt.hash(req.body.newpassword, 6)
     delete req.body.newpassword
     console.log('USER', req.body)
  }
      const user = await User.findByIdAndUpdate(req.user._id, req.body, {new: true})
  
      res.json(user)
  
    }catch(error){
      console.log(error)
    }
  }

  //delete user function 
  async function deleteUser(req, res){
  
    try{
  
      const user = await User.findByIdAndDelete(req.user._id)
  
  
       res.json('user deleted')
    }catch(e){
      console.log(e)
    }
  }

async function login(req, res) {
    try {
        // find user in db
      const user = await User.findOne({ email: req.body.email });
      // check if we found an user
      if (!user) throw new Error();
      // compare the password to hashed password
      const match = await bcrypt.compare(req.body.password, user.password);
      // check is password matched
      if (!match) throw new Error();
      // send back a new token with the user data in the payload
      res.json( createJWT(user) );
    } catch {
      res.status(400).json('Bad Credentials');
    }
  }


async function checkToken(req, res) {
    console.log(req.user);
    res.json(req.exp)
}


module.exports = {
    create,
    login,
    checkToken,
    update,
  deleteUser,
    
}