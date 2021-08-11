import React from 'react';
import FilterLink from '../containers/FilterLink';

const Footer = () => (
    <div>
        <FilterLink filter="SHOW_ALL">All</FilterLink>
        <FilterLink secondary={true} filter="SHOW_ACTIVE">Active</FilterLink>
        <FilterLink primary={true} filter="SHOW_COMPLETED">Completed</FilterLink>
    </div>
);

export default Footer;