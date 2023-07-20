interface ILog {
  debug(primaryMessage: string, ...supportingData: unknown[]): void;
  step(primaryMessage: string, ...supportingData: unknown[]): void;
}

class Log implements ILog {
  private emitLogMessage(msgType: 'step' | 'debug', msg: string, supportDetails: unknown[]) {
    if (supportDetails.length > 0) {
      console.log(`${msgType}:`, msg, supportDetails);
    } else {
      console.log(`${msgType}:`, msg);
    }
  }
  debug(msg: string, ...supportingDetails: unknown[]): void {
    this.emitLogMessage('debug', msg, supportingDetails);
  }

  step(msg: string, ...supportingDetails: unknown[]): void {
    this.emitLogMessage('step', msg, supportingDetails);
  }
}

export default new Log();
