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

