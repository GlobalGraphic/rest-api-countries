import React from 'react';
import '../App.css';
import FilterBar from "./FilterBar";
import { InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
    return (
        <div className="input_search">
            <InputGroup className="col-sm-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1"><FontAwesomeIcon className="searchIcon" icon={faSearch} /></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Search for a country..."
                    aria-label="Search for a country..."
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <FilterBar/>
        </div>
    );
}

export default SearchBar;