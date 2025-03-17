<template>
  <div id="main">
    <transition name="fade" mode="out-in">
      
      <div v-if="!isJourneyStarted" class="begin-button-container">
        <button class="begin-button" @click="startJourney">Begin the Journey</button>
      </div>

      
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
      isJourneyStarted: false, 
      currentNode: storyData[0], 
      fullText: storyData[0].text, 
      displayedText: "", 
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
    
    startJourney() {
      this.isJourneyStarted = true; 
      this.fullText = this.currentNode.text; 
      this.startTypewriterEffect(); 
    },

   
    startTypewriterEffect() {
      this.displayedText = "";
      let index = 0;
      this.typingSound.play(); 
      this.typewriterInterval = setInterval(() => {
        if (index < this.fullText.length) {
          this.displayedText += this.fullText[index];
          index++;
        } else {
          clearInterval(this.typewriterInterval);
          this.typingSound.pause(); 
        }
      }, 50); 
    },

   
    selectChoice(nextId) {
      this.buttonClickSound.play(); 
      clearInterval(this.typewriterInterval); 

      const nextNode = storyData.find((node) => node.id === nextId);
      this.currentNode = nextNode;
      this.fullText = nextNode.text;

      this.startTypewriterEffect();
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
