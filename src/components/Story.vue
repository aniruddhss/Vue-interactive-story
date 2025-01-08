<template>
  <div id="main">
    <transition name="fade" mode="out-in">
      <!-- Show the Begin button if the journey hasn't started -->
      <div v-if="!isJourneyStarted" class="begin-button-container">
        <button class="begin-button" @click="startJourney">Begin the Journey</button>
      </div>

      <!-- Show the story if the journey has started -->
      <div v-else class="story" :key="currentNode.id">
        <h1>{{ displayedText }}</h1>
        <div class="choices">
          <button
            v-for="choice in currentNode.choices"
            :key="choice.text"
            @click="selectChoice(choice.next)"
          >
            {{ choice.text }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { storyData } from "../story";
import typingSoundPath from '../assets/Keyboard-Typing.mp3';
import buttonClickSoundPath from '../assets/mouse-click.wav';

export default {
  data() {
    return {
      isJourneyStarted: false, // Flag to track if the journey has started
      currentNode: storyData[0], // Start with the first node
      fullText: storyData[0].text, // Full text for the first node
      displayedText: "", // Text being displayed with the typewriter effect
      typewriterInterval: null,
      typingSound: new Audio(typingSoundPath),
      buttonClickSound: new Audio(buttonClickSoundPath),
    };
  },
  mounted() {
    this.typingSound.loop = true;
    this.typingSound.volume = 1.0;
    this.buttonClickSound.volume = 0.8;
  },
  methods: {
    // Method to start the journey when the "Begin the Journey" button is clicked
    startJourney() {
      this.isJourneyStarted = true; // Set journey as started
      this.fullText = this.currentNode.text; // Get text for the first node
      this.startTypewriterEffect(); // Start typing effect
    },

    // Method to start the typing effect
    startTypewriterEffect() {
      this.displayedText = ""; // Reset the displayed text
      let index = 0;
      this.typingSound.play(); // Start typing sound
      this.typewriterInterval = setInterval(() => {
        if (index < this.fullText.length) {
          this.displayedText += this.fullText[index];
          index++;
        } else {
          clearInterval(this.typewriterInterval);
          this.typingSound.pause(); // Pause typing sound when typing is complete
        }
      }, 50); // Speed of typing effect (in ms)
    },

    // Method to handle when a choice is selected
    selectChoice(nextId) {
      this.buttonClickSound.play(); // Play click sound
      clearInterval(this.typewriterInterval); // Stop the current typing effect

      const nextNode = storyData.find((node) => node.id === nextId);
      this.currentNode = nextNode;
      this.fullText = nextNode.text;

      this.startTypewriterEffect(); // Start typing effect for the next part
    },
  },
};
</script>

<style scoped>
.story {
  text-align: center;
  color: rgb(255, 255, 255);
  padding: 20px;
  margin: 15%;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0);
  background-color: #350e03c7;
  font-family: montserrat;
}

.choices button {
  font-family: montserrat;
  margin: 10px;
  margin-top: 5%;
  padding: 10px 20px;
  font-size: 1.8vw;
  font-weight: 700;
  background-color: #af1d1d;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.choices button:hover {
  background-color: #297fb900;
  border: 1px solid #ffffff;
  transition-duration: 0.7s;
  transform: scale(1.1);
}

#main {
  background-image: url(https://images.pexels.com/photos/14729992/pexels-photo-14729992.jpeg);
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
}


.begin-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}


.begin-button {
  padding: 15px 30px;
  font-size: 2.5rem;
  font-weight: bold;
  background-color: #5f2616f0;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.8s ease;
}

.begin-button:hover {
  background-color: #5f261681;
  border: 1px solid #ffffff;
  transition-duration: 0.8s;
  transform: scale(1.1);
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
