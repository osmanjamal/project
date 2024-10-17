import DecryptSecretKey from "./DecryptSecretKey.js";
import VerifySignalTiming from "./VerifySignalTiming.js";
import ExtractSignalData from "./ExtractSignalData.js";

class WebhookProcessor {
  constructor(securityModule) {
    this.decryptSecretKey = new DecryptSecretKey(securityModule);
    this.verifySignalTiming = new VerifySignalTiming();
    this.extractSignalData = new ExtractSignalData();
  }

  async processWebhook(encryptedData) {
    const decryptedData = await this.decryptSecretKey.decrypt(encryptedData);
    if (this.verifySignalTiming.isValid(decryptedData)) {
      const signalData = this.extractSignalData.extract(decryptedData);
      return signalData;
    } else {
      throw new Error("Invalid signal timing");
    }
  }
}

export default WebhookProcessor;
