import passport from 'passport';

export const jwtAuthenticate = (req, res, next) => {
    passport.authenticate('jwt', { session: false })(req, res, next);
};

export const localAuthenticate = (req, res, next) => {
    return passport.authenticate('local', { session: false }, (err, user, info) => {
        if (err) { return next(err); }
        if (!user) {
            //res.status(401);
            return res.status(401).send({ message: info.message });
        } else {
            req.user = user;
            return next();
        }
    })(req, res, next);
};

