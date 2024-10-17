class WebhookSettings {
    constructor() {
      this.webhookUrls = {};
    }
  
    addWebhook(name, url) {
      this.webhookUrls[name] = url;
    }
  
    getWebhookUrl(name) {
      return this.webhookUrls[name];
    }
  
    updateWebhookUrl(name, newUrl) {
      if (this.webhookUrls[name]) {
        this.webhookUrls[name] = newUrl;
      }
    }
  }
  
  export default WebhookSettings;
  