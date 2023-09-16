import { useState } from "react";

export default function VideoPopup({ title, videoKey }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold"
      >
        Play Trailer
      </button>

      {isOpen && (
        <div
          onClick={handleOutsideClick}
          className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-lg"
        >
          <div className="modal-container w-4/6 mx-auto rounded-lg shadow-lg z-50 overflow-hidden">
            <div className="modal-content text-left">
              <div className="flex justify-between items-center">
                <p className="text-2xl font-bold">{title}</p>
                <button
                  onClick={closeModal}
                  className="modal-close cursor-pointer z-50"
                >
                  &times;
                </button>
              </div>
              <iframe
                src={
                  videoKey
                    ? `https://www.youtube.com/embed/${videoKey}`
                    : "https://www.youtube.com/watch?v=8ybW48rKBME"
                }
                title={title}
                className="w-full aspect-video"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
