Assignment 1 - Hello World: GitHub and d3  
===

This is a starting project to make sure you can write and host a webpage that generates graphics using d3. 

The primary goal is to be able to generate graphics primitives (circles, rectangles, lines, polygons) at different locations on the screen with different colors. 

The secondary goals are to 1) introduce you to coding on GitHub, including publishing your visualizations with GitHub Pages, and 2) teach you how to host your web-based visualizations on a web-server, which opens up a world of possibilities.

You may write everything from scratch, or start with demo programs from books or the web. 
If you do start with code that you found on any project, you **must identify** the source of the code in your README and, most importantly, make non-trivial changes to the code to make it your own so you really learn what you're doing.
For AI-generated code, please see the policy in the syllabus.

For example, you could download one of the d3.js examples, read it through so you understand what it's doing, and then change the appearance of the graphical output to use different color schemes, different primitive shapes, different layouts of the primitives, and so on.

Resources
---

If you need a JavaScript/HTML/CSS refresher, see [MDN's Learn web development](https://developer.mozilla.org/en-US/docs/Learn_web_development), [Codecademy's Introduction to JavaScript](https://www.codecademy.com/learn/introduction-to-javascript), or find one of your choosing on the web.

If you need a Git/GitHub refresher, some possible resources include GitHub's [Hello World](https://docs.github.com/en/get-started/using-github/hello-world), [GitHub flow](https://docs.github.com/en/get-started/using-github/github-flow), and [Fork a repository](https://docs.github.com/en/pull-requests/how-tos/work-with-forks/fork-a-repo) guides, [GitHub Skills](https://skills.github.com/), and [Learn Git Branching](https://learngitbranching.js.org/).

Requirements
---

1. Your project should contain at least four kinds of graphics primitives (circles, rectangles, lines, polygons) in different colors. 
2. Your document should identify the sources of the code if you start with code that you found. 
3. Your code should be forked from the GitHub repo and published with GitHub Pages. See the "GitHub Details" section below for detailed instructions on how to do this.

GitHub Details
---

- Fork the GitHub Repository for Assignment 1. You now have a copy associated with your username.
- Make changes to index.html to fulfill the project requirements. 
- Turn on GitHub Pages for your fork: Settings → Pages → Build and deployment → Source: "Deploy from a branch", Branch: `main`, folder `/ (root)`. See [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) if you need help. Spend some time learning this if you're new!
- Edit the README.md with a link to your GitHub Pages site "https://YourUsernameGoesHere.github.io/a1-ghd3/".

Submission Details
---
- To submit, make a [Pull Request](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request-from-a-fork) on the original repository.
- Note: name your pull request using the following scheme: 
```
a1-your Gh username-your first name-your lastname

```

Vis Details
---

For this project you should use d3.js. Later projects will use other tools (e.g. Python libraries), but d3 is the industry standard for now.
You can learn from examples on the [d3.js](https://d3js.org) site or start from scratch.

See [Getting started](https://d3js.org/getting-started) for ways to load d3. To preview your page locally, open index.html in Chrome, or run `python3 -m http.server` in the repo folder and visit http://localhost:8000.

Creative solutions are welcome! In the past I've seen recreations of paintings, interactives, and more.

Please go beyond the minimum requirements of this project-- we've made it SUPER basic so you can explore, or fill in any gaps in your understanding of web coding.
Experiment with other aspects of the [d3 API](https://d3js.org/api) and the examples in the [D3 gallery](https://observablehq.com/@d3/gallery). 
Try making the elements interactive, for example, or animate them.

Grading
---

Grades are on a 120 point scale. 
96 points will be graded for functionality: the program does what the assignment requests with an informative README. 

We will use Google Chrome to view submissions. 
Be sure to test your code there.

Below are some, but not necessarily all, of the key points we will consider during grading:

- Circles and Rectangles  
- Lines  
- Paths  
- Different colors  
- README Quality
    - A description of what you have created. 1-2 screenshots are recommended for the README.  
    - A working link to the hosted files (your GitHub Pages url)  
    - Section for Technical and Design Achievements

Technical Achievement Description -- 12  
Design Achievement Description -- 12

Remember, it is up to *you* to define what constitutes a technical and design achievements.
Be ambitious as these are designed to allow you to shape your learning.
These are the only way to move from B to A territory.