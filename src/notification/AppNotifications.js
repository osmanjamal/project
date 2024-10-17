class AppNotifications {
  constructor() {
    this.notifications = [];
  }

  send(message) {
    this.notifications.push({
      id: Date.now(),
      message,
      timestamp: new Date(),
    });
    console.log("App notification added");
  }

  getNotifications() {
    return this.notifications;
  }

  clearNotifications() {
    this.notifications = [];
  }
}

export default AppNotifications;
