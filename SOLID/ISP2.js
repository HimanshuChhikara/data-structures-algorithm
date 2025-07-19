// Segregated interfaces - smaller, focused contracts
class Playable {
    play() { throw new Error('Must implement play') }
    pause() { throw new Error('Must implement pause') }
    stop() { throw new Error('Must implement stop') }
  }
  
  class Recordable {
    startRecording() { throw new Error('Must implement startRecording') }
    stopRecording() { throw new Error('Must implement stopRecording') }
  }
  
  class Streamable {
    startStream() { throw new Error('Must implement startStream') }
    stopStream() { throw new Error('Must implement stopStream') }
  }
  
  class VideoEditable {
    cut() { throw new Error('Must implement cut') }
    merge() { throw new Error('Must implement merge') }
    addEffects() { throw new Error('Must implement addEffects') }
  }
  
  // Now classes only implement what they actually need
  class AudioPlayer extends Playable {
    play() { console.log('Playing audio') }
    pause() { console.log('Pausing audio') }
    stop() { console.log('Stopping audio') }
  }
  
  class VideoRecorder extends Recordable {
    startRecording() { console.log('Recording video') }
    stopRecording() { console.log('Stopping video recording') }
  }
  
  // Advanced player that needs multiple capabilities
  class AdvancedVideoPlayer extends Playable {
    constructor() {
      super()
      this.recorder = new VideoRecorder()
    }
    
    play() { console.log('Playing video') }
    pause() { console.log('Pausing video') }
    stop() { console.log('Stopping video') }
    
    // Compose with other capabilities
    record() { this.recorder.startRecording() }
  }