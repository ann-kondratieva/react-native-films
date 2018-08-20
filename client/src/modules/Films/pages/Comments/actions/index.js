import { createAction } from 'redux-actions';

const commentActionCreators = {
    startRefreshing: createAction('START_COMMENT_REFRESHING'),
};

export default commentActionCreators;