import React from "react";
import ProfileLeft from "../../components/profileLeft/ProfileLeft";
import ProfileCard from "../../components/profileCard/ProfileCard";
import PostSide from "../../components/postSide/PostSide";
import RightSide from "../../components/rightSide/RightSide";
import "./Profile.css";

function Profile() {
  return (
    <div className="Profile">
      <ProfileLeft />
      <div className="profile-center">
        <ProfileCard />
        <PostSide />
      </div>
      <RightSide />
    </div>
  );
}

export default Profile;
