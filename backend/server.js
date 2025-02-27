require('dotenv').config();
const express = require('express');
const http = require('http');
const routes = require('./routes');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const setupSockets = require('./utils/socketSetup');
const MemoryStore = require('memorystore')(session);

const memoryStore = new MemoryStore({ checkPeriod: 10 * 60 * 1000 });
const isProduction = process.env.NODE_ENV === 'production';
const app = express();

// Initialize connection to MongoDB
mongoose.set('runValidators', true);
mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
});
mongoose.connection.on('error', err => console.error('MongoDB connection error:', err));
mongoose.connection.on('open', () => console.log('Connected to MongoDB Atlas'));

// Initialize express session
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		saveUninitialized: false,
		resave: false,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24 * 30
			// secure: isProduction,
			// httpOnly: false
		},
		store: memoryStore
	})
);
app.use(express.json());
if (!isProduction) {
	// app.use(cors());
	app.use(
		cors({
			credentials: true,
			origin: 'http://localhost:3000'
		})
	);
}

app.use('/api', routes);

const server = http.createServer(app);

setupSockets(server, memoryStore);

const PORT = process.env.PORT || 4000; //later update 5000
server.listen(PORT, () => console.log('Server running on port ' + PORT));
