export const BannerCV = ({ resumeSSID }) => {
  const cache = new Date().getMonth(); // update the preview once in a month

  const imageSrc = `https://ssr.resume.tools/to-image/ssid-${resumeSSID}-1.webp?size=320&cache=${cache}`;
  const url = `https://resume.io/r/${resumeSSID}`;

  return (
    <a href={url} className="banner-cv__button" target="_blank" rel="noopener noreferrer">
      <div className="banner-cv__preview-col"></div>

      <div>
        <div className="banner-cv__label">Read my CV →</div>
        <div className="banner-cv__sub-label">hosted on resume.io</div>
      </div>

      <img className="banner-cv__page" src={imageSrc} alt="Alexey Taktarov, CV" />
    </a>
  );
};
