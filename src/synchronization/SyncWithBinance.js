class SyncWithBinance {
    constructor(binanceApi) {
      this.api = binanceApi;
    }
  
    async sync() {
      try {
        const accountInfo = await this.api.getAccountInfo();
        const openOrders = await this.api.getOpenOrders();
        // حفظ البيانات في قاعدة البيانات المحلية
        console.log('Binance data synchronized');
      } catch (error) {
        console.error('Error syncing with Binance:', error);
      }
    }
  }
  
  export default SyncWithBinance;
  