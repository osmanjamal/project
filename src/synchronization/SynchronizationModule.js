import SyncWithThreeCommas from './SyncWithThreeCommas';
import SyncWithBinance from './SyncWithBinance';

class SynchronizationModule {
  constructor(apiManager) {
    this.syncWithThreeCommas = new SyncWithThreeCommas(apiManager.threeCommasApi);
    this.syncWithBinance = new SyncWithBinance(apiManager.binanceApi);
  }

  async synchronizeAll() {
    await this.syncWithThreeCommas.sync();
    await this.syncWithBinance.sync();
    console.log('All data synchronized');
  }
}

export default SynchronizationModule;
