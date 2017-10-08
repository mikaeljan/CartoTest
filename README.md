# CartoJS Code Test
Two versions of my take on Code Test from CARTO
- Vanilla version

- Express JS version


(Normally, I would create two branches or even two sep. projects but I feel this is still within limits. If the project was larger I would divide it.)

## File structure:
1. `src/` has all the files I used for building the project from scratch - not optimalized
2. `dist/` has optimalized files, minified scripts etc.
3. `srcE/` has source files for Express.js version of the project (uses Pug.js templating engine)
4. `distE/` has optimalized Express.js version of the project

## How to run
###  1. Vanilla version
For running Vanilla version: simply open index.html in `src/` or `dist/`.
<br/>Depends on whether you want the optimalized version or not.

### 2. Express.js version 
For running Express.js version, please make sure you have [NodeJS](https://nodejs.org/) installed.
1. Open command line and navigate  either to the `srcE/` directory and run `npm install` then `node app`.<br/>
2. The server should run on port 3000.
3. Open your browser's [localhost](localhost:3000).

Note: The Express.js version will have already minified CSS provided. The original CSS/SASS files can be found in Vanilla's `src` folder.



### Notes during Code Test
1. The index.html with CODE PAGE is made as an separate .html/.pug.<br>
However it can also be turned into an overlay of the following docs.html file instead and after clicking it, it hides and shows the page.

2. Made a custom grid system in SASS, was considering using some already created online, decided against it for practicing purposes.

3. SVGs are inline in order to save requests to the server. Same goes for the Vanilla's CSS style after optimization.<br>

4. Since it was suggested not use jQuery I did my first take on making custom non-jQuery/JS hamburger menu with only CSS. The result was clumsy and very specific to this navigation, took a lot of experimenting and custom styling.
<br>Might use a Vanilla JS for this next time.


## To Add
1. Add JS to implement menus interactions (dropdowns etc.)

2. In Express.js implement error handling (wrong /route would show basic template with layout ) 


## Contact
For any questions, please feel free to contact me:<br />
<a href="mailto:mikael.janek@gmail.com">mikael.janek@gmail.com</a>
