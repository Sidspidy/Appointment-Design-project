import { FaStar } from "react-icons/fa";
import "./Profile.css";
function Profile() {
  return (
    <div className="profile-container">
      <img
        src="https://s3-alpha-sig.figma.com/img/2620/7166/a35e1a20facdf3d56db655152bcc6d78?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qyrvY~aT3IFA86VTmhJh2DIVDGPK8vYs1bCXAMLMF-Nn8md-wp--llAdvbkGx8a8DEgXM1NSjtGgoZSqhFGMn60qMku8ItXRLewGguN2ZzBmWgHHZ6apZai03fn5ILcxQSglr5pS02xfVKu2j4G5Jxc4Bg~PK~TwPiVQqYU16qyDxQ5OcqqgVimu0HFaGwS9iRnWvbfqsBefiwdPCZ~oMQtJDgUZDaAqjIe1IkJUgt0Tji4OglMfEgNfZS3o91nwvmd27xG7inKd-OOOjWWLUFyTsu~3CS6KDE~eUbfDMLCJIFh6f-~iF4WmGYHvtxwY8J7t3gkWTHP0Zklix~zsrg"
        alt="img"
        className="profile-bg-img"
      />
      <div className="pro-content">
        <div className="pro">
          <img
            src="https://s3-alpha-sig.figma.com/img/f22c/f4c0/74534b8f8298fd03b834e8d171bab784?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Te4rzfVBU6NKDUMalOb6fQnfR6OGlg8azfl8Cl7C36xiXi-I7OMlC05CAuuwsTp-YBVDHb5SZTIs3XCrD1WYD4VjDVp3wLXSI1ep-ukzMCWm~vygWD3fiVoUoc04wuP9G87cflZIQmYx50ns0vr-hPW6AXK~VjJjk5d5c1w5g97OTs5gWAzph4eOerSLsL64S2OhQIqbhvnOoqnTrKhaPY4IFsJiHXP36NJyb2wnHIckkdTOxiQObIym-Sa1vG0ErCyo9KXxC9Ktm2Dqo4k8iDv09Z33cZC2qiXZCh8QpTkCygjNgu6pBVaxcV-PafHTnYC35fIoVKC8Gt~ybkarLA"
            alt="profile"
            className="profile-img"
          />
          <div>
            <h1 className="profile-name">
              Dr. Bruce Willis <span></span>
            </h1>
            <p className="info">Gynecologist</p>
            <div className="rating">
              <p className="rate">4.2</p>
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
            </div>
          </div>
        </div>
        <div className="follow-containers">
          <div className="follow-container">
            <h6 className="title">Followers</h6>
            <p className="content">850</p>
          </div>
          <div className="follow-container">
            <h6 className="title">Following</h6>
            <p className="content">18K</p>
          </div>
          <div className="follow-container">
            <h6 className="title">Posts</h6>
            <p className="content">250</p>
          </div>
        </div>
        <div>
          <button className="booking-btn">Book an Appointment</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
