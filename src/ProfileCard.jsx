import React from 'react';

const ProfileCard = ({ user }) => {
  return (
    <div className="profile-card">
      <h2>{user.name}</h2>
      <p>Edad: {user.age}</p>
      <p>Hobby: {user.hobby}</p>
    </div>
  );
};

export default ProfileCard;
