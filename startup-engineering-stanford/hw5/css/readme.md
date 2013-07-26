# Question 1

General CSS Questions

This interactive quiz is meant to get into CSS in a little more detail,
expanding on our high level treatment in Lecture 6. First, skim the Mozilla
documentation on CSS and keep it open in a separate tab.

Now to the first question: What is the purpose of Cascading Style Sheets (CSS)?
(Hint: see here).

- [ ] To provide a basic skeleton for page structure
- [ ] To provide a full language for handling user events and clicks on a page
- [ ] To handle the cascade method of styling a page, as opposed to the
iterative method
- [x] To separate a document's styling/appearance from informational content
- [ ] To create an alternative language for those who do not like Javascript

# Question 2

Which statements describe the CSS box model? (Hint: see here, here, and here).

- [x] By changing the values of box-model-related properties we can achieve 2D
layouts of HTML elements on a webpage
- [ ] It is now deprecated in favor of WebGL for 3D layouts
- [x] It was historically implemented differently in the Internet Explorer
family of browsers (see here)
- [ ] It is used to enclose website code in a sandbox so that it cannot affect
the system
- [x] It is the model that describes the content of the space taken by an
element in an HTML page

# Question 3

Which statements are accurate about why CSS inheritance is useful?
(See here and here)

- [ ] It allows you to leave out HTML elements from a page, implicitly
specifying them via CSS inheritance
- [x] The inheritance cascade is a systematic way to determine which of several
possible styles applies to an element
- [x] It allows you to specify a style once and have it apply to all children of
an element.
- [ ] It is an alternative to Javascript's prototypal model
- [x] It reduces the amount of redundancy in a CSS file

# Question 4

What is a CSS selector? (Hint: see here).

- [ ] A string that must always start with a period or hash (#)
- [ ] Another term for a CSS rule.
- [ ] A special CSS term for class or id attributes.
- [ ] A term which should only be used for tag selectors
- [x] The part of a CSS rule that specifies exactly which DOM element(s) the
CSS rule applies to.

# Question 5

In the CSS box model, what is the difference between margins and padding?
(Hint: see here).

- [ ] They are synonyms
- [ ] The padding specifies the space between elements, while the margin is the
space between the content of an element and its border
- [ ] Only the padding is really useful for layout purposes
- [ ] They are different ways to achieve the same outcome
- [x] The margin specifies the space between elements, while the padding is
the space between the content of an element and its border

# Question 6

Which of the following are ways that CSS rules can be included in a webpage?
(Hint: see here, here, and here).

- [x] CSS rules can be applied dynamically after the page loads by Javascript,
via JQuery's css method
- [x] Embedding CSS via `<style>` elements
- [x] External CSS via `<link>` elements
- [x] Importing CSS via the `@import` rule
- [x] Inline CSS via style attributes

# Question 7

What is a CSS reset? (Hint: see here).

- [x] A CSS style file imported before other styles are applied, which overrides
browser defaults and imposes the same starting font sizes, margins, and the like
- [ ] A once-popular technique that is no longer included within CSS frameworks
like Bootstrap
- [ ] A power management feature for mobile devices that resets a phone if a
page is viewed for too long
- [ ] A Bootstrap CSS widget that styles reset and power-off buttons
- [ ] A way to reinitialize all JS variables in the page with CSS

# Question 8

The HTML DOM API suggests that it is useful to conceptualize a webpage's
structure as a tree or grove (i.e. a collections of tree). While this maps well
to a huge online book with a linear hierarchy of nested chapters and
subchapters, how do documents that visually correspond to layouts of 2D
rectangles fit into this conceptual framework? (Hint: see here and here)

- [x] CSS rules are used to specify the margins, padding, position, display,
floating, and other characteristics of HTML elements.
- [ ] A special 2D DOM API is used to manipulate elements in 2D pages
- [ ] A non-JS plugin such as Flash is used to accomplish 2D layouts
- [ ] A separate set of HTML tags is used to lay out 2D pages
- [ ] 2D layout is accomplished via Javascript after the 1D page layout is
completed

# Question 9

Questions on a Specific CSS Code Snippet

Read this section and then consider the following code:

```css
strong { color: red; }
.lead { font-size: 14px; font-weight: bold; }
#special { display: block; background-color: yellow; }
```

First question: which of the following corresponds to a CSS rule in the above CSS snippet?

- [ ] #special
- [x] strong { color: red; }
- [ ] .lead
- [ ] color
- [ ] strong

# Question 10

Which of the following corresponds to a CSS class in the above CSS snippet?

- [ ] #special
- [ ] strong { color: red; }
- [ ] color
- [ ] strong
- [x] .lead

# Question 11

Which of the following corresponds to a CSS id in the above CSS snippet?

- [ ] color
- [ ] .lead
- [ ] strong { color: red; }
- [x] #special
- [ ] strong

# Question 12

Which of the following corresponds to a CSS property in the above CSS snippet?

- [ ] .lead
- [ ] #special
- [ ] strong
- [x] color
- [ ] strong { color: red; }
