const handleOpenWaitlist = () => {
  if (window !== undefined) {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSe3HL9_mfNTDEUVaE2qY1ak2BJaGZiDlNPdYjdMOIUFZAzwNA/viewform?usp=header",
      "_blank"
    );
  }
};

const handleBookDemo = () => {
  if (window !== undefined) {
    window.open("https://calendly.com/frumarkcarrington/30min", "_blank");
  }
};

export { handleOpenWaitlist, handleBookDemo };
