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
- (Article)[How to add JavaScript to HTML](https://www.digitalocean.com/community/tutorials/how-to-add-javascript-to-html)
- (Article)[MDN Guide to Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- (Book)**John Duckett's _HTML & CSS_**: Capter 7, page 144 - 174
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
## Making a Website Accessible
What does this mean digitally.  Examples
- Screen readers that parse a website for user with visual impairments
- videos on websites are close captioned
- images include "alt-text" for individuals with visual impairments
- Websites are navigable without a mouse
### Accessible Design
- Contrast
    - Headings: create structure, visual contrast, and navigation information to browsers to help assistive technlogy
    - Font: use real text as oopposed to text within graphics (screen readers, scale/magnify with better legibility, site performance)
    - Color: Darker on lighter, but gentler tones can avoid glare.
- Trends that deviate from accessibilty best practices
    - text overlaid on images
    - removing input labels
    - removing distinctive styling from buttons and links

### Accessibility
- Semantic Elements
    - use `<header>` rather than `<div id="header">` since the `<header>` works with screen readers and intended purpose (easier for programmers to work with)
    - css references needs to change too
- ARIA Roles
    - [Documentation](https://www.w3.org/TR/html-aria/#allowed-descendants-of-aria-roles) that contains list of allowable "roles"
        - `note`
        - `presentation`: indicates when elements are only there to organize information on the page and can help tell screen readers to skip over them in an intelligent manner (i.e. the reader will not read the `ol` or the `li` but will read the text between the `li` elements)
    - Helps document what that part of the code does (i.e. banner, button, cell, etc.)
- ARIA Properties
    - `aria-label`: Useful if there is a caption explaining an image in that it can be used to explain how that caption relates to the image
    ```html
    <img src="#" alt="A painting of the Shenandoah Valley"/>
    <p aria-label="Artist">Name of Artist that created the image<p>
    ```
- `alt` Attributes: used to describe an image out loud for a screen reader/display if an image doesn't load.  Some guidelines below
    1. if the image is also an `<a>` element, make sure that the `alt` describes where the link goes
    2. if the image is just a decorative border, leave the `alt` attribute blank rather than omitting it
    3. Do not duplicate description between `alt` attribute and a nearby text element that describes the image
    4. `alt` attribute shuld be kept to <= 150 characters
## Exam Notes
### Exam Pt. I
Importing Functions: TLDR In node use `module.exports()` and `require()` and in the browser is `import` and `export`
[MDN JS Modules Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- ES Modules (Modern, Browser, or `"type": "module"` in Node)
    ```js
    // math.js
    export function add(a, b) { return a + b; }
    export { someFunction, someOtherFunction }; // This is called NAMED EXPORTS
    // Default Exports
    const resources = { sweetFunction, anotherSweetFunction };
    export default resources;

    // analytics.js
    export function add(a, b) { return a + b; }

    // main.js
    import { add as mathAdd } from './math.js';
    import { add as analyticsAdd } from './analytics.js';
    import sweetFunctions from './math.js'; // Named Exports
    const { sweetFunction, anotherSweetFunction } = sweetFunctions; // Default Exports

    ```
    ```html
    <script type="module" src="./module-code.js"></script>
    ```
- Common JS (Legacy, default in Node.js)
    ```js
    // math.js
    module.exports { add };

    // main.js
    const { add } = require('./math');
    ```

Assert Methods 
- Strings are case sensitive for both equal and strictEqual
| Method | Description |
| ------ | ----------- |
| `assert.ok(val)` | Checks truthiness |
| `assert.equal(a, b)` | Loose (i.e. `==`) equality |
| `assert.strictEqual(a, b)` | Strict (i.e. `===`) equality |
| `assert.deepEqual(a, b)` | Deep (aka object) equality |
| `assert.deepStrictEqual(a, b)` | Deep strict (aka object) equality |
| `assert.throws(fn)` | Check that `fn()` throws an error |
| `assert.doesNotThrow(fn)` | Ensure `fn()` doesn't throw |
| `assert.fail(msg)` | Forces Failure |

DOM Selection Methods (no `.getElement()` exists)
| Method | Selector Style | Returns | Notes |
| `getElementById(id)` | `#id` | Single Element | Fastest for ID lookup |
| `getElementByClassName()` | `.class` | HTMLCollection | Live Collection |
| `getElementByTagName()` | `tag` | HTML Collection | USe for all `<h1>`, etc. |
| `querySelector()` | CSS Selector | First Match | Most flexibile for one element |
| `querySelectorAll()` | CSS Selector | NodeList | Static list of all matches |

Appending to the DOM
- Pattern
    1. Create element
    2. Add content to that element
    3. Append element
- Sample Code
    ```js
    const el = document.createElement('div');
    el.textContent = 'Hello!';
    document.body.appendChild(el);
    ```
- Notes:
    - `appendChild()` adds one node
    - `append()` adds one OR MORE Nodes/strings
# Front End Development
## JS Testing
- REgression testing: Making sure that old tests for existing features still work after introducing a new feature
- Types of testing
    - Unit tests: testing small piece of code (e.g. function), generally with fake (aka "mock") data
    - Integration tests: How different units of a program work together.  For example, if you're working with an external API, you are making sure that the data fetched from that is formatted correctly and that you deal with the external source introducing delays, errors, or invalid data.
    - End to end tests: Tests the application the way that a real user would experience it and includes interactions with external services like databases and APIs
- Software Testing Methodologies: Strategies for testing all pieces of your software to ensure it works as expected
    - Types that prioritize writing tests before the code
        - Test driven development (TDD)
            - Functions and Classes are the smallest units of code as the smallest unit to test
        - Behavior driven development (BDD)
            - Tests written from the persepective of a user
            - Unit of tests is a feature s you are testing the feature rather than the functions or classes
        - Specification by Example (SBE)
        - Acceptance Test driven development (ATDD)
### Mocha
- [Docs](https://mochajs.org/)
- Installing Mocha
    1. `npm` is the package manager
    2. `npm init` creates `package.json` file that manages packages for the project
    3. `npm install mocha -D` installs Mocha and the `-D` indicates that it is a dev dependency (i.e. it will not show up in the production bundle) and will show up under the `devDependencies` section of the `package.json` file
- Running Mocha
    - Approach 1: Call directly from `node_modules`: `./node_modules/mocha/bin/mocha`
    - Approach 2 (recommended): add script to `package.json`
        1. Go to the scripts object in `package.json` and set the value of `test` to `mocha`
            ```json
            "scripts": {
                "test": "mocha"
            }
            ```
        2. Run Mocha using `npm test`
- `describe` and `it` blocks
    - Nest `describe` blocks to resemble the implementation code structure (i.e. if there is an Object with methods, create a `describe` block for the object and then nested `describe` blocks for each of the methods within the object)
    - Write individual tests in `it` blocks
        ```js
        describe('Math', () => {
            describe('.methodOne', () => {
                it('some description of what the method should do', () -> {
                    // Test goes here
                });
                // more it statements to capture method's expected behavior
            });
            describe('.methodTwo', () => {
                it('some description of what the method should do', () -> {
                    // Test goes here
                });
                // more it statements to capture method's expected behavior
            });
        });
        ```
- `assert`: Provided by Node.js (import at the top of your files with `const assert = require('assert');`)
    - `assert.ok()`: Checks truthiness
    - `.equal()`: Checks loose (i.e. `==`) equality
    - `.strictEqual()`: Checks strict (i.e. `===`) equality
    - `.deepEqual()`: Checks loose (i.e. `==`) equality for things like objects or arrays (i.e. checks that the attributes of two separate objects are equal)
    - `.deepStrictEqual()`: Same as above, but checks for strict rather than loose equality
    - [Additional methods](https://nodejs.org/api/assert.html)

- Steup, exercise, verify, teardown: Phases of/way to structure testing
    - Setup: create objects, variables, and set conditions your test depends upon
    - Exercices: Execute functionality you are testing
    - Verify: Check expectations against result produced during exercise phase (use `assert` statements)
    - Teardown: Ensures that the testing environment stays clean to isolate the conditions of the tests.  Involves doing things like deleting any files that were created as part of executing the test
    - Hooks: help to reduce duplicative code required across multiple phases (similar to pytest fixtures)
        - Types of hooks
            - `beforeEach(callback)`: `callback` run before each test
            - `afterEach(callback)`: `callback` run after each test
            - `before(callback)`: `callback` run before first test
            - `after(callback)`: `callback` run after first test
        - Placed in the `describe` block, but outside the `it` blocks
            ```js
            describe('hook illustration', () => {
                let testValue;

                // Execute before hooks
                beforeEach(() => {
                    testValue=5;
                });

                // it statements
            });
            ```
- TDD
    - Red-Green-Refactor: Write tests so that you get a failing test (Red), then write the code so that it passes (Green), and finally improve the passing code (refactor)
        - You iteratively walk into writing passing code, just updating your code until you get a new error message, not necessarily trying to solve the entire thing
        - Refactor process
            - ensure you are following the setup/exercise/verification/teardown phase structure
    - Use the describe and it blocks to explain the behavior of your code
    - Code Coverage: amount of application code that has been executed in testing, represented as a percentage.
        - Function Coverage: Has each function been called?
        - Statement Coverage: Has each statement been executed?
        - Path coverage: Has every edge in the control-flow graph been executed?
        - Condition Coverage: Has each boolean sub-expression evaluated to be both true and false?
    - Test Coverage: PErcentage of required features/specs that are tested as opposed to lines executed
### Chai
It's an assertion library
- [Docs](https://www.chaijs.com/guide/)
### Mocking
- Process of creating fake version of an external service (also known as stubbing - slight technical difference but basically the same thing)
- Prevents you from having to rely on other services when running your tests - *ISOLATION*
- Avoid using mocks in integration tests for *INTERNAL SERVICES* - you're TRYING to see that interaction between services
### Sinon
- [Docs](https://sinonjs.org/releases/latest/spies/)
- "Spy" capability
    - function that observes and records information about another function's calls including arguments, return value, `this` value, and exceptions thrown
- Implementation: Wrapping methods
    - Process
        1. Instantiate the spy based on the class and method that you want to observe
        2. Call the method
        3. Conduct "asserts" (e.g. `expect(<class>.<method>.called).to.be.true` or `expect(<class>.<method>.returned('<expected-return-val>')).to.be.true`)
        4. remove the spy from the wrapped method
    - Sample code
        ```js
        const robot = {
            greet(name){// Unit being tested
                return 'Hello ' + name;
            }
        };
        test('greet should return hello codey', () => {
            sinon.spy(robot, 'greet'); // Initialize the spy (step 1)
            robot.greet('codey'); // Call the method (Step 2)
            // Conduct "asserts" (Step 3)
            expect(robot.greet.called).to.be.true;
            expect(robot.greet.calledWith('codey')).to.be.true;
            expect(robot.greet.returned('Hello codey')).to.be.true;
            robot.greet.restore(); // Remove spy from wrapped method (Step 4)
        });
        ```
## Async JS and HTTP Requests
- APIs
    - Components of making a request
        - HTTP Verbs (basically maps to CRUD)
            - GET: Retrieve specific resource (by ID) or a collection of resources
            - POST: create a new resource
            - PUT: Update a specific resource (by ID)
            - DELETE: Remove a specific resource by ID
        - Headers and Accept parameters:
            - `Accept` field ensures tells the server what format to send the response in.  Options are MIME (Multipurpose Internate Mail Extension) Types that consist of a `type` and `subtype` separated by a `/`.  Example types: `text/html`, `text/css`, `audio/wav`, `audio/mpeg`, `image/png`, `video/mp4`, `application/json`, 
        - Paths: where to send the request
    - Sending responses
        - Header and Content type: Mirrors the `Accept` field in that it indicates the MIME Type being sent over
        - Response Codes: Status of the request.  Below are the key ones
            | Status Code | Meaning |
            | 200 (OK) | Standard response for successful HTTP request (relates to GET and PUT) |
            | 201 (CREATED) | Standard response after item is successfully created via HTTP request (relates to POST) |
            | 204 (NO CONTENT) | Success response, nothing returned in the body (relates to DELETE) |
            | 400 (BAD REQUEST) | Cannot process request due to the request having bad syntax, being too big, etc. |
            | 403 (FORBIDDEN) | Does not have permission to access the resource.  PRobably a bad token/authentication |
            | 404 (NOT FOUND) | Resource can't be found.  Probably related to a path |
            | 500 (INTERNAL SERVER ERROR) | Generic response for unexpected failure without additional detail |
    - Example request/response pairs
        - request
            ```
            POST http://fashionboutique.com/customers
            Body:
            {
                “customer”: {
                    “name” = “Scylla Buss”,
                    “email” = “scylla.buss@codecademy.org”
                }
            }
            ```
        - response
            ```
            201 (CREATED)
            Content-type: application/json

            ```
    - You're almost thinking about the API structure as a database Schema.  What put reuqests do you need, what path do they do to, what content do they send/receive back
- Working with JSON
    - On the receiving end
        1. get the JSON data as a string (this is how it will come through the HTTP request)
        2. use `JSON.parse()` to turn the string-y JSON data into a JavaScript object
    - On the sending end
        1. Get the JavaScript object you want to send (i.e. `const jsObj = { book: 'JSON Primer', price: 29.99, inStock: true }`)
        2. Use `JSON.stringify()` to convert the object to a string that you can send over an HTTP request (i.e. `const jsonData = JSON.stringify(jsObject)`)
- Additional Resources
    1. [Making network requests with JS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Network_requests)
    2. [REally good video on the Event Loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
    3. [Overarching Documentation on Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS): Contains elements below that are called out in this, but also section on using workers/introducing threads to deal with long running tasks
        - [MDN Guide on using promises](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Promises)
    4. [MDN Web API Guide](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction)
    5. [MDN HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview)

## Web Apps
- Web App Definition: does not require installation onto local machine and intended for interaction (i.e. they send data to and receive data from a web server) which is the differentation with a website (which is static)
- Single PAge Application
    - Multi-page applications mean that each time you click on a link, there is a round trip to the server with a new HTML file that provides the page content.
    - Wikipedia definition of SPA: Web application that interacts with the web browser by dynamically rewriting the current web page with new data from a web server, instead of the defauly method of the browser loading entire new pages.
        - Plain english: you just have one page and you update the individual components of it
    - Generally use a framework to do this: 
        - React: Create components that render differently based on state and user data
        - Vue: Using templating within a single HTML file (seems like Django)
## React Pt. I
### JS Refresher
```js
// Define an object/array
let cars = ['ferrari', 'tesla', 'porsche']
let destinations = {x: 'LA', y: 'NYC', z: 'MIA'}
// Normal approach to getting at the attributes
let car1 = cars[0];
let car2 = cars[1];
let car3 = cars[2];
let destination1 = destinations[0];
let destination2 = destinations[1];
let destination3 = destinations[2];
// Destructuring approach to getting at the attributes (indicate the type - attribute vs. list - by what you do the wrapping with)
let [car1, car2, car3] = cars
let {destination1, destination2, destination3} = destinations
```
Can do similar thing with destructuring for function parameters
```js
let truck = {
  model: '1977 Mustang convertible',
  maker: 'Ford',
  city: 'Detroit',
  year: '1977',
  convertible: true
};

const printCarInfo = ({model, maker, city}) => {
  console.log(`The ${model}, or ${maker}, is in the city ${city}.`);
};
```

### Virtual DOM
- DOM is the tree like representation of the website
- Virtual DOM is intended as a way to help detecting changes to the DOM
    - Copy of the DOM as a JS object
    - makes things faster by avoiding repainting the page
- REact process
    1. Entire virtual DOM gets updated
    2. Virtual DOM gets compared to version before update and React figures out what has changed
    3. Changed objects get updated on the *REAL DOM*
    4. Changes on the real DOM cause the screen to change

### JSX
- Syntax extension for JS that was intended to be used with React
- basic building block is an "element"
- Adding in javascript code to these elements: use curly braces
    - `root.render(<h1>2 + 2</h1>)` renders "2 + 2" on the screen
    - `root.render(<h1>{2 + 2}</h1>)` renders "4" on the screen because the curly braces indicate that you want javascript to execute.
- function basically like HTML elements with attributes (i.e. `const p1 = <p id='p1'>First Paragraph</p>`)
    - If you take one of these elements into multiple lines, you are going to need to wrap them in parentheses
    - Can only have one outer most elements
        - Valid
            ```js
            const text = (
                <div>
                    <p>Some text<p>
                    <p>Some text<p>
                </div>
            )
            ```
        - Invalid
            ```js
            const text = (
                <p>Some text<p>
                <p>Some text<p>
            )
            ```
    - Grammar differences
        - `class` in html tag becomes `className` in JSX (class is a reserved word in JS)
        - self closing tags: need to write the ending slash (e.g. `<br />` is fine but `<br>` is not)
        - Cannot use if statements inside the js. Here are wome workarounds
            - Write an if statement that wraps the different jsx elements
            - Use the ternary operator
            - `&&` operator: Use when you want something to happen or not (e.g. display some element) - `{ age > 25 && <li>Grappa</li> }`
        - `.map()` Array method: Allows you to generate content dynamically
            - Basic Syntax
                ```
                const strings = ['Home', 'Shop', 'About Me'];
                const listItems = strings.map(string => <li>{string}</li>)
                <ul>{listItems}</ul>
                ```
            - Useful for adding keys (`key` is a JSX attribute that is similar to an ID).  KEys are necessary when
                - You need "memory" from one render to the next (think to do list)
                - List's order might be shuffled
            - 
- Rendering JSX expressions
    - Process
        1. import createRoot from react-dom/client (`import { createRoot } from 'react-dom/client'`)
        2. Capture the container that you want to use to hold the content (`const someContainer = document.getElementById('someContainer')`)
        3. Create a 'root' (i.e. a new 'root node' within the DOM tree structure) in that container (`const root = createRoot(someContainer)`)
        4. use root's `.render()` method to render some content within that location (`root.render(<h1>Hello World!</h1>)`)
            - _Note_ You can pass in a variable to the `.render()` method as long as that variable EVALUATES TO HTML
    - Notes
        - `.render()` method only renders things that have changed.
- Adding in event listeners: use the event as an attribute on the tag (e.g. `onClick`, good list [here](https://react.dev/reference/react-dom/components/common#)).
- `React.createElement()`
    - way to create react elements without writing JSX
    - Arguments: type, props, ...children
    - Example
        - JSX: `const h1 = <h1>Hello world</h1>;`
        - `react.createElement()`: `const h1 = React.createElement("h1", null, "Hello world")`


### React Components
- imports: `import React from 'react';`  and `import ReactDOM from 'react-dom/client';` (enables DOM interaction)
- Structure: App.js (top level) and index.js (entry level to the application, only place where you import ReactDOM)
- Functional components are the standard
    - PascalCase naming convention: Capitalization is important so that the component is properly flagged
- USing the components
    1. Create the component and ensure there is some HTML returned.  Seems to follow pretty basic javascrpt rules with onyl slight wonkiness
        - If you're creating values to do calculations, they can't come in the return statement.  
            - Invalid
                ```js
                return (
                    const n = Math.floor(Math.random() * 10 + 1);
                    <h1>{n}</h1>
                )
                ```
            - Valid
                ```js
                const n = Math.floor(Math.random() * 10 + 1);
                return (
                    <h1>{n}</h1>
                )
                ```
        - Event handler functions: have convention of `handle<name-of-event>`
            `<div onHover={handleHover}></div>`
    2. export the component
    3. Import component
    4. Render component (will have HTML-ish syntax: `<MyComponent />`) using the approach of selecting the right element in the dom, creating a root, and then calling `.render()`
- Vite
    - Requires node 18+ or 20+

## React Pt. II
- Getting compoents to interact with each other
    - Exporting components from another component
    - `props`: Passing information from one component to another
        - access them using dot notation: e.g. `props.name`
        - pass the props into function arguments from within the "tag" ():
        ```js
        // component.js
        function PropsDisplayer(props) {
            const stringProps = JSON.stringify(props);
            return <div>Some div</div>
        }

        // app.js
        <PropsDisplayer name="Karl"> // will ensure that props.name = "Karl" and anything else passed in here is available in the PropsDisplayer fucntion

        ```
        - PAssing propse to a different component
            - Top to bottom, partent to child
            - Props passed down are immutable
        - you can pass functions as props (think event handler functions): 
            - attribute name: use the event name (e.g. `onClick` or `onHover`)
            - attribute value: enclose the function within curly braces
            - when you define the function, the name should correspond to the event type along with a `handle`.  Using these special values automatically creates an event lsitener as long as they are the HTML-like JSX instance NOT an instance of the component
                - name of the function: `handleClick`
                - name of the attribute: `onClick`
                - value of the attribute: name of the function (aka `handleClick`)
                    ```js
                    // some-component.js
                    function someComponent(props) {
                        // Creates the onClick as an event listener and the event handler is passed in as a prop
                        return <button onClick={props.onClick}>Test Button</button>
                    }
                    export default someComponent;
                    // another-file.js
                    import someComponent from './some-component'

                    function anotherComponent() {
                        function handleClick() {
                            // eventHanlder function code
                        }
                        // Does not create the event listener (it's a class), just ordinary prop name that tells what the event handler is
                        return <Button onClick={handleClick}/>
                    }

                    ```
        - `props.children`:
            - Allows you to use the HTML structure within the place where the component is invoked to provide arguments
            - For instance, in the below situation, the two `<li>` elements become accessible in the `<List>` component as `props.children`
                ```js
                <List>
                    <li>Some Item</li>
                    <li>Another Item</li>
                </List>
                ```
        - Adding Default values
            1. Setting `.defaultProps`
                ```js
                function someComponent(props) {
                    return <p>{props.text}</p>
                }
                someComponent.defaultProps = {
                    text: 'Default text value',
                }
                ```
            2. Function definition
                ```js
                function someComponent({text='Default text value'}) {
                    return <p>{text}</p>
                }
                ```
            3. Function body
                ```js
                function someComponent(props) {
                    const text='Default text value';
                    return <p>{text}</p>
                }
                ```
- REact DEv Tools
    - Install as a chrome extensionWill show up in the same location as chrome dev tools, but there will be two React specific tabs: Components and Profiler.
    - Allows you to directly modify rendered react components ala css
    - [Tutorial](Shttps://react-devtools-tutorial.vercel.app/)
- Hooks
    - functions that manage internal state of components  and post-rendering side effects (i.e. decide what to show the user based on state)
    - Built ins: `useState()`, `useEffect()`, `useContext()`, `useReducer()`, `useRef()`,
        - `state` hook:
            - import statement: `import { useState } from 'react';`
            - initializing values: `const [currentState, setCurrentState] = useState();`
                - `currentState`: current value 
                - `setCurrentState`: function to update the value of the state
                - _Note_ This does not have to use the `state` term.  If can be anything else like `toggle` or `count`
            - Use these functions (aka state setters) as the event handler for an event listener
                - Example: 
                    ```js
                    <button onClick={() => setCurrentState("On")}>On</button>
                    <button onClick={() => setCurrentState("Off")}>Off</button>
                    ```
            - Initialize state: `const [currentState, setCurrentState] = useState(true);`
            - Updating state: Maps process to example code
                - Process
                    1. Create the variable and the setter function with useState(), setting an initial value as necessary
                    2. Add the value of the variable to a JSX element
                    3. Use the setter function within a handle<Something> function definition
                    4. add that handler function as an attribute to the JSX element so that the value changes
                - Example Code
                    ```js
                    export default function EmailTextInput() {
                        const [email, setEmail] = useState(''); // Step 1
                        const handleChange = ({target}) => setEmail(target.value); // Step 3

                        return (
                            <input value={email} onChange={handleChange} /> // Steps 2 and 4
                        );
                    }
                    ```
            - Updating state with a previous value
                1. define your state setter/event handler so that it takes a previous value (i.e. `const increment = () => setCount(prevCount => prevCount + 1);`)
            - Updating arrays
                1. Initialize the Array with useState.  This allows the setCart function to see the current value of the array
                    - `const [cart, setCart] = useState([]);`
                2. Associate that callback function with an event listener in the JSX element, passing in some value that you want the callback function to have access to (for instance the index value that you are interested in doing some comparison against).  You don't pass the index as part of `onClick` since that is already in scope and that `onClick` is actually receiving an event object
                    ```js
                    <li onClick={() => removeItem(index)}>
                    ```
                3. Define a callback function that uses `setCart` and utilize the previous value of cart (`prev`) as well as the argument that was passed in from the JSX element (`tgtIndex`)
                    ```js
                    const removeItem = (tgtIndex) => {
                        setCart((prev) => {
                            return prev.filter(
                                (item, index) => {
                                    index !== tgtIndex
                                }
                            )
                        });
                    }
                    ```
        - `effect` Hook
            - Intent: Execute some *further* action (fetch data from backend, make changes to the DOM) when something happens to the component throughout it's lifetime (e.g. when you change the state of a component by typing something into a text input box, you fetch data from a backend service based on those inputs)
            - Execution
                1. You create a callback function
                    ```js
                    useEffect(() => {
                        (prev) => prev + 1;
                    });
                    ```
                2. Add some cleanup function that specifies what happens AFTER you execute the Effect hook so that (for instance) if you are adding event listeners you don't clutter things up
                    ```js
                    const increment = () => {
                        setCount((prev) => prev + 1)
                    }

                    useEffect(() => {
                        document.addEventListener('keydown', increment);
                        return () => document.removeEventListener('keydown', increment)

                    });
                    ```
                3. Control when your effect gets called with dependency arrays to ensure that it only executes when you some condition you specify is met (for instance a counter value changes)
                    ```js
                    useEffect(() => {
                        document.addEventListener('keydown', increment);
                        return () => document.removeEventListener('keydown', increment)

                    }, [] // Where you add the dependency array
                    );
                    ```
                    - [] as the dependency array tells you to only execute the effect initially whereas passing in variables will tell it to monitor what is happening with that value and rerender accordingly
        - Rules of Hooks
            1. Only call Hooks at the top level: Basically, don't hide hooks within conditionals or loops.  You can do the same thing by embedding the conditional within the Hook
                - Instead of this
                    ```js
                    if (username !== '') {
                        useEffect(() => {
                            localStorage.setItem('savedUserName', username);
                        })
                    };
                    ```
                - Do this
                    ```js
                    useEffect(() => {
                        if (username != '') {
                            localStorage.setItem('savedUsername', username);
                        }
                    })
                    ```
            2. Only call hooks from React functions
-   Patterns
    - Separte stateful (aka container) and presentational components
    - to pass state from the presentational to the container function, you use a change handler function.
- Technical Design Doc Template: Adds in feature request template
### Deploy a React Application with Netlify
### React Router
- [Docs](https://reactrouter.com/home)
- Routing: how a web application uses current browser URL to determine what content to show a user
    - https://codeacademy.com/articles?search=node
        - Protocol: `https`
        - Domain: `codeacademy.com`
        - Path: `/articles`
        - Query: `?search=node`
    - Different views of the applications (aka routes) are just React components
        ```js
        import { RouterProvider, createBrowserRouter, createRoutesFromElement } from 'react-router-dom';
        // RouterProvider prevents URL changes from causing the page to reload - URL changes allow router to determine which route to render
        const router = createBrowserRouter(createRoutesFromElement(
            <Route path="/" element={ <Root/> }>
                {/* Add Routes here if you want nested routes*/}
            </Route>
            // Dynamc route
            <Route path = '/articles/:title' element={ <Article/>}/ >
        ));

        export default function App () {
            return (
                <RouterProvider router={ router } />
            );
        }
        ```
    - `<Link />` and `<NavLink>` have similar capabilities to an anchor tag but they don't force a page reload
        - NavLink vs. Link: NavLink will automatically have an `active` class applied to it (shows what page you are on)
    - Dynamic Routes: Done by passing in `:some-variable` to the route
        - These variables can then be accessed within the component via `useParams()`;
            ```js
            import { Link, useParams } from 'react-router-dom';
            
            export default function someComponent() {
                let { title } = useParams();
                ...
            }
            ```
        - Nested routes: Use when you want content to render together.  CAn also be used when you want to use the url to indicate that you want to render some child content (e.g. when you hit an `edit` link, you want the edit form to show up)
            - Appends the paths automatically with a `/` between them
            - Process
                1. Nest the routes appropriately within the router
                2. (for child content) use the `Outlet` component from `react-router-dom` to indicate where to put the child content (It is literally an "outlet" for the content)
                3. Ensure that the path for the nested route matches the name of the destructured variable that you pull out of the nested component (i.e. if you pass in `:name` to the `<Route />`, make sure that your variable is `name`)
        - Redirect/`<Navigate />`
            - Used to take users to a certain url if a condition is met
            - `useNavigate` is a hook that performs similar functionality more quickly
                ```js
                import { useNavigate } from 'react-router-dom'

                export default someFunction() {
                    const navigate = useNavigate();

                    function someHandlerFunction() {
                        // Perform some actions
                        // Call navigate to go somewher 
                        navigate('/profile');
                    }

                    // More code
                }
                ```
        - Query Parameters: Hook from
            - Using
                ```js
                // 1. Import the package
                import { useSearchParams } from 'react-router-dom';
                export default someFunction() {
                    // 2. instatiate state variables
                    const [searchParams, setSearchParams] = useSearchParams();
                    // 3. Extract search params into usable variable
                    const sortOrder = searchParams.get('order')
                    // ... Use the variables
                }

                ```
            - Creating
                ```js
                // 1. Import the package
                import { useNavigate, createSearchParams } from 'react-router-dom';

                export default someFunction() {
                    // Preamble: Create the navigate function to consume the search params
                    const naviated = useNavigate();
                    // 1. Define the params as a regular variable
                    const searchQueryParams = { order: 'ASC' };
                    // 2. package the params as a search string
                    const searchQueryString = createSearchParams(searchQueryParams);
                    // 3. Consume the params
                    navigate({
                        pathname:'/list',
                        search:`?${searchQueryString}`,
                    })
                }
                ```
- General Notes
    - What does it do  
        - Allows for client side reloaidng of the applications
        - Parses the current URL of the page to get to a certain location
        - Passing Parameters around that are stored within the URL
        - Can create nested 
        - Special things: `<Navigate />` and `<Outlet />`
            - Navigate: USed to go to a specific URL if a condition is met (i.e. an error)
            - Outlet: Within a nested router, provide tell the higher level element where to put the lowe level element (useful if you have a root element that contains a navigation bar and you also want to show other elements like a homepage within that root element.  In this case the Outlet would indicate where you want the other lements would be rendered)
    - How do you do it
        1. Define the router: `appRouter = createBrowserRouter(createRouterFromElements(<insert-elements />))`
        2. Put the router into a `<routerProvider />`: `<RouterProvider router={appRouter}>`
        3. Create the routes that you reference first their route, and second the element that they are rendering
        4. Using parameters within the router
            1. Indicate the parameter within the route with `:` `<Route to='client/:id'/>`
            2. Pull those out using the search params
            3. Define the component that creates the search params using the `createSearchParams`
### Jest
[Jest Documentation](https://jestjs.io/docs/en/tutorial-react): Jest is the overall testing library
[Enzyme Documentation](https://enzymejs.github.io/enzyme/): Used for simulating the frontend
[Jest Walkthrough Article](https://www.valentinog.com/blog/jest/)
1. Create folder called `__tests__`
2. test file format: `__tests__/<entityToBeTests>.spec.js`
3. Structuring the tests
    ```js
    describe("some text explaining the element beind tested", () => {
        test("explanation of what this specific test case looks at", () => {
            // Setup: Define the inputs and expected outputs
            const input = [
                { id: 1, url: "https://www.url1.dev" },
                { id: 2, url: "https://www.url2.dev" },
                { id: 3, url: "https://www.link3.dev" }
            ];
            const output = [{ id: 3, url: "https://www.link3.dev" }];
            // Exercise/Validate: Run code and ensure it produces the correct output
            expect(filterByTerm(input, "link")).toEqual(output);
            expect(filterByTerm(input, "LINK")).toEqual(output);

            // Teardown: Delete "cruft" created by running the test
        })
    })
    ```
4. Code Coverage: 
    - Various ways to define this
        - Statements:
        - Branches: How many paths that your program can go down are covered by testing (i.e. if you have an if statement, is that covered)
        - Functions
        - Lines
    - configuring this: bellow automatically cretes code coverage reports and presents them in HTML within the `__tests__/coverage` folder
        ```
        "scripts": {
            "test": "jest"
        },
        "jest": {
            "collectCoverage": true,
            "coverageReporters": ["html],
        }
        ```
5. Coupling with Enzyme to simualte actions on the front end: [Article](https://css-tricks.com/writing-tests-for-react-applications-using-jest-and-enzyme/)
- Methods: Increasing level of seriousness (shallow -> rdner -> mount)
    - `shallow` vs `render`: `shallow()` excludes child components while `render()` includes them
    - `mount`: Adds the component (and children) to the DOM (need to call .unmount() during clean up to avoid conflicts)
- Testing REact component's Lifespan (i.e. did the component mount)
- Component props
    - You can mock props to see if tehy get from one component to another
        1. define what you want the props to be (i.e. `const user = {name: 'John Doe'}` )
        2. Use this object as one of the arguments for the component and try to "catch" it on the other end
        ```js
        describe ('<Profile />', () => {
            it ('contains h4', () => {
                const wrapper = mount(<Profile user={user} />) // Passing in mocked object as a prop
                const value = wrapper.find('h4').text() // Catching it
                expect(value).toEqual('John Doe') // Validation
            })
        })
        ```
- API Mocking: Use jest to mock `axios` reuests to avoid having to hit an API
    1. Create `__mock__` folder in same directory that contains `__tests__`
    2. Create mocked output
        ```js
        module.exports = {
            get: jest.fn(() => { // indicate the request method
                return Promise.resolve({ // what you want to be returned (i.e. resolved promise)
                    data: [
                        {
                            id: 1,
                            name: 'Jane Doe',
                            ...
                        }
                    ]
                })
            })
        }
        ```
    3. Check that GET requests are made using axios and that axios references the mock
        ```js
        import axios from 'axios';
        jest.mock('axios') // 
        ```
    4. Use JEst's `spyOn()` to see if you can get data from the API
        ```js
        it('fetches list of users', () => {
            const getSpy = jest.spyOn(axios, 'get'); // Establishing the spy
            const wrapper = shallow(<App />); // Callling the component
            expect(getSpy).toBeCalled() // REference spy to ensure the get request is made
        })
        ```




## Redux
- Resources (mostly testing focused)
    - [Exploring Redux Middleware](http://blog.krawaller.se/posts/exploring-redux-middleware/)
    - [Writing Tests in Redux](https://redux.js.org/usage/writing-tests)
    - [Redux Testing Step by Step: A Simple Methodology for Testing Business Logic](https://hackernoon.com/redux-testing-step-by-step-a-simple-methodology-for-testing-business-logic-8901670756ce)
    - [Testing Strategies for React and Redux](https://hacks.mozilla.org/2018/04/testing-strategies-for-react-and-redux/)
    - [How to test React-Redux connected Components](https://www.robinwieruch.de/react-connected-component-test/)
    - [How to test Redux (video)](https://www.youtube.com/watch?v=h7ukDItVN_o)
- ACtions
    - `const action = { type: 'todos/addTodo', payload: 'Cook' }`
- Reducers
    - Sample reducer code
        ```js
        function reducer(state=existingState, action) {
            switch (action.type) {
                case 'todos/addTodo': {
                    return [ ...state, action.payload ];
                }
                // more cases related to actions
                default: {
                    return state;
                }
            }
        }
        ```
- Rules of Reducers: aka reducers must perform immutable updates (i.e. create a copy of an object it is working on and modify that copy rather than changing, aka mutating, the original object.  This is why you use the destructuring (i.e. `...`) syntax) and be **pure functions** (i.e. always gives the same results given the same inputs).  
    1. Only calculate new state value based on state and action arguments
    2. Noy allowed to modify the existing state.  Instead, copy existing state and make changes to copied values (this is important since react updates the DOM based on changes, so if you create a new object it won't refresh)
    3. Must not do asynchronous logic/have other side effects (logging, saving file, etc.)
- Redux in react: Seems VERY tied into the APIs
    - main methods: `createStore()`, `store.getState()`, `store.dispatch(action)`, `store.subscribe(listener)`
    - `store` encforces one way data flow and takes a reducer function as an argument (`export const store = createStore(someReducer)`)
    - `store.dispatch()`
        - sends action to the store, needs action argument with a type property
        - Updates the state
        - Action creators: function that outputs an action that can be used as the argument in the dispatch
            ```js
            function toggle() {
                return { type: 'toggle' };
            }
            store.dispatch(toggle());
            ```
    - `store.subscribe()`: Similar to an event listener
        - takes function argument (aka listener) that is executed in response to changes in stores state
        - This appears to be looking at the ENTIRE store, not just some specific event
        - pattern
            ```js
            // 1. Describe the listener
            function listener() {
                console.log(`show me the ${store.getState()}`)
            }
            // 2. subscribe to the store
            const unsubscribe = store.subscribe(listener);
            // 3. Do some stuff that causes the DOM to change and trigger your listener
            // 4. unsubscribe
            unsubscribe()
            ```
    - Integrating redux store with a UI
        1. Create redux Store
        2. reder initial application state: This is done at the level where you render the main <App> component within index js (covered in code block below 3)
        3. subscribe to updates with subscription callback that gets current store state, selects data needed by piece of UI, updates UI with the data
            ```js
            // index.js
            const render = () => {
                // step 2
                root.render(<App state={store.getState()} dispatch={store.dispatch} >)
            }
            render()

            // step 3
            store.subscribe(render);
            ```
        4. Respond to UI events by dispatching Redux actions: Within the comonement that you have rendering a UI (in this case `App.js`), use the dispatch function that is passed down to trigger the actions
            ```js
            // App.js (where the app component in index.js comes from)
            // pull in action creators
            import {increment} from './store'

            // pass in the state and dispatch as arguments to the functional component
            function App({state, dispatch}) {
                // define event handler functions that dispatch actions to the store using the action creators
                function incrementerClicked() {
                    dispatch(increment());
                }

                return (
                    <>
                        // Attach the event handler to part of the UI so that user can initate actions that update the state
                        <button id='incrementer' onClick={incrementerClicked}>+</button>
                    </>
                )
            }
            ```
- Managing complex state
    - Slices
        - highest level elements within the state.  For instance, in the example state below, `todos` and `visibilityFilter` are the slices
            ```js
            state = {
                todos: [
                    // to do objects
                ],
                visibilityFilter: 'SHOW_INCOMPLETE'
                };
            ```
    - GEnreally you plan out the initial state
    - Process
        1. Define what changes can happen to your state (aka actions and associated action creators)
        2. Define a reducer that can execute those actions
            - REducer Composition: generally called [Redux Ducks](https://github.com/erikras/ducks-modular-redux)
                - You can create a separate reducer fr each slide and then roll those up into a `root` reducer
                ```js
                const rootReducer = (state = {}, action) => {
                    const nextState = {
                        allRecipes: allRecipesReducer(state.allRecipes, action),
                        searchTerm: searchTermReducer(state.searchTerm, action),
                        favoriteRecipes: favoriteRecipesReducer(state.favorieRecipes, action)
                    } 
                    return nextState;
                    }
                ```
                - Redux has a function `combineReducers` that simplifies the boilerplate above for defining a rootReducer
                    1. Define an object of reducers
                    2. call `combineReducers` on that object to create the rootReducer
                    3. Create the store based on the rootReducer
                - Distribute the state information down at the feature level and then aggregate that into a Roor reducer into a local file
                    ```
                    src
                    |-- app
                        |-- store.js <!-- Contains root reducer  -->
                    |-- features/
                        |-- featureA
                            |-- featureASlice.js <!-- Defines code relating to feature's slice (i.e. reducers and action creators)  -->
                        |-- featureB
                            |-- featureBSlice.js
                    ```
            3. Integrating the redux state elements into the react App (already covered this, but the main idea here is to use the various different lower level functions)
                - The approach that I covered of "prop drilling" where you go from app all the way down the component tree until where the state is used is not ideal, and it looks like redux has a tool that we will use to address this.
_NOTE_ As I'm going through this, I am seeing that you get the following progression as it relates to state
    1. React: You have to pass the state up and down the component tree since it is stored there.  This makes it hard to get things between components
    2. Redux: You store the state in a single location that is held at the top of the component tree.  This gets rid of the state being distributed, BUT still has a problem with the "prop drilling"
    3. Redux Tooling: Probably lets you access that centralized store without the prop drilling
- Redux Toolkit
    - `createSlice` Method: reduces the boilerplate that you need to write to create a reducer.  Just create a config object with the name of the slice, the initial state, and the reduces (no need to write switch statements and action functions separately)
        - Syntax
            ```js

            ```
        - Automatically generates action creators and action types based on the case reducer functions in the reducers property
        - creates an object that contains the necessary items to manage that state slice (action creators, state, etc.)
        - export the action creators separately from the reducers
            ```js
            export const { addTodo, toggleTodo } = todosSlice.actions;
            export default todosSlice.reducer
            ```
    - Immer: Lets you use mutate logic like `.push()` to make adjustments to state and avoid having to copy things
        `return [...state, action.payload]` becomes `state.push(action.payload)`
    - Configure store: allows us to simply import the function, call it by providing a configuration object (for the puroses of this just setting up a reducer), and then it provides a root reducer, store, middleware that checks for accidentaly mutating state, and DevTools
- Building Redux store in vanilla JS
    1. Define `createStore()` as a function that takes in a reducer and returns an object with three methods
    2. Hold the current state of the application
    3. Manage listeners
    4. Handle incoming actions
    5. Initialize state to initial value of reducer 
        ```js
        // 1. General outline of the function
        const createStore = (reducer) => {
            // 2. State variable for maintaining the state
            let state;
            // 3a. Create arary of listeners
            let listeners = [];
            const getState = () => state;
            // 4. DEal with actions
            const dispatch = (action) => {
                // 4a. update the state based on the reducer's output for that given action
                state = reducer(state, action);
                // 4b. Execute each listener (don't pass state here, you run .getState() within each listener)
                listeners.forEach(listener => listener());
            };
            // 3b. Add listeners throught the subscribe method (returns function to enable unsubscribe functionality when you want to remove a listener)
            const subscribe = (listener) => {
                listeners.push(listener);
                return () => {
                    listeners = listeners.filter(l => l !== listener)
                }
            };
            // 5. Initialize the state
            dispatch({});
            return { getState, dispatch, subscribe };
        }
        ```
- Middleware and Thunks:
    - BLUF helps you deal with asynchronous operations that occur as part of updating the application state
    - Within REdux context:
        - Middleware runs between when action is dispatched by the event handler and when that action is passed alongto the reducer
        - Implementation is through ReduxToolkit's `createAsynchTunk()` and `createSlice()`'s `extraReducers` option
        - `import {applyMiddleware} from 'redux';`
            - `applyMiddleware` means that calls to displatch are actually calls to the entire middleware pipeline (i.e. dispatch -> middleware -> reducer)
                ```js
                const store = createStore(
                    exampleReducer,
                    initialState,
                    applyMiddleware(
                        middleware1,
                        middleware2,
                        middleware3,
                    )
                )
                ```
            - inidividual pieces of middleware must be implemented as a higher order function
                ```js
                const exampleMiddleWare = storeAPI => next => action => {
                    // do stuff here
                    return next(action); // passing action to the next middleware in the pipeline
                }
                ```
        - Thunks: Hihher order function that wraps computation we want to perform later
            - Example: `add()` returns funk that will perform x + y
            ```js
            const add = (x, y) => {
                return () => {
                    return x + y;
                }
            }
            ```  
            - USed as part of the process for dealing with **promise lifecycle actions** (`createAsyncThunk()`);
                - arguments: asynchronous action's type (i.e. `resourceType/actionName`), payload creator: aync function that returns promise resolving to result of async operation
                ```js
                import { createAsyncThunk } from '@reduxjs/toolkit';
                const fetchUserById = createAsyncThunk(
                    'users/fetchUserById', // action type: format is 'nameOfSlice/nameOfAction' so this would (likely) be 'users/fetchUserById'
                    async (arg, thunkAPI) => { // payload creator (does not dispatch actions - stuff that gets sent to the reducer has to be a pure function)
                        const response = await fetchUSer(arg);
                        return response.json();
                    }
                )
                ```
                - asynch function parameters
                    - `arg`: first argument passed to the ation creator (if you want to pass multiple arguments to the thunk, bundle multiple arguments into a single object)
                    - `thunkAPI`: built in object
                - how are we dealing with the different potential promise statuses?  When you pass an action type to `createAsyncThunk`, e.g. `resourceType/actionType`, you produce three action types that correspond to the different potential promise states: `resourceType/actionType/pending`, `resourceType/actionType/fulfilled`, `resourceType/actionType/rejected`.
            - if you use `createAsyncThunk` to make those promise lifecycle action types, you will need a way for the `createSlice` object to deal with the actions created there.  This requires using the `extraReducers` propery within `createSlice`
            - redux toolkit's `configureStore` returns a store that applies a thunk middleware by default.
            - Setting up Redux Dev Tools
        - Process of dealing with async calls using middleware and thinkgs
            1. (within the slice) define and export a function with `createAsyncThunk()` that conains the path of the action and an async function
                ```js
                export const asyncActionCreator = createAsyncThunk(
                    'nameOfSlice/nameOfAction',
                    async ({ prop1, prop2 }) => {
                        // do some asynchronous operations here 
                    }
                );
                ```
            2. (within the slice) create variables in the slice's initial state that reflect the fact that you will need to deal with the pending/rejected/fulfilled promise lifecycle states.
                ```js
                export const commentsSlice = createSlice({
                    name: 'comments',
                    initialState: {
                        // Add initial state properties here.
                        byArticleId: {},
                        // promise lifecycle variables
                        isLoadingComments: true,
                        failedToLoadComments: false,
                    },
                    // Add extraReducers here.
                    ...
                })
            3. (within the slice) Create logic within the `extraReducers` argument of `createSlice()` to deal with each one of the promise lifecycle states
                ```js
                export const commentsSlice = createSlice({
                    name: 'comments',
                    initialState: {
                        byArticleId: {},
                        isLoadingComments: false,
                        failedToLoadComments: false,
                        createCommentIsPending: false,
                        failedToCreateComment: false
                    },
                    // dealing with the promise lifecycle states
                    extraReducers: {
                        [loadCommentsForArticleId.pending]: (state, action) => {
                        state.isLoadingComments = true;
                        state.failedToLoadComments = false;
                        },
                        [loadCommentsForArticleId.rejected]: (state, action) => {
                        state.isLoadingComments = false;
                        state.failedToLoadComments = true;
                        },
                        [loadCommentsForArticleId.fulfilled]: (state, action) => {
                        state.byArticleId[action.payload.articleId] = action.payload;
                        state.isLoadingComments = false;
                        state.failedToLoadComments = false;
                        },
                    },
                    ...
                })
                ```
            4. (within the component) Within some event that happens (i.e. useEffect that is linked to a certain variable chaning or an event handler), dispatch the action (after it has been imported of course!)
                ```js
                export default function CommentForm({ articleId }) {
                    const dispatch = useDispatch();
                    const [comment, setComment] = useState('');
                    // Declare isCreatePending here.

                    const handleSubmit = (e) => {
                        e.preventDefault();
                        // dispatch your asynchronous action here!
                        dispatch(postCommentForArticleId({articleId, comment}));

                        setComment('');
                    };
                    ...
                }
                ```
            5. create and export a selector for the state objects.
            6. add the slice to the store: `/src/app/store.js`
- End to end notes from the challenge project
    1. define the store within `src/app/store.js` using redux toolkit's `configureStore()` method
    2. import that store into the `index.js` file, alng with react redux's `<Provider>` element, and set the state provider to store 
        ```js
        <Provider store={store}>
            <App />
        </Provider>
        ```
        - This is useful because it means that you don't have to pass state into each and every component directly and is automatically accessible via react redux's magic
    3. within the feature (i.e. the different slices of state), define a slice using create slice.
        - here you need to not only set the name(will be prepended to the actions, so a slice with the name `topicsSlice` and an action `addTopic` will have a name `topicsSlice/addTopic`), initial state, but also define the reducers
        - You also need to define selectors: `export const selectTopics = state => state.<structure-of-slice>`
    4. You will then need to export the state selectors (i.e. ) and actions as named exports and the reducer as a default export
    5. Within the component(s) that corresponds to the feature, you need to use the selector and action functions that are exported from the slice
        - Importing `useDispatch()` and `useSelector()` allows you to take advantage of the Redux magic
        - If you pass your selector function to useSelector (i.e. `useSelector(selectTopics)`) you don't need to provide a state input for the selectTopics function due to the aforementioned redux magic
        - Similarly for useDispatch, you pass it the **INVOKED ACTION** (i.e. `useDispatch(action())` rather than `useDispatch(action)`), constructing the payload as necessary.

## Git and GitHub Pt. II