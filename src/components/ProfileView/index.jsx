import "./style.css";

const ProfileView = () => (
  <div className="e-card playing">
    <div className="image"></div>

    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>

    <div className="infotop">
      <img
        src="https://i.postimg.cc/XYvhy0Zs/0b3c1610-03b4-4cda-b4f0-83ef6abea697.png"
        alt="profile"
        className="profile-image"
      />
      <div className="self-intro-container">
        <img
          src="https://i.postimg.cc/DycmNXPY/IMG-20241112-075823.png"
          alt="profile"
          className="mobile-view-profile"
        />
        <h1 className="fade-sequence">
          Hello! <span className=" highlight-text">I’m Rajasekar</span>
        </h1>

        <p className="name">
          a passionate{" "}
          <span className="highlight-text">MERN stack developer</span> focused
          on building efficient and user-friendly web applications. I’m skilled
          in MongoDB, Express, React, and Node.js, creating interactive and
          scalable solutions. With a strong attention to detail, I’m committed
          to delivering clean, maintainable code for every project.
        </p>
      </div>
    </div>
  </div>
);

export default ProfileView;
