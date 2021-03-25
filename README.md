# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Linda**

Time spent: **2** hours spent in total

Link to project: https://glitch.com/edit/#!/short-dusty-court

## Required Functionality

The following **required** functionality is complete:

* [ ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [ ] "Start" button toggles between "Start" and "Stop" when clicked. 
* [ ] Game buttons each light up and play a sound when clicked. 
* [ ] Computer plays back sequence of clues including sound and visual cue for each button
* [ ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [ ] User wins the game after guessing a complete pattern
* [ ] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![]https://cdn.glitch.com/e0e28186-dfc3-48fd-a673-7fee6f7e7d64%2Fezgif.com-gif-maker%20(1).gif?v=1616643898131


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
I used the https://www.w3schools.com/js/js_number_methods.asp, w3schools.com website to check up on the parsing of ints.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
A challenge for me was to remember what I learn in high school when completing the challenge. I forgot about using the let keyword in loops
as I become more familiar with other coding languages. However, I felt that the prework was pretty straight forward in explaining the concepts of the
game and the various usages of the functions. The guess function was more complicated and I had to remember that the sequence of the code was critical
when running the program as certain lines should only be implemented after others. For example, in order to make sure the program doesn't alert the user
that they have 0 guesses left and then alert again that they lost, I switched the lines of the code and added a condition such that the program tests for whether the user was 
out of chances. This allows it to goes directly to alert lost and if there are still chances, then to alert the number of chances left. Another challenge
I had in the game was creating the random pattern generator. I went to w3schools to check in on the parsing of ints in order for the program to modify
the pattern array at each start of the game with a random integer from 1 to 4. Overall, I felt that
the exercise was fun and nicely introduced the applications of html, css, and the js files in creating the game.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
I was wondering if when developing, would there be a sequence such as completing the code first before starting on css, that is preferable? When the code starts to
become complicated, the functionality of the program becomes much more important than the appearance, so I assumed that the designing comes after all the code 
was completed. I was also wondering if web development often test the code from the beginning each time. For this submission, there were a few times that I wanted to
test the code from the middle of a pattern or the end to examine what it would display but each time, the program runs from top to bottom.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had more time to work on the project, I would definitely try to implement additional features such as audio to the buttons. I would like to also make it
that the buttons play the same sound that the original sequence was playing when the user playback the sequence. It would also be cool to add images onto the buttons
to make them look more appealing and to add certain instrumental sounds to the buttons. This would create more fun on the user's side. I think it would also be 
useful to alert the user when the game begins the clue sequence again since I noticed that when playing with the game, sometimes I do not remember if I finished the 
sequence or not. However, I have not figured out whether to do an actual alert or not because the alert on top does not look too aesthetically pleasing.


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.