const express = require('express')
const app = express()
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000
const userRoutes = require('./routes/user.routes')
const cors = require('cors');





app.use(cors())

connectDB()
app.get('/', (req, res) => {
    res.send('Hello World')
})




app.use(express.json({ extented: false }))

app.use('/api/users', userRoutes)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
