'use client';

import { StatusTask } from '@generated/api';

import { Input, ScrollArea, ScrollBar, Tabs, TabsList, TabsTrigger } from '@/components/ui';
import { Typography } from '@/components/ui/typography';

import { getTaskStatusText } from '../../shared/helpers/getTaskStatusColor';

import { TaskCard } from './components/TaskCard/TaskCard';
import { useInspectorTasks } from './hooks/useInspectorTasks';

export const InspectorTasks = () => {
  const { state, functions } = useInspectorTasks();

  return (
    <div className='space-y-2'>
      <Typography tag='h3' variant='h3' className='mb-2'>
        Назначенные задачи
      </Typography>

      <Input
        placeholder='Адрес'
        defaultValue={state.addressFilter}
        onChange={(event) => functions.onAddressFilterChange(event.target.value)}
      />

      <ScrollArea className='w-full space-y-1 whitespace-nowrap'>
        <Tabs defaultValue={state.taskStatus}>
          <TabsList className='flex w-full justify-start gap-1 bg-transparent p-0'>
            <TabsTrigger
              value='None'
              className='gap-10 rounded-full data-[state=active]:bg-blue-400 data-[state=active]:text-white'
              onClick={() => functions.onTaskStatusClick('')}
            >
              Все
            </TabsTrigger>
            {Object.values(StatusTask).map((status) => (
              <TabsTrigger
                value={status}
                className='gap-10 rounded-full data-[state=active]:bg-blue-400 data-[state=active]:text-white'
                onClick={() => functions.onTaskStatusClick(status)}
              >
                {getTaskStatusText(status)}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>

      <div className='space-y-4'>
        {state.data?.data.tasks?.map((task, index) => <TaskCard key={index} task={task} />)}
      </div>
    </div>
  );
};
