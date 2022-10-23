import React, { Component } from 'react';
import { Wrapper } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Toaster } from 'react-hot-toast';
import * as API from 'services/image-api';

export class App extends Component {
  state = {
    images: [],
    loading: false,
    query: '',
    page: 1,
    error: null,
    showModal: false,
    modalImage: '',
  };

  componentDidMount() {
    this.setState({ images: [] });
  }

  async componentDidUpdate(_, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevPage !== nextPage) {
      try {
        this.setState({ loading: true });
        const responseImages = await API.getImages(
          this.state.query,
          this.state.page
        );
        this.setState({
          loading: false,
          images: [...prevState.images, ...responseImages],
        });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ loading: false });
      }
    }

    if (prevQuery !== nextQuery) {
      this.setState({ images: [], page: 1 });
      try {
        this.setState({ loading: true, images: [] });
        const responseImages = await API.getImages(
          this.state.query,
          this.state.page
        );
        this.setState({
          loading: false,
          images: [...responseImages],
        });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleFormSubmit = ({ query }) => {
    this.setState({ images: [], query, page: 1 });
  };

  loadingLargeImage = event => {
    if (event.target.nodeName !== 'IMG') {
      return;
    }

    this.setState({
      showModal: true,
      modalImage: event.target.dataset.src,
    });
  };

  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, loading, error, showModal, modalImage } = this.state;

    return (
      <Wrapper>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {images.length > 0 && (
          <ImageGallery
            images={images}
            loadLargeImage={this.loadingLargeImage}
          />
        )}
        {images.length > 0 && !loading && <Button loadMore={this.loadMore} />}
        {loading && <Loader />}
        {showModal && (
          <Modal image={modalImage} closeModal={this.toggleModal} />
        )}
        <Toaster position="top-right" reverseOrder={false} />
      </Wrapper>
    );
  }
}
