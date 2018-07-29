import React, { Component } from 'react';

class Pagination extends Component {
    constructor(props) {
        super(props);
    }

    //handleButtonClick()

    render() {
        const pageNumber = this.props.pageNumber;

        let next100 = (
            <li class="page-item">
                <a class="page-link" href={pageNumber + 1}>Next 100 →</a>
            </li>
        );

        let prev100 = (
            <li class="page-item">
                <a class="page-link" href={pageNumber - 1}>← Previous 100</a>
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
    }
}

Pagination.propTypes = {
    pageNumber: PropTypes.number.isRequired
}

export default Pagination;