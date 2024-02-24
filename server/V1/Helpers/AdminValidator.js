const User = require('../Config//Schemas/UserSchema');

const isAdmin = async (email) => {
    const check = await User.findOne({email: email, role: "admin"});
    return check;
}

module.exports = isAdmin;