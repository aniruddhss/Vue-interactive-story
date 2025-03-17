export const storyData = [
    {
      id: 0,
      text: "Welcome to the Interactive Story Experience! Here, every choice you make will shape the story. Your goal? Navigate through a world of decisions, twists, and mysteries. Some choices might save the world, while others... well, you'll see. Choose wisely and enjoy the journey!",
      choices: [
        { text: "Start the Story", next: 1 }
      ]
    },
    {
      id: 1,
      text: "You wake up suddenly, your alarm ringing loudly. You had a strange dream of buildings falling and people screaming. A name keeps repeating in your mind: 'Aniruddh.' Something feels off about today. What do you do?",
      choices: [
        { text: "Get up and get ready for work", next: 2 },
        { text: "Hit snooze and sleep a bit more", next: 3 }
      ]
    },
    {
      id: 2,
      text: "You get ready and head to work. The sky looks strange, with a red tint, and people seem to whisper as you pass. You feel uneasy but go to your desk. What do you do first?",
      choices: [
        { text: "Check your email for new applications", next: 4 },
        { text: "Get a coffee and take a break", next: 5 }
      ]
    },
    {
      id: 3,
      text: "You hit snooze and try to sleep, but a loud voice echoes in your head: 'Wake up now or it will all end! Aniruddh is the key.' You jump out of bed and rush to work, feeling nervous. What do you do first?",
      choices: [
        { text: "Check your email for new applications", next: 4 },
        { text: "Get a coffee and take a break", next: 5 }
      ]
    },
    {
      id: 4,
      text: "You open your email and see an application for the Mercari Internship program. The name 'Aniruddh' seems to glow slightly. You feel like this is important. What do you do?",
      choices: [
        { text: "Open and review Aniruddh's application", next: 6 },
        { text: "Skip it and move to the next application", next: 7 }
      ]
    },
    {
      id: 5,
      text: "As you sip your coffee, the lights flicker, and your computer shows a message: 'Find him. Aniruddh is the answer.' You feel chills down your spine. What do you do?",
      choices: [
        { text: "Rush back and open Aniruddh's application", next: 6 },
        { text: "Ignore the message and continue your break", next: 7 }
      ]
    },
    {
      id: 6,
      text: "You open Aniruddh's application. His resume is impressive, but something strange happens. A glowing symbol appears on the screen, and a voice whispers: 'Choose him, or the world will fall apart.' What do you do?",
      choices: [
        { text: "Approve Aniruddh's application", next: 8 },
        { text: "Reject the application", next: 9 }
      ]
    },
    {
      id: 7,
      text: "You skip Aniruddh's application and move on. Suddenly, the building shakes, and a loud roar echoes. Your screen flashes a warning: 'You have made a grave mistake.' The walls begin to crack. What do you do?",
      choices: [
        { text: "Go back and open Aniruddh's application", next: 6 },
        { text: "Ignore it and keep working", next: 10 }
      ]
    },
    {
      id: 8,
      text: "You approve Aniruddh's application. The moment you do, everything changes. A bright light fills the room, and the sky outside clears. A voice booms: 'You have saved us all. Aniruddh will lead the way.' You feel relief and pride.",
      choices: [
        { text: "Celebrate your decision", next: 11 }
      ]
    },
    {
      id: 9,
      text: "You reject the application. The lights go out, and a cold voice says: 'You were warned. Now face the end.' The ground splits, and darkness swallows everything. THE END.",
      choices: [
        { text: "Restart and try again", next: 1 }
      ]
    },
    {
      id: 10,
      text: "Ignoring the warning, you continue working. But the building collapses, and reality itself starts breaking apart. You see flashes of chaos and hear: 'Aniruddh was the answer.' Everything fades to black. THE END.",
      choices: [
        { text: "Restart and try again", next: 1 }
      ]
    },
    {
      id: 11,
      text: "Aniruddh accepts the internship. Moments later, you receive another message: 'The timeline is safe. The world owes you everything.' You smile, knowing you made the right choice. THE END.",
      choices: [
        { text: "Restart and explore other paths", next: 1 }
      ]
    }
  ];
  