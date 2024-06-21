'use client';

import { Typography } from '@/components/typography';
import { ScrollArea, ScrollBar, Tabs, TabsList, TabsTrigger } from '@/components/ui';
import { useGetTaskOwnQuery } from '@/shared/api/hooks';
import { useSearchParams } from '@/utils/hooks';
import { useInspectorTasks } from './hooks/useInspectorTasks';
import { StatusTask } from '@generated/api';
import { getTaskStatusText } from './helpers/getTaskStatusColor';
import { TaskCard } from './components/TaskCard/TaskCard';

export const InspectorTasks = () => {
  const { searchParams } = useSearchParams();
  const taskStatus = searchParams.get('TaskStatus') ?? '';
  const { functions } = useInspectorTasks();

  const { data } = useGetTaskOwnQuery({
    TaskStatus: taskStatus
  });

  return (
    <div className='space-y-2'>
      <Typography tag='h2' variant='h1'>
        Назначенные задачи
      </Typography>
      <ScrollArea className='w-full space-y-3 whitespace-nowrap'>
        <Tabs defaultValue={searchParams.get('TaskStatus') ?? ''}>
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
        {data?.data.tasks?.map((task, index) => <TaskCard key={index} {...task} />)}
      </div>
    </div>
  );
};
