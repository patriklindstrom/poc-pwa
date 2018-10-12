const querystring = require('querystring');
const fs = require('fs');
global.lastTopicNr = -1;

module.exports = {
    gettopic: function(query) {
        
        var qstr = querystring.stringify(query);
        qstr = qstr.substring(2,qstr.length);
        
        var data = fs.readFileSync('conversations.json');
        content = JSON.parse(data);

        var categorizedTitle = [];
        for (var i = 0, l = content.topics.length; i < l; i++){
            if(content.topics[i].category == qstr){
                categorizedTitle.push(content.topics[i].title);
            }
        }
        
        var randomnr;
        do{
            var randomnr = Math.floor(Math.random() * categorizedTitle.length);
        }
        while(randomnr == global.lastTopicNr);
        
        global.lastTopicNr = randomnr;
        var retVal = categorizedTitle[randomnr];
        console.log('querystring=' + qstr + ' randomnr=' + randomnr + ' title=' + retVal);
        
        return retVal;
    },   
}