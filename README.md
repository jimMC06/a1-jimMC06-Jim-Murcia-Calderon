# Boombox EQ Visualizer
    EQ Visualizer + BoomBox art using d3

## Live Website
 Git page: INSERT LATER

## Run Locally
Copy from git

Run the following in the terminal:
```
    npm install
    npm run dev
```
Visit the generated local host in your terminal on your web browser

## Project Description
    A Music EQ Visualizer + boombox art project using D3 and TypeScript. Users are able to use the buttons on the boombox to load up and play/pause a song. During song playback an animated and accurate EQ visualizer plays on the boombox screen!

## How to Use
Load the GitHub page or run locally.

Once you are on the web page, use the buttons on the boombox to load up a song, play the song/EQ visual animation or pause operations.

- **Play:** Pressing the play button play whatever song is loaded
- **Pause:** Pressing the pause button pauses whatever song is playing if there is one
- **Add Cassette:** Pressing add cassette opens a pop-up menu that allows users to load up a sample song, choose their own songs, or cancel operations. Tapping on the current sample song gives you option to switch samples. Clicking on the choose file button allows user to upload/play their own mp3.

## Technical Achievements
The Boombox EQ Visualizer uses real-time audio measurements to update/animate the visuals

For sample songs and uploaded mp3s, audio.ts allows for playback and analysis including the frequencies. The data is then read in main.ts and used to display the frequencies and update them in real time according to the audio. 

There are 3 interactive buttons that allow this to happen

- **Play:** Starts the audio and the visualization functions
- **Add Cassette:** Creates a pop-up window that allows the user to choose from loading sample songs/uploading their own or cancelling operations.
- **Pause:** Stops the audio, but allows for resuming where you left off later on

Program allows for loading, analyzing and playing a user inputted mp3 file, using the data to create EQ visuals.

32 bars of frequency data displayed in real time, averaged from the first 64 measurements of 128 frequency bins.

## Design Achievements
The boombox itself is made of rectangles, circles, triangles, lines, text, and paths all outlined and labeled in main.ts, all of which was made in d3. These all come together to create a simplistic retro boombox design. 

The boombox contains a separate visual animation element in the form of a screen. The screen in the middle of the boombox shows accurate and real-time updating frequency EQ bars that change based on what audio is being played. 

## Screenshots and original wireframes/drafts
Located in docs folder, along with a video demo

Original Wireframes/Drafts Made in Canva:
![Original-wireframe-1](docs/wireframes/BOOMBOX%20EQ%20VISUALIZER/1.svg)
![Original-wireframe-2](docs/wireframes/BOOMBOX%20EQ%20VISUALIZER/2.svg)

Screenshots:
![Screenshot-of-boombox-not-playing](docs/screenshots/Boombox%20nothing%20playing.png)
![Screenshot-of-boombox-playing](docs/screenshots/Boombox%20playing.png)

## Sources and Credits

### Music Samples
Music Credit:

"Scheming Weasel (faster version)"
Kevin MacLeod (incompetech.com)
Licensed under Creative Commons: By Attribution 4.0
http://creativecommons.org/licenses/by/4.0/

"Monkeys Spinning Monkeys"
Kevin MacLeod (incompetech.com)
Licensed under Creative Commons: By Attribution 4.0
http://creativecommons.org/licenses/by/4.0/


### Libraries and Font
Built with TypeScript, Vite, D3, and the browser’s Web Audio API

Font used: "Press Start 2P"

Copyright 2012 The Press Start 2P Project Authors (cody@zone38.net), with Reserved Font Name "Press Start 2P".
This Font Software is licensed under the SIL Open Font License, Version 1.1 

### AI Assistance
I used ChatGPT 6.1 sol for programming explanations, code examples, and debugging.

 Assistance included:

- Help with setting up TypeScript, Vite, and the build configuration.
- Catching many spelling mistakes/simple errors
- Helping in deciding what coordinates to use/centering objects
- Heavy error correction for button controls and the audio playback with some partial guidance and examples on how to properly integrate the button presses and playback using d3
- Explaining Web Audio API frequency-analysis and D3 bar-animation.
- Guiding/pointing me to better more effective implementations for different aspects of the code 
- Help in connecting HTML button to dialog
- Explanations of some d3 functions in animation timer
- Troubleshooting audio file paths and build errors
- Help with implementing song dialogs
- Polishing grammar/spelling in README
- Helped debug Custom Song input including discovering and solving a bug after loading a custom song where the previously played song wasn't removed
- Helped prepare/deploy for github pages
    
AI assisted areas are also labeled in source code

Extra note: Since I wrote this in typescript and vite, I needed additional serup to prepare github pages, so I had ChatGPT guide me through that process.This included separating the editable and compiled HTML files, configuring build output, and adding a redirect to the compiled website.

