import { createConnection } from 'typeorm'

createConnection().then(() => {
    console.log('Database connection sucessfully!')
}).catch((reason) => {
    console.log('An error occured on database connection \n', reason)
})