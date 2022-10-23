// import { Formik } from 'formik';
import {
  Searchbox,
  SearchForm,
  SubmitButton,
  SubmitButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
// import PropTypes from 'prop-types';

export const Searchbar = () => {
  return (
    <Searchbox>
      <SearchForm>
        <BsSearch />
        <SubmitButton type="submit">
          <SubmitButtonLabel>Search</SubmitButtonLabel>
        </SubmitButton>

        <SearchFormInput
          type="text"
          autocomplete="off"
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Searchbox>
  );
};
