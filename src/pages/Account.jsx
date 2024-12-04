import React, { useEffect } from 'react';

const Account = () => {
  useEffect(() => {
    document.title = "Account - Peekabook";
  }, []);

  return (
    <div>
      <h1>Account Settings</h1>
      <p>Manage your account information and preferences here.</p>
    </div>
  );
};

export default Account;
