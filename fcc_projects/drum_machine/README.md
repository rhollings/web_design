<h3>FCC Drum Machine Project</h3>

<img width="1433" alt="Screen Shot 2021-12-03 at 1 37 45 PM" src="https://user-images.githubusercontent.com/75183667/144603975-6002dde2-6d15-40a4-adbd-d147ae14fe5f.png">


<h3>Project Details</h3>

<p>
<b>User Story #1:</b> I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.

<b>User Story #2:</b> Within #drum-machine I can see an element with a corresponding id="display".

<b>User Story #3:</b> Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.

<b>User Story #4:</b> Within each .drum-pad, there should be an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).

<b>User Story #5:</b> When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.

<b>User Story #6:</b> When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string Q, pressing the W key should trigger the drum pad which contains the string W, etc.).

<b>User Story #7:</b> When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).
</p>
