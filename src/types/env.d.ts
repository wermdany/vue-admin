export interface EevOptions {
  APP_VERSION: string;
  BASE_URL: string;
  BUILD_TIME: string;
  GIT_HASH: string;
  NODE_ENV: "development" | "production" | "test" | "lint";
  VUE_APP_PUBLIC_PATH: string;
  VUE_APP_REQUEST_BASE_URL: string;
  VUE_APP_RUN_ENV: string;
}
