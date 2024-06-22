// import type { TaskPagedDTO } from '@generated/api';
// import type { InfiniteData, QueryKey } from '@tanstack/react-query';
// import { useInfiniteQuery } from '@tanstack/react-query';

// import type { GetTaskOwnParams } from '../requests';
// import { getTaskOwn } from '../requests';

// export const useGetTaskOwnInfiniteQuery = (
//   params: GetTaskOwnParams,
//   settings?: InfiniteQuerySettings<typeof getTaskOwn>
// ) =>
//   useInfiniteQuery<TaskPagedDTO, any, InfiniteData<TaskPagedDTO>, QueryKey, number>({
//     queryKey: ['getTaskOwn', params.TaskStatus, params.current],
//     initialPageParam: params.current!,
//     queryFn: ({ pageParam }) =>
//       getTaskOwn({
//         params: { ...params, TaskStatus: params.TaskStatus, current: pageParam },
//         config: settings?.config
//       }),
//     getNextPageParam: (lastPage, pages) =>
//       Math.ceil(lastPage.pagination?.count! / lastPage.pagination?.size!) > pages.length
//         ? pages.length + 1
//         : undefined,
//     ...settings?.options
//   });
