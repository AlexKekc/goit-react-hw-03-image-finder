import React, { Component } from 'react';
import { Wrapper } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
// import { Modal } from './Modal/Modal';
import axios from 'axios';

// axios.defaults.baseURL =
//   'https://pixabay.com/api/?key=29907532-7f39500d23d88694527ad4fe5';

export class App extends Component {
  state = {
    images: [],
  };

  async componentDidMount() {
    // const response = await axios.get(
    //   '&q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12'
    // );
    // console.log(response);

    try {
      const responce = await axios.get('https://pixabay.com/api/', {
        params: {
          q: 'dog',
          page: 1,
          key: '29907532-7f39500d23d88694527ad4fe5',
          image_type: 'photo',
          orientation: 'horizontal',
          per_page: 12,
        },
      });
      console.log(responce.data.hits);
    } catch (error) {}
    // this.setState({ articles: response.data.hits });
  }

  render() {
    return (
      <Wrapper>
        <Searchbar />
        <ImageGallery />
        <Loader />
        <Button />
        {/* <Modal /> */}
      </Wrapper>
    );
  }
}
