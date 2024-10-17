import EmailNotifications from './EmailNotifications';
import AppNotifications from './AppNotifications';

class NotificationModule {
  constructor() {
    this.emailNotifications = new EmailNotifications();
    this.appNotifications = new AppNotifications();
  }

  sendNotification(type, message) {
    switch(type) {
      case 'email':
        this.emailNotifications.send(message);
        break;
      case 'app':
        this.appNotifications.send(message);
        break;
      default:
        console.log('Unsupported notification type');
    }
  }
}

export default NotificationModule;
