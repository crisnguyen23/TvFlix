const VideoCard = ({ data }) => {
  return (
    <div className="video-card">
      <iframe
        width="500"
        height="294"
        src={`https://www.youtube.com/embed/${data.key}?&theme=dark&color=white&rel=0`}
        frameBorder="0"
        allowFullScreen="1"
        title={data.name}
        className="img-cover"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default VideoCard;
