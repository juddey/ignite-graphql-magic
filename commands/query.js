// @cliDescription Generates a Query Component
// Generates a Query Component
const helpers = require('../helpers')

module.exports = async function (context) {
  // Learn more about context: https://infinitered.github.io/gluegun/#/context-api.md
  const { parameters, ignite } = context
  const igniteConfig = ignite.loadIgniteConfig()

  // validation
  if (helpers.invalid(context, igniteConfig)) { return }

  const name = parameters.first
  const location = helpers.filePath(igniteConfig, parameters)
  const props = { name: name }

  // Copy Query Template
  const jobs = [
    {
      template: 'query.js.ejs',
      target: `${location}/${name}.query.js`
    }
  ]

  // make the templates and pass in props with the third argument here
  await ignite.copyBatch(context, jobs, props)
}
