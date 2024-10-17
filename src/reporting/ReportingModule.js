import PerformanceReports from "./PerformanceReports.js";
import ProfitLossAnalysis from "./ProfitLossAnalysis.js";

class ReportingModule {
  constructor(database) {
    this.performanceReports = new PerformanceReports(database);
    this.profitLossAnalysis = new ProfitLossAnalysis(database);
  }

  generateCompleteReport() {
    const performance = this.performanceReports.generateReport();
    const profitLoss = this.profitLossAnalysis.analyzeResults();
    return { performance, profitLoss };
  }
}

export default ReportingModule;
