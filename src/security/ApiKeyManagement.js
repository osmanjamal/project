class ApiKeyManagement {
  constructor(dataEncryption) {
    this.dataEncryption = dataEncryption;
    this.apiKeys = {};
  }

  addApiKey(name, key, secret) {
    const encryptedKey = this.dataEncryption.encrypt(key);
    const encryptedSecret = this.dataEncryption.encrypt(secret);
    this.apiKeys[name] = { key: encryptedKey, secret: encryptedSecret };
  }

  getApiKey(name) {
    if (this.apiKeys[name]) {
      return {
        key: this.dataEncryption.decrypt(this.apiKeys[name].key),
        secret: this.dataEncryption.decrypt(this.apiKeys[name].secret),
      };
    }
    return null;
  }
}

export default ApiKeyManagement;
