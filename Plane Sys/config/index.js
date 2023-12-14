const configValues = require ('./config.json')
module.exports={
    getDbConnectionString: function (){
        return `mongodb+srv://${configValues.uname}:${configValues.pwd}@cluster0.uvvgqnt.mongodb.net/PlaneSys?retryWrites=true&w=majority`
    }
}