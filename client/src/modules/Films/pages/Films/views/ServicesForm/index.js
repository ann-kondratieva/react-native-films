import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { styles } from './styles';
import MenuItem from '@material-ui/core/MenuItem';

import RenderSelectField from '../../../../../../views/RenderSelectField';
import RenderSearchField from '../../../../../../views/RenderSearchField';

const ServicesForm = ({ classes, onSubmit }) => {
    return (
        <form onSubmit={(event) => { event.preventDefault(); }}>
            <Grid className={classes.container}
                container
                alignItems="center"
                justify="center">
                <Grid item xs={12} sm={10} md={8} lg={7} >
                    <Grid className={classes.container}
                        container
                        alignItems="flex-end"
                        justify="space-between">
                        <Grid item xs={4} sm={6} >
                            <Field
                                className={classes.textField}
                                name="search"
                                component={RenderSearchField}
                                label="Search"
                                margin="dense"
                                type="search"
                                onChange={onSubmit}
                            />
                        </Grid>
                        <Grid item xs={4} sm={6}>
                            <Grid className={classes.container}
                                container
                                alignItems="flex-end"
                                justify="flex-end">
                                <Field
                                    className={classes.selectField}
                                    onChange={onSubmit}
                                    name="select"
                                    component={RenderSelectField}
                                    label="Order By"
                                    margin="dense"
                                    type="select">
                                    <MenuItem value='none'>
                                        None
                                    </MenuItem>
                                    <MenuItem value='title'>Title</MenuItem>
                                    <MenuItem value='rating'>Rating</MenuItem>
                                    <MenuItem value='updatedAt'>Updating date</MenuItem>
                                </Field>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </form>

    );
};

ServicesForm.propTypes = {
    classes: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default reduxForm()(withStyles(styles)(ServicesForm));