import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'User name is required.'],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.ComparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.CreateToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.SecretKEY,
    {
      expiresIn: '1d',
    }
  );
};

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    let salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

const user = mongoose.model('User', userSchema);

export default user;
