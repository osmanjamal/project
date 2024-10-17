class ExtractSignalData {
    extract(decryptedData) {
      // استخراج البيانات المهمة من الإشارة المفكوكة التشفير
      return {
        symbol: decryptedData.symbol,
        action: decryptedData.action,
        price: decryptedData.price,
        timestamp: decryptedData.timestamp
      };
    }
  }
  
  export default ExtractSignalData;
  