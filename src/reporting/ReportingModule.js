import PerformanceReports from './PerformanceReports';
import ProfitLossAnalysis from './ProfitLossAnalysis';

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
