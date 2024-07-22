import "../Hero/hero.css";
import vegetable from "../Hero/a18f079b8c5bf5900447d8fe029fb326-removebg-preview.png"
import SubscribePage from "../Subscribe/sub";

function Contents() {
  return (
    <>
      <div className="work-experience">
        <h1>
          <span className="three">30000+</span> <br /> PEOPLE WORKING WITH US
        </h1>
        <div className="years">
          <div className="red">
            <h1>
              <span>45</span> <br />
              YEARS OF EXPERIENCE
            </h1>
          </div>

          <div className="pink">
            <h1>
              With over a decade in the agriculture industry, we have extensive
              experience in crop cultivation, livestock management, and
              sustainable farming practices. Starting on a family farm, we have
              worked with diverse crops, implemented advanced techniques for
              improved yield, and managed large-scale operations. Our expertise
              in irrigation, pest control, and soil health, combined with a
              commitment to continuous learning, ensures we provide top-notch,
              innovative solutions and services in the field.
            </h1>
          </div>
        </div>
      </div>
      <div className="marquee-container">
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="7"
          className="images"
        >
          <figure className="image-card"></figure>
          <figure className="image-card"></figure>
          <figure className="image-card"></figure>
          <figure className="image-card"></figure>
          <figure className="image-card"></figure>
          <figure className="image-card"></figure>
          <figure className="image-card"></figure>
          <figure className="image-card"></figure>
          <figure className="image-card"></figure>
          <figure className="image-card"></figure>
          <figure className="image-card"></figure>
          <figure className="image-card"></figure>
          <figure className="image-card"></figure>
          <figure className="image-card"></figure>
        </marquee>
      </div>
      <Info />
      <SubscribePage/>
    </>
  );
}

function Info() {
  return (
    <>
      <div className="info-1">
        <div className="info-card">
          <p>
            Welcome to MINT-AGRO, where tradition meets innovation in
            agriculture. Located in the picturesque of Ghana-Accra, we pride
            ourselves on blending time-honored farming methods with cutting-edge
            techniques to deliver the finest produce. Our commitment to
            excellence drives us to continuously explore new ways to enhance
            sustainability and efficiency, ensuring that every harvest is fresh,
            nutritious, and environmentally responsible. At MINT-AGRO, we
            believe in more than just farming; we’re about building connections
            within our community and contributing to a healthier, more
            sustainable future. Our farm is a place where passion for
            agriculture and respect for nature come together, creating a bounty
            of high-quality fruits, vegetables, and grains. Explore our
            offerings and experience the dedication and care that define MINT-AGRO, where each product tells a story of innovation, quality,
            and community.
          </p>
          <figure>
          <img src={vegetable} alt="" />
          </figure>
        </div>
        <button className="read">Discover More</button>
      </div>
    </>
  );
}

export default Contents;
