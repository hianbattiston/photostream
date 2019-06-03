const truncate = (
  value,
  limit = 25,
  completeWords = true,
  ellipsis = "..."
) => {
  if (completeWords) {
    limit = value.substr(0, limit).lastIndexOf(" ");
  }
  return `${value.substr(0, limit)}${ellipsis}`;
};

export default truncate;
