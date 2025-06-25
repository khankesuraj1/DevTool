const express = require('express');
const cors = require('cors');
const app = express();
const jsonRoutes = require('./routes/json');
const base64Routes = require('./routes/base64');

app.use(cors());
app.use(express.json());

app.use('/api', jsonRoutes);
app.use('/api', base64Routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
