export const ROUTES = {
  REDIRECT: '/redirect',

  ROOT: '/',
  TASKS: {
    ROOT: '/tasks',
    TASK: (taskId: string) => `/tasks/${taskId}`,
    FIXATION: {
      DEFECT: (taskId: string) => `/tasks/${taskId}/fixation/defect`,
      WORK: (taskId: string) => `/tasks/${taskId}/fixation/work`
    }
  },

  LOGIN: '/login'
};
