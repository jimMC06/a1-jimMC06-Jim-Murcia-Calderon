export const audio = new Audio();

// These will be created when Play is first pressed
let audioContext: AudioContext | null = null;
let analyser: AnalyserNode | null = null;


const frequencyData = new Uint8Array(128); // Stores the frequency ranges

export async function playAudio() {
    if (!audio.src) { //Trying to play audio without choosing a song
        throw new Error("Choose a cassette first.");
    }

    // Set up audio connection
    if (audioContext === null) {
        audioContext = new AudioContext();

        analyser = audioContext.createAnalyser();
        analyser.fftSize = 256; //gives 128 frequency measurements
        

        const source = audioContext.createMediaElementSource(audio);

        source.connect(analyser);
        analyser.connect(audioContext.destination);
    } //Chatgpt did help me with the audioContext section

    // Allow audio processing, then start the song
    await audioContext.resume();
    await audio.play();
    //CHATGPT ADDED THE AWAIT BUTTONS SINCE I HAD SYNCING ISSUES
}

export function readFrequencyData() {
    if (analyser === null || audio.paused) {
        frequencyData.fill(0);
    } else {
        analyser.getByteFrequencyData(frequencyData);
    }

    return frequencyData;
}