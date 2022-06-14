// NOTE:: ! THIS COMPONENT NEEDS TO BE UPDATED EVERY EVENT!

import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';

const currentTitle = 'Christmas Emotes'; // set the event title here

const CurrentEventModal = () => {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    // setting it means it has been seen by the user already
    window.localStorage.setItem('cryptopuppie-event-current', currentTitle);

    setOpen(false);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
  
      const lastEventTitle = window.localStorage.getItem('cryptopuppie-event-current');
  
      // if already seen
      if (lastEventTitle === currentTitle) return;
  
      setOpen(true);
  }, [])

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        open={open}
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/80" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-3xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform ethereal shadow-xl rounded-2xl relative">
              <Dialog.Title as="h2" className="text-2xl font-black leading-6 ethereal-text z-50">
                {currentTitle}
              </Dialog.Title>

              <Dialog.Description
                as="p"
                className="mt-3 text-lg tracking-wide text-warmGray-700 p-2 z-50"
              >
                Santa is coming this December 28th 17:00 UTC to the world of cryptopups to give
                gifts to all good pups. Four new collectible pupmoji cards will be dropping from
                Santa Theodore&apos;s sleigh...
              </Dialog.Description>

              <div className="mt-4 z-50 inline-flex items-center">
                {/* <a
                  href="https://events.worldofcryptopups.cf/smashkarts-tournament"
                  className="py-3 px-6 rounded-lg text-sm font-medium tracking-wide bg-warmGray-800 hover:bg-warmGray-900 text-white inline-flex items-center"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
                  View Event
                </a> */}

                <a
                  href="https://discord.gg/ZKEezUwzaB"
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-6 rounded-lg text-sm font-medium tracking-wide bg-violet-600 hover:bg-violet-700 text-white inline-flex items-center ml-2"
                >
                  <FontAwesomeIcon icon={faDiscord} className="mr-2" />
                  Join Community
                </a>

                <button
                  type="button"
                  className="py-3 px-6 rounded-lg text-sm font-medium tracking-wide bg-white hover:bg-warmGray-100 ml-2"
                  onClick={closeModal}
                >
                  Got It!
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CurrentEventModal;
