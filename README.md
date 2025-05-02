# Web-Game
**Railway game**
The game is played on a square grid of various sizes, where the goal is to create a continuous circular railway line that reaches every place where the train can travel.

**Menu**
When the page loads, the main menu appears, where the following parameters must be set to start the game:

Name (player's name)
Map difficulty (Easy, Hard)
Only after this can the game be started. From the menu you should also be able to open the game description. (You can copy the text from here.) For extra points, a leaderboard can also appear, showing who completed the map the fastest.

Note! The game will have multiple "pages": the menu, the game, and possibly the description. However, these should not be in separate HTML files but should be handled within a single HTML file. You can achieve this with divs that are shown/hidden using JavaScript. The game description can also appear in a pop-up window.

**Initial State of the Game**
The base of the map is a 5x5 (Easy) or 7x7 (Hard) square grid, depending on the difficulty. The maps contain different numbers of mountains, bridges, oases, and empty tiles, depending on the difficulty level. You do not need to invent the maps yourself; in the pics folder under level, you will find maps for both difficulty levels in image format. You don't need to use them as images; first, convert them into a data structure of your choice and store them that way. At the start of the game, one of these maps should be selected.

Outside the game area, the following elements also appear:

Player's name
Time elapsed since the puzzle started

**Placing Railway Elements**
There are no specific requirements for placing railway elements, so you can decide how you would provide this function. Here are some ideas:

Clicking on cells cycles through the different element types, with options to rotate or delete using the right mouse button;
After selecting a tile, elements are chosen from a palette, or you can switch between elements using the arrow keys;
Elements can be dragged and dropped onto a tile from a palette;
The railway line is drawn by holding down the mouse button and moving across the cells (extra points for this last one). How you implement this part is up to you; the important thing is that it should be playable and clear what needs to be used!

**End of the Game
**The game ends when the player correctly completes the puzzle according to the given rules.
During the validation of the puzzle's completion, the following elements need to be checked:

Each cell has two exit points, and the train can enter each neighboring cell from the correct direction.
Every cell that needs to be touched is touched.
Every cell where no track can be placed remains empty.
