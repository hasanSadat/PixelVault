
export function handleError(t,errorCode) {

  switch (errorCode) {
    case "ERR_NETWORK":
      return t("errors.ERR_NETWORK");
    case "ERR_TIMEOUT":
      return t("errors.ERR_TIMEOUT");
    case "ERR_INVALID_QUERY":
      return t("errors.ERR_INVALID_QUERY");
    case "ERR_ACCESS_DENIED":
      return t("errors.ERR_ACCESS_DENIED");
    case "ERR_SERVER":
      return t("errors.ERR_SERVER");
    default:
      return t("errors.UNKNOWN");
  }
}
