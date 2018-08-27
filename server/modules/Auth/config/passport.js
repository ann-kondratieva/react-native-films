import passportJwt from 'passport-jwt';
import passportLocal from 'passport-local';

import User from '../model/user';
import { SECRET } from './settings';

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

const LocalStrategy = passportLocal.Strategy;

export const authJwtStrategy = new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: SECRET
}, async function (jwt_payload, done) {
    const user = await User.findOne({ _id: jwt_payload._id });
    if (user) {
        done(null, user);
    } else {
        done(null, false);
    }
});

export const authLocalStrategy = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
async function (email, password, done) {
    const user = await User.findOne({ email });
    if (!user) {
        return done(null, false, { message: 'User doesn\'t exist.' });
    } else {
        let isMatch;
        isMatch = await user.comparePassword(password);
        if (isMatch) {
            return done(null, user);
        } else {
            return done(null, false, { message: 'Wrong password.' });
        }
    }

}
);