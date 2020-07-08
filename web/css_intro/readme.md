

- Centre the heading  style="text-align:center"

- Explain box model
    - All HTML models presented in boxes
    - From outside-in:
        - Margin: Transparent spacing around the edge of the box
        - Border: Stylable border around the padding and its content
        - Padding: Transparent spacing around content
        - Content: The text/image/video etc

- Explain <style> tag/syntax of css
    - element type to apply to.
    - property names followed by colon, space, then value, followed by semi colon.
    - some properties can have several space-separated values eg. border
        - but might also have attribute-specific values
        - border: width, style, colour can also be border-width, border-style etc
    - nice and flexible but prone to errors from typos etc

- So, let's experiment.
    - Give some differnet colour backgrounds:
        - background-color for <div>
        - background-color for <p>
    - Put a border (border 3px solid magenta) around the div elements
        - could also do border-color, border-width, border-style

- Next, maybe it would be nice to limit width to preserve our formatting etc
    - apply max-width to be something like 400px

- So that works, but what about bigger screens?
    - Can use conditional styling.
    - @media rule allows checks of window or device size and orientation
    - @media (min-width: 800px) 
    - add div to specify max width is 800px
    - Let's also give <p> a different background-color 
    - And as we have more space, let's "text-align: center"

- Brilliant. Now let's try and do somehting about those images
    - They keep pusing the important info off the screen. Grr!
    - For our small stle, let's limit the <img> width to 400px
    - Let's use 800px for our large screen css.

- That's better, but some of the images might now look odd.
    - We can limit the height to preserve the ratio
    - instead of a specific pixel height, let's use height: 56.25%
        - This is assuming an aspect ratio of 16:9 so
    - Let's also use object-fit: cover which tells renderer to preserve
      image ratio by cropping image sides.
        - There are other options here eg. center to just use as-is and crop

- Even though that message is now always going to be visible, it's still not enough.
    - Let's do some specific style just for that. But as we have it in a <p> tag,
      we need a way to do this without affecting the other paragraphs.
    - Enter classes and IDs.
        - Class is noted with a full stop (.my_class) and used for multiple elements
        that are assigned the same class type
        - An ID is noted with a hash (#my_id) and applied to specific element.
    - So, create an #important_info entry in the style
        - background-color: lime 
        - color: yellow
            - these horrid colours will make is stand out
        - font-weight: bold
        - font-size: 20px
            - now bigger and fatter. But maybe those colours make it hard to see: shadow!
        - text-shadow: 2px 2px 5px black (x, y, blur radius, colour)
    - Now add id="important_info" (or whatever called) to the <p> tag of that footer info.

- One more thing. I don't like the border around the button. Let's remove it.
    - For this, we can use classes.
    - create a new entry (maybe below our div?)
    - name it "div.some_class_name"
        - move the border styling from the current div to div.whatever
    - add class="some_class_name" to the main div in body and the div around the footer. 
        - Make sure the div around the button does NOT have that class.
        - Also make sure not to put div.some_class_name; only the name of the class.
        - The reason we specify div in the css is so that this style is only applied to div elements with that class name; means we can have other styling with that class name.

- By now our file is beginning to get a but messy. Time to clean it up. 
    - Open style.css
        - Copy the contents of the <style> tag to the style.css file
        - Remove the <style> tag and its contents from the html
        - Replace with a <link> tag (link to external resource, mostly css) that specifies:
            - rel="stylesheet"      relationship between here and there       
            - type="text/css"       the file content type
            - href="style.css"      the location
        - save reload etc and style should still work.
    - Open script.js
        - Copy contents of the <script> tag to script.js file
        - Remove sript from within that tag
        - Add src="script.js" attribute to the <script> tag.
        - Save/reload and button should still work.


Congrats! Now experiment and have fun. Great resources:

- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference
- https://www.w3schools.com/cssref/


Etension tasks (using what learned and resources above)

- Move the header styling into the style.css file
- Align all content to centre of page (margin: auto; in div)
- Add animation of colours to the important information 
- Replace magic numbers that we've used with variables:
    - Note that this won't work in the @media query
    Declare:
    :root {
        --my_var_name: value;
    }

    Use:
    div {
        max-width: var(--my_var_name);
    }
