import React      from 'react';
import Notifications from '../notifications';

let notificationTimeout;

export function prepareNotification (notification, handleHide) {
  if (notification) {
    const NotificationComponent = Notifications[notification.code];
    return (
      < NotificationComponent
        onHideNotification  = {handleHide}
        text                = {notification.text}
        maxWidth            = {notification.maxWidth}
        button              = {notification.button}
      />
    );
  }

  return null;
}

export function delay (func) {
  notificationTimeout = setTimeout(func, 200);
}

export function clearDelay (func) {
  clearTimeout(notificationTimeout);
  func();
}
