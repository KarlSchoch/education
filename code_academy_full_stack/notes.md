# Web Dev Foundations
## Making a Website Responsive
### Intro
### Grids and Spacing
### Layout with Flexbox
### Grid
- fr takes up a portion of the available space
- repeat() lets you repeat a pattern
- minmax() lets you specify how large/small something can be
- grid-row-start and grid-row-end: allows items to take up multiple elements within a grid
    - you can use "grid row: 4 / span 2" to indicate that you want it to start in the 4th row and span two rows
- grid-area combines all of this syntax into a single pattern using the following flow: grid-row-start / grid-column-start / grid-row-end / grid-column-end
    - using grid-template-areas
        1.  Put the grid-template-areas argument within the external container where you define the rows/columns and how things span that
            -  For instance, if you want headers and navs that spread two areas but content that gets split out, you woud do the following
                -  `grid-template-areas: "header header" "nav nav" "left right" "footer footer"; `
                -  `grid-template-columns: 200px 400px;`
                -  `grid-template-rows: 150px 200px 600px 200px;`
        2. within each one of the sections that you called out, include the section of the grid
            - `nav { grid-area: nav }`
- Putting things within the grid
    - justify-items: 
    - justify-content: corresponding to the row axis, ensure that items are spaced as you want them in the grid
    - align-items: sets the alignment within a row (i.e. are the items center aligned, top aligned, or bottom aligned?)
    - align-content: sets the alignment within a column and can help to get rid of white space (have the height of the container and if the behavior is left normal they will just stack on top of each other and not fill up the full space, but this allows you to deal with that issue)
    - justify/align-self: justify/align-items specify behavior within single container, but justify/align-self talks about the row/column axis itself (not just the container) and overrides
    - grid-auto-rows/columns: Help deal with rows/columns added implicitly (define five divs but only have a two by two grid)
    - grid-auto-flow: whether to add new items in the display to rows or columns; default is to implicitly create new rows

|                 | intent                | start | end    | center              | stretch             | space-around                                               | space-between                                                    | space-evenly                                          | 
|-----------------| --------------------- | ----- | ------ | ------------------- | ------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------- |
| justify-self    | item itself along row | left  | right  | center              | fill (default)      | 
| justify-content | row axis position     | left  | right  | center horizontally | expand horizontally | = space on grid element sides -> double space btw elements | equal amount of space between grid items, no space at either end | even amount of space btw grid items and at either end |
| align-content   | column axis position  | top   | bottom | center vertically   | expand vertically   | = space on grid element sides -> double space btw elements | equal amount of space between grid items, no space at either end | even amount of space btw grid items and at either end |


### Responsive Design
Key Resources
- (Reference) [Grid Garden](https://codepip.com/games/grid-garden/): Game that shows how to do CSS grid but also demos a lot of other stuff
- (Article) [Responsive Web Design](https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/): Big article that provides motivation for why you do responsive design and various tips and tricks.
- (Article) [Fundamentals of REsponsive Design](https://www.taniarascia.com/you-dont-need-a-framework/): Talks through what you need to do to get the basics of responsive web design down.  Also has a lot of content about Web Dev (React, JS Event Loop, etc.)
- (Article) [Complete Guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/): Waht it says on the Tin.  Guide to CSS Grid from soup to nuts.

#### Sizing
- responsive measurement standards:
    - em: font size based on the default browser font
    - rem: root em.  Checks the "root element," which is normally the html tag.  Helps size elements consistently across an entire website
    - Percentages for height and width
        - padding and margin: calculated based on width of the parent element
        - set min/max-width/height to ensure that after a certain point of resizing you don't lose the quality of your text
- Scaling Images and video
    - "overflow: hidden" ensures content larger than the container is hidden from view
    - Common design pattern:
    ```
        .container {
        width: 50%;
        height: 200px;
        overflow: hidden;
        }
        .container img {
        max-width: 100%;
        height: auto;
        display: block;
        }
    ```
- Scaling backgroun images
    - Common deisgn pattern:
        - `background-size: cover` line does the heavy lifting of the scaling (covers entire background and keeps image in  proportion)
    ```
    body {
        background-image: url('#');
        background-repeat: no-repeat; 
        background-position: center;
        background-size: cover;
    }
    ```
#### Media Queries
- `meta` tag: used to show website based on the size of the viewport (i.e. webpage is 960px, screen is 320px, `<meta name="viewport" content="width=device-width, initial-scale=1">` will cause the webpage to display at 320px). Has following arguments/components
    - `name="viewport"`: Tells browser to base display off the screen:
    - `content`: values for tag, including `width` and `initial-scale`
        - `width=device-width`: controls the size of the viewport (width of device)
        - `initial-scale=1`: sets initial zoom level
- media queries: Indicate the type of devices (e.g. `only screen`) and screen size (`max-width: 480px`, `min-width: 320px`, etc.) that you want CSS to apply to
    - Syntax (can use comma separated list to indicate that one of a number of conditions needs to be met)
        ```
        @media only screen and (max-width: 480px) {
          body {
            font-size: 12px;
          }
        }

        ```
    - Attributes to target
        - Screen size
        - Screen resolution with dots per inch (dpi): (`min/max-resolution: 300dpi`).  USed to target high vs. low quality images
        - `orientation`: checks whether a page is wider (`landscape`) or taller (`portrait`).
    - What screen sizes to set your web page based on (aka breakpoints).  
        - Mobile: < 480px
        - Tablet: < 768px
        - Tablet Landscape: < 1024px
        - Laptop: < 1600px
        - Desktop: > 1600px
#### Simulating Screen sizes with Chrome DevTools
- Device mode simulates different device types (can even go into specific devices like iPhone 6), throttle CPU/network
- Shows the various elements device sizes (has defaults) and can show breakpoints (and the associated media declarations) based on media queries
- Device Pixel Ratio: ratio between physical hardware and logical CSS pixels
- Rotate view port to look at landscape
- Sensor features: geolocation, setting orientation

# Building Interactive Websites
Useful JavaScript Resources
- [Douglas Crockford Lectures](https://www.youtube.com/watch?v=v2ifWcnQs6M): Lecture about JavasScript.  Part One of a three part series.
## JavaScript Syntax Pt. I
### Functions
- Function declaration
```
function greetWorld() {
    console.log("Hello World)
}
```
- Function expression
```
const calcuateArea = function(width, height) {
    const area = width * height
    return area
}
```
- Arrow notation
```
const calculateArea = (width, height) => {
    const area = width * height
    return area
}
```
### Scope
- Global: can be accessed to every part of the program
- Block Scope: can only be accessed within set of `{}` in which they are defined
- Local variables: only exist within the block scipe
- Global namespace: contains globally scope information
- Scope pollution: too many variables exist in a namespace or variable names are reused
## Running Javascript
- In the browser
    - $() is an alias for document.querySelector()
- Different runtime environments
    - Browser: 
    - Node: Browser defined capabilities don't work
## JavaScript Syntax Pt. II
- `for ... of` loop
    - `for (const hobby of hobbies)` is simpler than `for (let i = 0; i < hobbies.length; i++)`
    - `continue` skips a single iteration of the loop
- objects
    - 
## Git
- HEAD
    - show head commit (commit you are currently on): `git show HEAD`
    - Lets you see/restore state as of last commit (i.e. undo the diff): `git checkout HEAD filename` OR `git checkout -- filename`
    - unstage from staging area: `git reset HEAD filename|SHA`
- stash: to switch branches you need to be at a clean commit point.  Stash lets you maintain your changes without commiting them, which is useful if you are experimenting.  Workflow is as follows
    1. Make some changes to a branch
    2. Get called to another branch to do something
    3. Run `git stash` to save changes without making a commit
    4. Make changes on other branch
    5. Come back to the first branch
    6. Get back changes by running `git stash pop`
- `git commit --amend`: Literally changes the status of the work on that commit
- Aliasing: Lets you create shorthand for git functionality
    - `git config --global alias.<insert-shorthand> "<insert-full-command>"`
    - Ex: `git config --global alias.co "commit"`
    - Ex: `git config --global alias.glop "log --pretty=format:"%h %s" --graph"`
## JavaScript and the DOM
- `<script>` element within html that allows you to use JavaScript
    - referce script held in another file using `src` attribute: `<script src='./someScript.js'></script>`
- Browser parsing
    - HTML parser parses elements in the order that they appear in the HTML file.
        - Means that dependencies get established
        - `defer` attribute (`<script src="example.js" defer></script>`): loads script but *defers* execution until after the rest of the elements in the HTML file are parsed
            - Use when script involves interacting with the DOM
        - `async` attribute (`<script src="example.js" async></script>`): Allows the rest of the page to parse the HTML, but executes immediately after it is downloaded.
            - Use when you have a script that it doesn't matter when it loads since it will optimize website load time.
- DOM (Document Object Model)
    - Document: a webpage
    - Object: stuff on the webpage (aka nodes/elements)
        - Content (images, text)
        - Structural Elements (divs)
        - Attributes (HTML classes, styles, etc.)
    - Model: How things are put together.  The DOM is the way to model the objects in a webpage
        - Instructions
        - Descriptions
    - Tree GRaph
        - DOM is a tree graph
        - HTML tags are node in the graph (`<html>` -> `<head>`/`<body>`)
        - Can view this in the developer tools
    - Viewing it through the browser is probably simplest and most useful
    - Source Code -> DOM -> Document
    - Programmatically accessing it
        - `<document>` Keyword: root node of the DOM tree (e.g. to access the `<body>` tag, you can call `document.body`)
        - `.innerHTML` property: Allows you to access and set contents of an element
            - Example: `document.body.innerHTML = 'The cat loves the dog.';` allows you to make it so that the body contains the text: "The cat loves the dog"
        - PAtterns for selecting elements from the DOM
            - `document.querySelector('<someSelector>')[0].<someAttribute>`: <h1>, <>
            - `document.getElementByID('<someId>')[0].<someAttribute>`
            - `document.getElementByClassName('<someClassName>')[0].<someAttribute>`
            - `document.getElementByTagName('<someTagName>')[0].<someAttribute>`: 
        - [reference for how HTML elements were converted into JavaScript](https://www.w3schools.com/jsref/dom_obj_style.asp)
        - Traversing the DOM
            - `.parentNode`: REturns partent of specified element in DOM hierarchy
            - `.children`: *Array* of specified elements children; if there are no children you get back a `null`
        - Creating, inserting, hiding, and removing elements
            - `document.createElement('p')`: Creates empty element with no `.innerHTML` that you can assign values to/pass to variables; DOES NOT append to the document
            - `document.<some-element>.appendChild(<newlyCreatedElement>)`: allows you to take that element you created and insert it into the DOM
            - `.removeChild()`: Allos for removing an element
                1. `let paragraph = document.querySelector('p');`: returns first paragraph in the document
                2. `document.body.removeChild(paragraph)`: chain to the parent of the paragraph (`body`) to remove the the returned element
            - `document.getElementById('sign').hidden = true`: hides the returned element.  `hide` is an argument
        - DOM Interactivity
            1. Assign function to run whenever specified event happens
            ```
            let element = document.querySelector('button');
            element.onclick = function() {
                element.style.backgroundColor = 'blue';
            }
            ```
            2. assign property (e.g. `.onclick`) to a function by name
            ```
            let element = document.querySelector('button');
            function turnBlue() {
                element.style.backgroundColor = 'blue';
            }
            element.onClick = turnBlue;
            ```
    - DOM Events
        - event handler functions: fire as a response to a specific event
            - How to register event handler functions: Need to add the eventListeners **OUTSIDE** of the definition of the function.
                1. `.addEventListener()`: have DOM element listen for specific event and execute block of code when the event is detected
                    - event target: DOM element listening for the event
                    - event handler: code runs when event happens
                    - approach lets you add multiple event handler functions
                    ```js
                    let eventTarget = document.getElementById('targetElement'); // selecting an element to target
                    eventTarget.addEventListener(// Adding a listener to that element
                        'click', // what event to listen for
                        function() { // function to execute when event is detected for the specified element
                            // Some code to run
                    })
                    ```
                2. `eventTarget.on<event-name>`: lets you only define a single event handler function for that event
            - Removing event listener: needs the exact name of both the event type and event handler function.  **Cannot remove anonymous functions since you need the name**
                `eventTarget.removeEventListener('<event-name>', <event-handler-function-name>);`
        - Event Object Properties
            - Events are objects, and you can pass those to the event handler functions and then access properties and methods within that function
            - [MDN JS Documentation Events Refernce](https://developer.mozilla.org/en-US/docs/Web/Events#)
            - Available Properties
                - `.target`: element the event is registered to
                - `.type`: name of the event
                - `.timeStamp`: number of milliseconds passed since document loaded and event was triggered
        - Mouse related events
            - `mousedown`: mouse is pressed
            - `mouseup`: mouse is depressed
            - `mouseover`: mouse enters an eleemnt
            - `mouseout`: mouse leaves an element
        - Keyboard related events
            - `keydown`: User presses a key down
            - `keyup`: User release a key
            - `keypress`: User presses a key down and releases it
            - `.key` property of these events: Stores the valaue of the key pressed
    - Forms
        - Validation: Client side (HTML or JavaScript) vs. Backend
            - Client side
                - High Level Examples
                    - HTML: `required` (any), `minlength` and `maxlength` (strings), `min`/`max`/`step` (with range input type), `pattern` (strings)
                    - JavaScript: if you're suing a framework, might require a library (e.g. formik or parsley.js)
                - Detailed discussion
                    - `required`
                    - `min`/`max`: applies to types `number` and `range`
                    - `minlength`/`maxlength`: applies to `text` fields
                    - `pattern`: used in text fields that matches a defined regex pattern
            - Backend: Required since user can disable JS on the browser/middleman can change request after submitted by a user.  CAn be done either using asynch or full backend requests.

        - Creating Forms
            - basic syntax
            ```html
            <form action='/pageToGoTo.html' method='POST'>
                <h1>Some title</h1>
                <p>Some distription of what the form is for</p>
                <label for="id-val">Some descriptive label</label>
                <input type="<text-or-something>" name="<some-descriptive-name>" value="something-to-prefill" id="id-val"> <!-- Name is reuqired or else data won't be sent -->
            </form>
            ```
            - Different form types: `password`, `text`, `number`, `range`, `checkbox`, `radio`, dropdown, datalist (filter based on typed inputs), `textarea`, `submit`
                - `radio` syntax: Generaly, create a `<span>` element that contains the label, the create the different options that you want for the users choice as separate `<input>` elements with the values and names showing what they represent (i.e. yes vs. no), and then create labels for each choice
                ```html
                <span>Yes or No:</span>
                <input id="yes" type="radio" name="yes" value="yes" required>
                <label>Yes</label>
                <input id="no" type="radio" name="no" value="no" required>
                <label>No</label>
                ```
                - dropdown syntax
                ```
                <select id='lunch' name='lunch'>
                    <option value='pizza'>Pizza</option>
                    <option value='curry'>Curry</option>
                    ...
                </select>
                ```
                - datalist syntax: create a 'text' input type where you have a 'list' attribute that you pair with the datalist `id`
                ```
                <input type='text' list='lunches' id='city' name='city'>
                <datalist id='lunches'>
                    <option value='pizza'>Pizza</option>
                    <option value='curry'>Curry</option>
                    ...
                </datalist>
                ```
                - textarea syntax
                `<textarea id="blog" name="blog" rows="5" cols="30">Some default text</textarea>`