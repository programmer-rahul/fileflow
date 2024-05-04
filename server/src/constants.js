const DB_NAME = "fileflow";

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
};

export { DB_NAME, COOKIE_OPTIONS };
