const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({extended :true}));

require('dotenv').config();
require('./config/mongoose.config')(process.env.DB_NAME);
require('./routes/admin.routes')(app);
require('./routes/post.routes')(app);
require('./routes/submission.routes')(app);
app.listen(process.env.DB_PORT, () => console.log(`Listening on port: ${process.env.DB_PORT}`));
