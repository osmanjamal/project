class StrategyConfiguration {
  constructor() {
    this.strategies = {};
  }

  addStrategy(name, config) {
    this.strategies[name] = config;
  }

  getStrategy(name) {
    return this.strategies[name];
  }

  updateStrategy(name, newConfig) {
    if (this.strategies[name]) {
      this.strategies[name] = { ...this.strategies[name], ...newConfig };
    }
  }
}

export default StrategyConfiguration;
