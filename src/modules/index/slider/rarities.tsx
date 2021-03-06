import { useReducer } from 'react';
import Container from '../../../components/container';
import { ImageCenter, ImageSides } from './images';
import { GallerySlideReducer, initGallerySlideReducer } from './images-reducer';

const Rarities = () => {
  const [state, dispatch] = useReducer(GallerySlideReducer, initGallerySlideReducer);

  return (
    <div className="text-center py-24">
      <div className="2xl:w-4/5 3xl:w-2/3 4xl:w-1/2 mx-auto">
        <h4 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-wide text-warmGray-900">
          Rarities
        </h4>

        <p className="mt-4 lg:mt-6 lg:text-lg xl:text-xl text-warmGray-700 tracking-wide">
          Cards differ from their rarity: <b>cosmic, mythic, common, uncommon, rare</b>
        </p>

        <Container className="w-11/12 sm:w-2/3 md:w-full xl:w-11/12">
          <div className="flex items-center justify-center mt-8">
            <ImageSides image={state.prev.image} />

            <button
              className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 mx-3"
              onClick={() => dispatch({ type: 'prev' })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 17l-5-5m0 0l5-5m-5 5h12"
                />
              </svg>
            </button>

            <ImageCenter image={state.current.image} />

            <button
              className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 mx-4 md:mx-0"
              onClick={() => dispatch({ type: 'next' })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>

            <ImageSides image={state.next.image} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Rarities;
