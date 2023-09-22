import "./Body2.css";
import marked from "../../Assets/Images/marked.png";
import star3 from "../../Assets/Icons/star3.svg";
import star4 from "../../Assets/Icons/star4.svg";

const Body2 = () => {
  return (
    <>
      <div className="bodyb">
        <div className="bodyb2">
          <div className="bodyb2-sub">
            <h2>
              Rules and <br className="bodyb2-br" />
              <span>Guidelines</span>
            </h2>
            <p>
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </div>
          <img src={star4} alt="big-idea" />
        </div>
        <div className="bodyb1">
          <img src={star3} alt="big-idea" />
          <img src={marked} alt="marked-ideas" />
          <img src={star4} alt="big-idea" />
        </div>
      </div>
    </>
  );
};

export default Body2;
