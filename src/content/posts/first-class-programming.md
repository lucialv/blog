---
title: First class of Programming
published: 2025-09-12
description: A beginner's guide to setting up the development environment and creating your first web application with HTML and JavaScript.
tags: [Programming, Tutorial, HTML, JavaScript, VSCode]
category: Programming-Classes
draft: false
---

# First class of Programming

## IDE and Extensions Installation

### Installing Visual Studio Code (VSCode)

1. Go to the Visual Studio Code downloads website and download the version corresponding to your operating system.
2. Run the installer and accept the license terms.
3. Click the "Next" button (usually no need to modify the options) until the installation is complete.

### Installing the Live Server Extension (Plugin)

When VSCode opens, the last icon in the left column allows you to install extensions.

You need to search for and install **Live Server**.

## First Web Application

The first program recommended when starting to learn a language is "Hello World".
This program simply writes the message "Hello World" on the screen.

It doesn't matter if you don't know anything about the language yet, just copy the code and follow a few instructions to check that the environment you've installed works correctly.
It can also serve as a template for creating your first programs.

In the case of web applications, although all the code can be put in a single file, it's recommended to separate it to make maintenance easier as the application grows.
For now, the simplest separation is:

- An **HTML file** where the document content will go (text, images, links...).
- A **CSS file** where to put the styles for different types of elements (general font type and size, headers...).
- A **JS file** where we'll write the JavaScript code to run the application.

## HTML, CSS and JavaScript Code

First of all, you need to create a folder for the project.
It's recommended to create the structure **PROG → INTRODUCTION → HELLO** inside the user folder.

Then, open VSCode and, in the main menu, select **File → Open Folder** to open the HELLO folder that was created earlier.
When opening a folder for the first time, it will ask if you trust the authors of the folder and the files it contains: you need to check the box and click the **Yes, I trust the authors** button.

Inside the EXPLORER column, the HELLO folder will appear.
Right-clicking inside and choosing the **New File...** option will create a new file and you need to give it a name.

You need to create the files: `hello.html` and `hello.js` (for now, there's no need to create the styles file).
When selecting a file, it will open in the main window and you need to copy the corresponding code shown below.

### HTML Document (hello.html):

```html
<!doctype html>
<html lang="en">
    <head>
        <title>Hello</title>
        <meta charset="UTF-8" />
        <script defer src="hello.js"></script>
    </head>

    <body>
    </body>
</html>
```

### JavaScript Document (hello.js):

```javascript
"use strict";

// The alert() method is used to display messages and data
alert("Hello World");
```

## Running the Application

To open the application in a web browser, you need to right-click on the `hello.html` file and select the **Open with Live Server** option.

This will make the application open in the default browser and display a message with the text "Hello World".
If you modify and save the code of the page files (or by pressing the F5 key), the message will be displayed again.

## DOM Manipulation - Modifying HTML Content

Beyond showing simple alerts, JavaScript can interact with and modify the HTML content of your web page. This is called **DOM (Document Object Model) manipulation**.

Here's an example of how to select and modify an HTML element:

```javascript
let paragraf1 = document.getElementById("p1");
paragraf1.innerHTML = "This is the second paragraph";
```

### Explanation:

1. **`document.getElementById("p1")`** - This method searches for an HTML element that has an `id` attribute with the value "p1". It returns a reference to that element.

2. **`let paragraf1 =`** - We store the reference to the HTML element in a variable called `paragraf1`. This allows us to work with that element later.

3. **`paragraf1.innerHTML =`** - The `innerHTML` property allows us to change the content inside the HTML element. We can put text, HTML tags, or both.

4. **`"This is the second paragraph"`** - This is the new content that will replace whatever was inside the element with id "p1".

### Complete Example:

To see this in action, you would need to modify your HTML file to include a paragraph with an id:

```html
<!doctype html>
<html lang="en">
    <head>
        <title>Hello</title>
        <meta charset="UTF-8" />
        <script defer src="hello.js"></script>
    </head>

    <body>
        <p id="p1">This is the original paragraph content</p>
    </body>
</html>
```

And then your JavaScript file would contain:

```javascript
"use strict";

// First show the alert
alert("Hello World");

// Then modify the paragraph content
let paragraf1 = document.getElementById("p1");
paragraf1.innerHTML = "This is the second paragraph";
```

When you run this application, you'll first see the "Hello World" alert, and after closing it, you'll see that the paragraph text on the webpage has changed from "This is the original paragraph content" to "This is the second paragraph".