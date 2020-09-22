import React from 'react';
import '../App.css';
import { Dropdown } from 'react-bootstrap';

const FilterBar = () => {
    return(
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                <span className="filterText">Filter By Region</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Africa</Dropdown.Item>
                <Dropdown.Item href="#/action-2">America</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Asia</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Europe</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Oceania</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default FilterBar;