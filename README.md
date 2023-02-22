# Mandelbrot Set in JS Canvas.

There are some problems with drawing Mandelbrot set,
if you zoom in too much then some artefacts start showing up:

![Image of artefacts](https://i.imgur.com/NapU2Qn.png)

The artefacts may appear because of how i coded coloring part of my code:

![Image of my code](https://i.imgur.com/MSUuXIn.png)

If you delete part of the code where pixels are grouped and then colored, the artefacts disapear and mandelbrot set looks like this:

![Image of Canvas without artefacts](https://i.imgur.com/AdoD5E2.png)

In order to achieve it you need to change old code like this:

![Image of my code](https://i.imgur.com/y8w00SM.png)
