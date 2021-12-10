export const ANT_STATUS = {
  NOT_TRIGGERED: 'NOT_TRIGGERED',
  IN_PROGRESS: 'IN_PROGRESS',
  READY: 'READY',
};

export const ANT_STATUS_PARSED = {
  [ANT_STATUS.IN_PROGRESS]: 'In Progress',
  [ANT_STATUS.READY]: 'Calculated',
  [ANT_STATUS.NOT_TRIGGERED]: 'Not Yet Run',
};
