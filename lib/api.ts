import { createClient } from "newt-client-js";

const client = createClient({
  projectUid: process.env.NEXT_PUBLIC_NEWT_PROJECT_UID,
  token: process.env.NEXT_PUBLIC_NEWT_API_TOKEN,
  apiType: process.env.NEXT_PUBLIC_NEWT_API_TYPE as "cdn" | "api",
});

export const fetchApp = async () => {
  const app = await client.getApp({
    appUid: process.env.NEXT_PUBLIC_NEWT_APP_UID,
  });
  return app;
};
