# Image Search

Writed a keyword image search application.

Created components `<Searchbar>`, `<ImageGallery>`, `<ImageGalleryItem>`,
`<Loader>`, `<Button>`, `<Modal>`.

## Pixabay API instructions

For HTTP requests, I used a public image search service
[Pixabay](https://pixabay.com/api/docs/).

The URL string of the HTTP request:

`https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12`

Pixabay API supports pagination, by default the `page` parameter is set to `1`.
Let the response comes with 12 objects each, set to `per_page`. Don't Remember
that when you search for a new keyword, you have to reset the value of `page` to
`1`.

The response from the api comes an array of objects in which you are only
interested in the following properties.

- `id` - a unique identifier
- `webformatURL` - link to the small image for the list of cards
- `largeImageURL` - link to the large image for the modal window

## Description of the component `<Searchbar>`

The component takes one prop `onSubmit` - a function to pass the value of the
iput When the form is submitted. Created a DOM element of the following
structure.

```jsx
<header class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
```

## Description of the `<ImageGallery>` component

A list of image cards. Created a DOM element of the following structure.

```jsx
<ul class="gallery">
  <!-- Набір <li> із зображеннями -->
</ul>
```

## Description of the component `<ImageGalleryItem>`

A list item component with an image. Created a DOM element of the following
structure.

```jsx
<li class="gallery-item">
  <img src="" alt="" />
</li>
```

## Description of the `<Button>` component

Pressing the `Load more` button have load the next batch of Images and rendered
with the previous ones. The button have been rendered only when there are some
loaded images. If the image array is empty, the button is not rendered.

## Description of the `<Loader>` component

Spinner component, displays while images are being loaded.

## Description of the component `<Modal>`

When you click on a gallery item a modal window with a dark overlay and display
a larger version of the image. The modal window should be closed.

The appearance is similar to the functionality of this
[VanillaJS-plugin](https://basiclightbox.electerious.com/), only instead of
white modal window the image is rendered (in the example press `Run`). Animation
is not required.

```jsx
<div class="overlay">
  <div class="modal">
    <img src="" alt="" />
  </div>
</div>
```
