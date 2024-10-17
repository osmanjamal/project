import DataEncryption from './DataEncryption';
import ApiKeyManagement from './ApiKeyManagement';

class SecurityModule {
  constructor() {
    this.dataEncryption = new DataEncryption();
    this.apiKeyManagement = new ApiKeyManagement();
  }

  // أضف طرق إضافية للتعامل مع الأمان العام
}

export default SecurityModule;
