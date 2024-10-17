class DecryptSecretKey {
  constructor(securityModule) {
    this.security = securityModule;
  }

  async decrypt(encryptedData) {
    // استخدام وحدة الأمان لفك تشفير البيانات
    return this.security.dataEncryption.decrypt(encryptedData);
  }
}

export default DecryptSecretKey;
