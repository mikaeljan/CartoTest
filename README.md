# CartoJS Code Test
Two versions of my take on Code Test from CARTO
- Vanilla version

- Express JS version


(Normally I would create two branches or even two sep. projects but I feel this is still within. If the project was bigger I would divide it.)

## File structure:
1. `src/` has all the files I used for building the project from scratch - not optimalized
2. `dist/` has optimalized files, minified scripts etc.
3. `srcE/` has source files for Express.js version of the project (uses Pug.js templating engine)
4. `distE/` has optimalized Express.js version of the project

## How to run
1. For running Vanilla version: just open index.html in `src/` or `dist/`. Depends whether you want optimalized version or not.
2. For running Express.js version, please make sure you have [Node.JS](https://nodejs.org/) installed.
    1. Open command line and navigate yourself either to the `srcE/` or `distE/` and run `npm install` then `node app`.
    2. The server should run on port 3000.

## To do
1. Ked budes mat basic styles hotove a bude to vyzerat ako na obr<br>tak to vsetko ostava kde? SRC Files. Nezabudni prekonvertovat sass na css

3. Kedy vsunut Gulpfile na building? (gulp by mal vytvorit podmienky tak ze len stlacim v dist subore node app a pojde to.) 
    1. Gulp musi - minify CSS, minify JS (ale iba ten co tam chceme davat a to MOZNO nie je ziaden)
    2. Compress images
    3. Vytvorit dist folder
    

### Notes during Code Test
0. The very first page with CODE TEST made as an separate .html can be also only an overlay of the next page DOCUMENTATION and after clicking it hides showing the page.

1. Made a custom grid system in Sass, was considering using some already created online, decided against it for practicing purposes.

2. SVGs are inline in order to save requests to the server.

3. Since it was suggested not use jQuery I did my first take on making custom non-jQuery/JS hambuger menu with only CSS. The result was clumsy and very specific to this navigation, took a lot of experimenting and custom styling. Might reconsider this approach next time.

4. Furthemore, I would use a JS dropdown variation on menus to enable navigating.

## Contact
For any questions, please feel free to contact me:<br />
<a href="mailto:mikael.janek@gmail.com">mikael.janek@gmail.com</a>
