import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json({limit: "16kb"}));
app.use(bodyParser.urlencoded({limit: "16kb", extended: true}));







import userRouter from './routes/user.routes.js'










app.use("/api/v1/users", userRouter);




// Routes
app.get('/', (req, res) => {
    res.json({message: "Server is running"});
});

export {app};
