// app.js
import ApiManager from './src/api/ApiManager.js';
import WebhookManager from './src/webhook/WebhookManager.js';
import LocalDatabase from './src/database/LocalDatabase.js';
import SecurityModule from './src/security/SecurityModule.js';
import ReportingModule from './src/reporting/ReportingModule.js';
import NotificationModule from './src/notification/NotificationModule.js';
import SynchronizationModule from './src/synchronization/SynchronizationModule.js';
import WebhookProcessor from './src/webhookProcessor/WebhookProcessor.js';

class TradingApp {
  constructor() {
    this.db = new LocalDatabase();
    this.apiManager = new ApiManager();
    this.securityModule = new SecurityModule();
    this.webhookManager = new WebhookManager();
    this.reportingModule = new ReportingModule(this.db);
    this.notificationModule = new NotificationModule();
    this.synchronizationModule = new SynchronizationModule(this.apiManager);
    this.webhookProcessor = new WebhookProcessor(this.securityModule);
  }

  async initialize() {
    // إعداد الاتصالات والمزامنة الأولية
    await this.synchronizationModule.synchronizeAll();
    console.log('Trading app initialized');
  }

  async handleIncomingWebhook(data) {
    try {
      const processedData = await this.webhookProcessor.processWebhook(data);
      // معالجة البيانات وتنفيذ استراتيجية التداول
      this.notificationModule.sendNotification('app', 'New signal processed');
    } catch (error) {
      console.error('Error processing webhook:', error);
      this.notificationModule.sendNotification('email', `Error: ${error.message}`);
    }
  }

  generateDailyReport() {
    const report = this.reportingModule.generateCompleteReport();
    console.log('Daily report generated');
    this.notificationModule.sendNotification('email', 'Daily report is ready');
  }
}

const app = new TradingApp();
app.initialize().then(() => {
  console.log('Trading app is ready');
});

export default app;