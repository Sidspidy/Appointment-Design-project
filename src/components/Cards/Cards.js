import { MdOutlineHomeWork } from "react-icons/md";
import "./Cards.css";
import { FaStar } from "react-icons/fa";

const Cards = () => {
  return (
    <>
      <div className="card-container">
        <div className="header">
          <h1 className="title">I Specialize In</h1>
        </div>
        <div className="desc">
          <div className="cards">
            <div className="card">
              <img src="" alt="img" className="img" />
              <h1 className="spec">Women's Health</h1>
            </div>
            <div className="card">
              <img src="" alt="img" className="img" />
              <h1 className="spec">Skin Care</h1>
            </div>
            <div className="card">
              <img src="" alt="img" className="img" />
              <h1 className="spec">Immunity</h1>
            </div>
            <div className="card">
              <img src="" alt="img" className="img" />
              <h1 className="spec">Hair care</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="header">
          <h1 className="title">The Concerns I Treat</h1>
        </div>
        <div className="desc">
          <div className="tags">
            <p className="tag">Skin Treatment</p>
            <p className="tag">Pregnancy</p>
            <p className="tag">Period Doubts</p>
            <p className="tag">Endometriosis</p>
            <p className="tag">Pelvic Pain</p>
            <p className="tag">Ovarian Cysts</p>
            <p className="tag-more">+ 5 More</p>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="header">
          <h1 className="title">My Work Experience</h1>
        </div>
        <div className="desc">
          <h1 className="msg">I have been in practice for : 7+ Years</h1>
          <hr />
          <div className="exp-container">
            <div className="i-img">
              <MdOutlineHomeWork className="icon-i" />
            </div>
            <div className="ex">
              <h1 className="ex-heading">Midtown Medical Clinic</h1>
              <p className="ex-desc">Senior doctor</p>
            </div>
            <p className="ex-desc">2016-present</p>
          </div>
          <div className="exp-container">
            <div className="i-img">
              <MdOutlineHomeWork className="icon-i" />
            </div>
            <div className="ex">
              <h1 className="ex-heading">Midtown Medical Clinic</h1>
              <p className="ex-desc">Senior doctor</p>
            </div>
            <p className="ex-desc">2010-2015</p>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="header">
          <h1 className="title">Featured Reviews (102)</h1>
        </div>
        <div className="desc">
          <div className="review-card">
            <div className="card-profile-container">
              <img
                src="https://s3-alpha-sig.figma.com/img/682e/889c/026a53f2577835188ce397e0a36f4bb8?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q0zCWkUQmXmswgHf~dSzcYvvaU0CrPkZ~8QMu~jdskXwqIaoX6hIm9iu33pa50srCNNTinAs3s6JpSoF1LRLrh7b3cvPFE6Xsjq3JguDkzrXyPhbcSlFPT12otS~KyImhB5ptIkulnIEVI19ylmGwNyTyqBvM8owNSuM5bSLRf9bZ~h0C5205NC3nHRnBrb2rBHOIRlSgwm9POm~4RGeh04LJ0Nlb-hfx0BQFqUtAQhCTPySrl9cmBqC4JoJsgpl4f5CslDL-CpqZ3RhncTete3eH9xpEYSecCAnRh7w04yrrRMdwYBxP-HJq3hE6JXUjV2AC9azG5M9Rd7tp1oTzg__"
                alt="pro-img"
                className="card-pro-img"
              />
              <div className="pro-detail">
                <h1 className="pro-name">Alicent Hightower</h1>
                <p className="pro-text">Consulted for Skin care</p>
              </div>
              <p className="pro-text date">20 January 2023</p>
            </div>
            <div className="comment">
              <div className="rating">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
              </div>
              <p className="comments">
                Might be bit early to confirm but yes I can see noticeable
                difference. will write again after using it for longer periods
              </p>
            </div>
          </div>
          <div className="review-card">
            <div className="card-profile-container">
              <img
                src="https://s3-alpha-sig.figma.com/img/682e/889c/026a53f2577835188ce397e0a36f4bb8?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q0zCWkUQmXmswgHf~dSzcYvvaU0CrPkZ~8QMu~jdskXwqIaoX6hIm9iu33pa50srCNNTinAs3s6JpSoF1LRLrh7b3cvPFE6Xsjq3JguDkzrXyPhbcSlFPT12otS~KyImhB5ptIkulnIEVI19ylmGwNyTyqBvM8owNSuM5bSLRf9bZ~h0C5205NC3nHRnBrb2rBHOIRlSgwm9POm~4RGeh04LJ0Nlb-hfx0BQFqUtAQhCTPySrl9cmBqC4JoJsgpl4f5CslDL-CpqZ3RhncTete3eH9xpEYSecCAnRh7w04yrrRMdwYBxP-HJq3hE6JXUjV2AC9azG5M9Rd7tp1oTzg__"
                alt="pro-img"
                className="card-pro-img"
              />
              <div className="pro-detail">
                <h1 className="pro-name">Alicent Hightower</h1>
                <p className="pro-text">Consulted for Pregnancy</p>
              </div>
              <p className="pro-text date">20 January 2023</p>
            </div>
            <div className="comment">
              <div className="rating">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
              </div>
              <p className="comments">
                Might be bit early to confirm but yes I can see noticeable
                difference. will write again after using it for longer periods
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
