function startTimer() {
    const largeData = new Array(1000000).fill('data');
    let counter = 0;
    
    // Process data immediately and extract only what's needed
    const dataSize = largeData.length;
    // largeData can now be garbage collected
    
    const intervalId = setInterval(function() {
      counter++;
      console.log(`Timer: ${counter}, Data size was: ${dataSize}`);
    }, 1000);
    
    // Return cleanup function
    return function cleanup() {
        console.log("CLEAN UPPP.")
      clearInterval(intervalId);
    };
  }
  
  const cleanup = startTimer();
//   cleanup();
  // Always clean up: cleanup();