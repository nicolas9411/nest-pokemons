export const EnvConfiguration = () => ({
  NODE_ENV: process.env.NODE_ENV || 'dev',
  PORT: process.env.PORT || 3001,
  LIMIT_DEFAULT: +process.env.LIMIT_DEFAULT || 10,
});
