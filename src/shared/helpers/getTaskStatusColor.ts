import type { StatusTask } from '@generated/api';

export const getTaskStatusColor = (status: StatusTask) => {
  switch (status) {
    case 'Created':
      return 'text-orange-300';
    case 'Processing':
      return 'text-blue-600';
    case 'Completed':
      return 'text-green-600';
    default:
      return '';
  }
};

export const getTaskStatusText = (status: StatusTask) => {
  switch (status) {
    case 'Created':
      return 'Создана';
    case 'Processing':
      return 'Выполняется';
    case 'Completed':
      return 'Выполнена';
    default:
      return '';
  }
};
