<template>
  <div id="main">
    <transition name="fade" mode="out-in">
      <div
        class="story"
        :key="currentNode.id" 
        
      >
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

export default {
  data() {
    return {
      currentNode: storyData[0],
      fullText: storyData[0].text, // Full text to display
      displayedText: "", // Text being displayed with typewriter effect
      typewriterInterval: null, // Interval for the typewriter effect
    };
  },
  mounted() {
    this.startTypewriterEffect();
  },
  methods: {
    startTypewriterEffect() {
      this.displayedText = "";
      let index = 0;
      this.typewriterInterval = setInterval(() => {
        if (index < this.fullText.length) {
          this.displayedText += this.fullText[index];
          index++;
        } else {
          clearInterval(this.typewriterInterval); // Stop when text is fully displayed
        }
      }, 50); // Adjust typing speed here (50ms per character)
    },
    selectChoice(nextId) {
      clearInterval(this.typewriterInterval); // Clear previous interval
      const nextNode = storyData.find((node) => node.id === nextId);
      this.currentNode = nextNode;
      this.fullText = nextNode.text;
      this.startTypewriterEffect();
    },
  },
};
</script>

<style scoped>
/* General Styling */
.story {
  text-align: center;
  color: rgb(255, 255, 255);
  padding: 20px;
  margin: 15%;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0);
  background-color: rgb(49, 49, 49);
  font-family: montserrat;
}

/* Button Styling */
.choices button {
  font-family: montserrat;
  margin: 10px;
  margin-top: 5%;
  padding: 10px 20px;
  font-size: 1.8vw;
  font-weight: 700;
  background-color: #ff6632;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.choices button:hover {
  background-color: #297fb900;
  border: 1px solid #ffffff;
  transition-duration: 0.8s;
  transform: scale(1.1); /* Scale on hover */
}

/* Background Styling */
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

/* Fade Animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px); /* Slide up on enter */
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px); /* Slide down on leave */
}
</style>
