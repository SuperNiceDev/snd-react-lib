module.exports = function (env) {
  const conf = require(`./webpack.${env.switch}.js`);
  return conf(env);
};
