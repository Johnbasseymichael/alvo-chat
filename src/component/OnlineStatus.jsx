import React, { useEffect, useState } from 'react';

const OnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', handleOnlineStatusChange);
    window.addEventListener('offline', handleOnlineStatusChange);
    console.log(isOnline);

    return () => {
      window.removeEventListener('online', handleOnlineStatusChange);
      window.removeEventListener('offline', handleOnlineStatusChange);
    };
  }, []);
  return (
    <div>
      {isOnline ? (
        <p>User is online</p>
      ) : (
        <p>User is offline</p>
      )}
    </div>
  );
};

export default OnlineStatus;
