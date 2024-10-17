import ThreeCommasApi from '3commas-api-node';
import BinanceApi from 'node-binance-api';

class ApiManager {
    constructor() {
      this.threeCommasApi = new ThreeCommasApi();
      this.binanceApi = new BinanceApi();
    }
  
    // أضف طرق لإدارة الاتصالات مع واجهات برمجة التطبيقات
}
  
export default ApiManager;