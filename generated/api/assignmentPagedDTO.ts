/**
 * Generated by orval v6.30.2 🍺
 * Do not edit manually.
 * RoadDefectsService.Presentation.Web
 * OpenAPI spec version: 1.0
 */
import type { AssignmentShortInfoDTO } from './assignmentShortInfoDTO';
import type { PageInfoDTO } from './pageInfoDTO';

export interface AssignmentPagedDTO {
  /** @nullable */
  assignments?: AssignmentShortInfoDTO[] | null;
  /** @nullable */
  models?: AssignmentShortInfoDTO[] | null;
  pagination?: PageInfoDTO;
}
