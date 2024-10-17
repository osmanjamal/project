class SyncWithThreeCommas {
  constructor(threeCommasApi) {
    this.api = threeCommasApi;
  }

  async sync() {
    try {
      const bots = await this.api.getBots();
      const deals = await this.api.getDeals();
      // حفظ البيانات في قاعدة البيانات المحلية
      console.log("3Commas data synchronized");
    } catch (error) {
      console.error("Error syncing with 3Commas:", error);
    }
  }
}

export default SyncWithThreeCommas;
