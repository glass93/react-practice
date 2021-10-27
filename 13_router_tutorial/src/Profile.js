import React from "react";
import WithRouterSample from "./WithRouterSample";

const data = {
  sj: {
    name: "한상정",
    description: "리액트를 좋아하는 개발자",
  },
  hj: {
    name: "남현준",
    description: "내 친구 남현준",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default Profile;
