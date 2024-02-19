const getCroppendImageUrl = (url: string) => {
  if (!url) return "";
  return url.replace("media/games", "media/crop/600/400/games");
};

export default getCroppendImageUrl;
