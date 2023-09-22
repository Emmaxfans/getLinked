import "./Intro.css";
import big_idea from "../../Assets/Images/idea.png";
import star3 from "../../Assets/Icons/star3.svg";
import star4 from "../../Assets/Icons/star4.svg";

const Intro = () => {
  return (
    <div>
      <div className="intro">
        <div className="intro1">
          <img src={star3} alt="big-idea" />
          <img src={big_idea} alt="big-idea" />
          <img src={star4} alt="big-idea" />
        </div>
        <div className="intro2">
          <div className="intro2-sub">
            <h2>
              Introduction to getlinked <br />
              <span>tech Hackathon 1.0</span>
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
      </div>
    </div>
  );
};

export default Intro;
