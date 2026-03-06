import {
  createStartHandler,
  defaultStreamHandler,
} from "@tanstack/react-start/server";
import type { HandlerCallback } from "@tanstack/react-start/server";
import { getRouter } from "./router";

const noCacheStreamHandler: HandlerCallback = async (ctx) => {
  const response = await defaultStreamHandler(ctx);
  const contentType = response.headers.get("content-type") ?? "";

  if (contentType.includes("text/html")) {
    response.headers.set(
      "Cache-Control",
      "no-cache, no-store, must-revalidate",
    );
    response.headers.set("Pragma", "no-cache");
  }

  return response;
};

export default createStartHandler({
  createRouter: getRouter,
})(noCacheStreamHandler);
