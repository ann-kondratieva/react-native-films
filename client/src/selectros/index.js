import { createSelector } from 'reselect';

import userSelectors from '../modules/Auth/selectors';

const isAuth = createSelector(
    [userSelectors.getToken, userSelectors.getUser],
    (token, user) => {
        return (token !== null && user !== null);
    }
);

const selectors = {
    isAuth
};

export default selectors;