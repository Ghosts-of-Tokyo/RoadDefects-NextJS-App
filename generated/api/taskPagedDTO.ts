/**
 * Generated by orval v6.30.2 🍺
 * Do not edit manually.
 * RoadDefectsService.Presentation.Web
 * OpenAPI spec version: 1.0
 */
import type { PageInfoDTO } from './pageInfoDTO';
import type { TaskDTO } from './taskDTO';

export interface TaskPagedDTO {
  pagination?: PageInfoDTO;
  /** @nullable */
  tasks?: TaskDTO[] | null;
}
