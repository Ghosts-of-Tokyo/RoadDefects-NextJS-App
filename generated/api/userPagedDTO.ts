/**
 * Generated by orval v6.30.2 🍺
 * Do not edit manually.
 * RoadDefectsService.Presentation.Web
 * OpenAPI spec version: 1.0
 */
import type { PageInfoDTO } from './pageInfoDTO';
import type { UserInfoDTO } from './userInfoDTO';

export interface UserPagedDTO {
  /** @nullable */
  models?: UserInfoDTO[] | null;
  pagination?: PageInfoDTO;
  /** @nullable */
  users?: UserInfoDTO[] | null;
}
