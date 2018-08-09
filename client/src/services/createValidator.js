import Joi from 'react-native-joi';
//import Reactotron from 'reactotron-react-native';

const createValidator = (schema) => {
    return values => {
        const errors = {};
        Joi.validate({ ...values }, schema, function (err) {
            if (err) {
                //Reactotron.log(err.details[0]);
                const { type, message, path } = err.details[0];
                if (type !== 'any.required' && path === 'password') {
                    errors[path] = 'At least 6 characters';
                } else if (type !== 'any.required' && path === 'email') {
                    errors[path] = 'Example: name@gmail.com';
                } else if (type !== 'any.required') {
                    errors[path] = message;
                } else {
                    errors[path] = 'This field is required';
                }
            }
        });
        return errors;
    };
};

export default createValidator;