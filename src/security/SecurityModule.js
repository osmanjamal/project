import DataEncryption from "./DataEncryption.js";
import ApiKeyManagement from "./ApiKeyManagement.js";

class SecurityModule {
  constructor() {
    this.dataEncryption = new DataEncryption();
    this.apiKeyManagement = new ApiKeyManagement();
  }

  // أضف طرق إضافية للتعامل مع الأمان العام
}

export default SecurityModule;
