const neo4j = require('neo4j-driver')


module.exports = {

  authenticate : async function(uri, user, password) {
    try {
      const driver = neo4j.driver(uri,neo4j.auth.basic(user, password))
      console.log(await driver.getServerInfo())
      return driver
    } catch (error) {
      console.error(error)
      console.log("Error authenticating")
      return null
    }
  },


  getData: async function(driver) {
    try {
      const { records, summary, keys } = await driver.executeQuery('MATCH (n) RETURN n')
      return {records, summary, keys}
      } 
      catch (error) {
        console.error(error)
        return {records: ["something"], summary: {}, keys: []}
      }
  },

  close: function(driver) {
    driver.close()
  }
}