require("express-async-errors")

const app = express()
app.use(express.json())

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))