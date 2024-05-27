import './feature.css';

function Feature({ image, alt, title, text }) {
  return (
    <figure className="feature">
      <img src={image} alt={alt} />
      <h3>{title}</h3>
      <figcaption>{text}</figcaption>
    </figure>
  )
}

export default Feature;
