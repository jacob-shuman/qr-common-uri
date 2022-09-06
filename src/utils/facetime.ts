/**
 * Generate a link to facetime a given number or email
 * @param target phone number or email address to facetime
 * @param type whether to intiate the call as a facetime video or audio call
 */
export const facetime = (
  target: string,
  type: "video" | "audio" = "video"
): string => encodeURI(`facetime${type === "audio" ? "-audio" : ""}:${target}`);
