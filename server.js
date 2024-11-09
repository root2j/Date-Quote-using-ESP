// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const PORT = process.env.PORT || 5000;

let lastCommand = ""; // Store the latest command

// Serve frontend static files
app.use(express.static(path.join(__dirname, 'frontend')));


// HTTP endpoint for ESP8266 to retrieve the latest command
app.get('/command', (req, res) => {
  res.send(lastCommand || ""); // Send the last command or an empty string if none exists
});

// Handle socket connections
io.on('connection', (socket) => {
  console.log('A client connected:', socket.id);

  // Listen for 'display' events from any client
  socket.on('display', (data) => {
    console.log(`Display command received from ${socket.id}:`, data);

    lastCommand = data; // Update last command with new data from the client

    // Optionally, broadcast the command to all connected clients (for debugging or other purposes)
    socket.broadcast.emit('display', data);
  });

  socket.on('disconnect', () => {
    console.log('A client disconnected:', socket.id);
  });
});

server.listen(PORT,'0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
