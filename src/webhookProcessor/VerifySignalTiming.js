class VerifySignalTiming {
    isValid(signalData) {
      const currentTime = Date.now();
      const signalTime = new Date(signalData.timestamp).getTime();
      // التحقق من أن الإشارة ليست قديمة جدًا (مثلاً، أقل من 5 دقائق)
      return (currentTime - signalTime) < 5 * 60 * 1000;
    }
  }
  
  export default VerifySignalTiming;
  