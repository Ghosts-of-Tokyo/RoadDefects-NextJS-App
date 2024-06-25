export const ROUTES = {
  REDIRECT: '/redirect',

  ROOT: '/',
  TASKS: {
    ROOT: '/tasks',
    TASK: (taskId: string) => `/tasks/${taskId}`,
    FIXATION: {
      DEFECT: {
        ROOT: (taskId: string) => `/tasks/${taskId}/fixation/defect`,
        EDIT: (taskId: string) => `/tasks/${taskId}/fixation/defect/edit`
      },
      WORK: {
        ROOT: (taskId: string) => `/tasks/${taskId}/fixation/work`,
        EDIT: (taskId: string) => `/tasks/${taskId}/fixation/work/edit`
      }
    }
  },

  LOGIN: '/login'
};
