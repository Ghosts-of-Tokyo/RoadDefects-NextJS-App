export const ROUTES = {
  REDIRECT: '/redirect',

  ROOT: '/',
  TASKS: {
    ROOT: '/tasks',
    TASK: (taskId: string) => `/tasks/${taskId}`,
    FIXATION: (taskId: string) => `/tasks/${taskId}/fixation`
  },

  LOGIN: '/login'
};
