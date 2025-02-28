
import React from 'react';

const Usercard = () => {
  // Static dummy data for user details
  const profilePhoto = "https://randomuser.me/api/portraits/men/1.jpg";
  const name = "John Doe";
  const email = "john.doe@example.com";
  const phone = "+1 (555) 123-4567";
  const address = "123 Main Street, New York, NY 10001";

  return (
    <div className="user-card">
      <img 
        src={profilePhoto} 
        alt={`${name}'s profile`} 
        className="user-profile-image"
      />
      <h2 className="user-name">{name}</h2>
      <p className="user-info">
        <span role="img" aria-label="email">📧</span> {email}
      </p>
      <p className="user-info">
        <span role="img" aria-label="phone">📱</span> {phone}
      </p>
      <p className="user-info">
        <span role="img" aria-label="address">🏠</span> {address}
      </p>
    </div>
  );
};

export default Usercard;