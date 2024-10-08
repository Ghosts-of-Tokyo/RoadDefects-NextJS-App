import type { TaskDTO } from '@generated/api';

import { ROUTES } from '@/utils/constants/routes';

export const getNextFlowLinkByTask = (task: TaskDTO) => {
  if (task.taskType === 'FixationDefectTask') {
    return ROUTES.TASKS.FIXATION.DEFECT.ROOT(task.id);

    // if (task.taskStatus === 'Created') {
    //  return ROUTES.TASKS.FIXATION.DEFECT.ROOT(task.id);
    // }

    // if (task.taskStatus === 'Processing') {
    //   return ROUTES.TASKS.FIXATION.DEFECT.EDIT(task.id);
    // }

    // if (task.taskStatus === 'Completed') {
    //   return ROUTES.TASKS.FIXATION.DEFECT.EDIT(task.id);
    // }
  }

  if (task.taskType === 'FixationWorkTask') {
    // if (task.taskStatus === 'Created') {
    //   return ROUTES.TASKS.FIXATION.WORK.ROOT(task.id);
    // }

    // if (task.taskStatus === 'Processing') {
    //     return ROUTES.TASKS.FIXATION.WORK.EDIT(task.id);
    // }

    return ROUTES.TASKS.FIXATION.WORK.ROOT(task.id);
  }

  return ROUTES.TASKS.ROOT;
};
