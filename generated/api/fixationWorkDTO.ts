/**
 * Generated by orval v6.30.2 🍺
 * Do not edit manually.
 * RoadDefectsService.Presentation.Web
 * OpenAPI spec version: 1.0
 */
import type { PhotoInfoDTO } from './photoInfoDTO';

export interface FixationWorkDTO {
  id: string;
  /** @nullable */
  photos: PhotoInfoDTO[] | null;
  recordedDateTime: string;
  /** @nullable */
  workDone: boolean | null;
  workDoneWithDefect: boolean;
}
