class GeneralBotSettings {
  constructor() {
    this.settings = {
      defaultTimeframe: "1h",
      maxOpenTrades: 5,
      // إضافة المزيد من الإعدادات العامة
    };
  }

  updateSettings(newSettings) {
    this.settings = { ...this.settings, ...newSettings };
  }

  getSettings() {
    return this.settings;
  }
}

export default GeneralBotSettings;
