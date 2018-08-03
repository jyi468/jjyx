import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Pagination = ({pageNumber}) => {
    let next100 = (
        <li class="page-item">
            <Link to={`/${pageNumber + 1}`} class="page-link">
                Next 100 →
            </Link>
        </li>
    );

    let prev100 = (
        <li class="page-item">
            <Link to={`/${pageNumber - 1}`} class="page-link">
                ← Previous 100
            </Link>
        </li>
    );

    let viewAll = (
        <li class="page-item">
            <a class="page-link" href="all">View All</a>
        </li>
    );


    if (pageNumber === 1) {
        // If page number 1, show Next 100
        return (
            <ul class="pagination">
                {next100}
                {viewAll}
            </ul>
        );
    } else if (pageNumber === this.props.maxPage) {
        // If page number n, show Previous 100
        return (
            <ul class="pagination">
                {prev100}
                {viewAll}
            </ul>
        );
    }

    // Else show all buttons
    return (
        <ul class="pagination">
            {prev100}
            {next100}
            {viewAll}
        </ul>
    );
};

Pagination.propTypes = {
    pageNumber: PropTypes.number.isRequired
};

export default Pagination;