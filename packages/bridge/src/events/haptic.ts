/**
 * Generic type which creates new types of haptic feedback.
 */
type HapticFeedback<T extends string, P> = {type: T} & P;

/**
 * Style of impact occurred haptic event.
 * - `light`, indicates a collision between small or lightweight UI objects,
 * - `medium`, indicates a collision between medium-sized or medium-weight UI objects,
 * - `heavy`, indicates a collision between large or heavyweight UI objects,
 * - `rigid`, indicates a collision between hard or inflexible UI objects,
 * - `soft`, indicates a collision between soft or flexible UI objects.
 */
export type ImpactHapticFeedbackStyle =
  | 'light'
  | 'medium'
  | 'heavy'
  | 'rigid'
  | 'soft';

/**
 * Type off notification occurred type event.
 * - `error`, indicates that a task or action has failed,
 * - `success`, indicates that a task or action has completed successfully,
 * - `warning`, indicates that a task or action produced a warning.
 */
export type NotificationHapticFeedbackType = 'error' | 'success' | 'warning';

/**
 * `impactOccurred` haptic feedback.
 */
export type ImpactHapticFeedback = HapticFeedback<'impact', {
  impact_style: ImpactHapticFeedbackStyle;
}>;

/**
 * `notificationOccurred` haptic feedback.
 */
export type NotificationHapticFeedback = HapticFeedback<'notification', {
  notification_type: NotificationHapticFeedbackType;
}>;

/**
 * `selectionChanged` haptic feedback.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export type SelectionHapticFeedback = HapticFeedback<'selection_change', {}>;