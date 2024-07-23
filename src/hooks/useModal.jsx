import { useState, useEffect } from "react";
import sound from "/sad-cat-mew.mp3";

export default function useModal() {
  const [showModal, setShowModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(sound));

  const toggleModal = () => setShowModal(!showModal);

  const handleBackgroundClick = (event) => {
    if (event.target.classList.contains("modal__background")) {
      toggleModal();
    }
  };

  const playMusic = () => {
    if (isPlaying) {
      setIsPlaying(false);
      audio.load();
    } else {
      setIsPlaying(true);
      audio.play();
    }
  };

  useEffect(() => {
    audio.addEventListener("ended", () => setIsPlaying(false));
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  return {
    showModal,
    toggleModal,
    handleBackgroundClick,
    playMusic,
    isPlaying,
  };
}
