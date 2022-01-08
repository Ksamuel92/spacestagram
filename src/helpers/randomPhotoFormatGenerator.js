function randomPhotoFormatGenerator(min, max) {
  const rows = Math.floor(Math.random() * (max - min + 1) + min);
  const cols = rows;

  return { rows, cols };
}

export default randomPhotoFormatGenerator;
