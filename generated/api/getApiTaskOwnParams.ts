/**
 * Generated by orval v6.30.2 🍺
 * Do not edit manually.
 * RoadDefectsService.Presentation.Web
 * OpenAPI spec version: 1.0
 */
import type { DefectStatusFilter } from './defectStatusFilter';
import type { TaskSortType } from './taskSortType';
import type { TaskStatusFilter } from './taskStatusFilter';
import type { TaskTypeFilter } from './taskTypeFilter';

export type GetApiTaskOwnParams = {
  TaskSort?: TaskSortType;
  TaskType?: TaskTypeFilter;
  DefectStatus?: DefectStatusFilter;
  TaskStatus?: TaskStatusFilter;
  Address?: string;
  Page?: number;
  Size?: number;
};
