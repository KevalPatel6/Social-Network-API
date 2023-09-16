const dayjs = require('dayjs')

function formattedDate(date){
    return dayjs(date).format('MM/DD/YYYY HH:ss')
}

module.exports = formattedDate