export interface SiteFeatureFlags {
  /**
   * Controls system dark-mode detection, keyboard toggle (`d`), and UI theme
   * switches across the header and floating dock.
   */
  readonly enableDarkMode: boolean;
}

/**
 * Central runtime feature toggles for the Aura marketing web app.
 * Flip `enableDarkMode` to `true` to re-enable dark mode site-wide.
 */
export const SITE_FEATURES: SiteFeatureFlags = {
  enableDarkMode: false,
};
