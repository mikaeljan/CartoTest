# CartoJS Code Test
Two versions of my take on Code Test from CARTO
- Vanilla version

- Express JS version


(Normally, I would create two branches or even two sep. projects but I feel this is still within limits. If the project was larger I would divide it.)

## File structure:
1. `src/` has all the files I used for building the project from scratch - not optimalized
2. `dist/` has optimalized files, minified scripts etc. CSS sheet is inlined but it is also included as  a file in `css` folder.
3. `srcE/` has source files for Express.js version of the project (uses Pug.js templating engine)
    1. There is no `distE` version of the Express.js version since it uses already minified images and styles. Other files (.pug, .js) are not minified since the project is not very large.

## How to run
###  1. Vanilla version
For running Vanilla version: simply open index.html in `src/` or `dist/`.
<br/>Depends on whether you want the optimalized version or not.

### 2. Express.js version 
For running Express.js version, please make sure you have [NodeJS](https://nodejs.org/) installed.
1. Open command line and navigate to the `srcE/` directory and run `npm install` then `node app`.<br/>
2. The server should run on port 3000.
3. Open your browser's [localhost](localhost:3000).

Note: The Express.js version will have already minified CSS provided. The original CSS/SASS files can be found in Vanilla's `src` folder.



### Notes during Code Test
1. The index.html with CODE PAGE is made as an separate .html/.pug.<br>
However it can also be turned into a simple overlay of the following docs.html file instead and after clicking it, it hides itself and shows the page.

2. Since it was suggested not to use jQuery I did my first take on making custom non-jQuery/JS hamburger menu (the one in the header) with only CSS.<br>
The side bar menu in tutorial.html/.pug is using plain JS and after a consultation with someone more experienced I would choose the CSS version OR JS.

3. Made a custom grid system in SASS, was considering using some already created online, decided against it for practicing purposes.

4. SVGs are inline in order to save requests to the server. Same goes for the Vanilla's CSS style after optimization.<br>

5. I would speak with the designer team to discuss how would they like to have side bar navigation menu handled in mobile sizes.<br>
While the workings of the header menu seems ok, the workings of a side bar menu is in question (push the content away/overlaps the content, where in the overlay would it be located?)



## Further implementations
1. Add JS to implement menus interactions (dropdowns etc.). Use JS for toggling classes (hidden menu/shown menu. Not really a fan of just CSS way of handling this).

2. In Express.js implement error handling (wrong /route would show basic template with error layout ) 

3. Use another MVC framework (Vue,Backbone,KO...) for a site with more dynamic flow.

## Contact
For any questions, please feel free to contact me:<br />
<a href="mailto:mikael.janek@gmail.com">mikael.janek@gmail.com</a>
