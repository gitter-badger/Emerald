[![Documentation Status](https://readthedocs.org/projects/emerald-api/badge/?version=latest)](linktodocsgoeshere)

# Emerald
A JS Game Framework

Its simple, fast, and used for fun. 

//Create the index.html file

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <script type='text/javascript' src="emerald.min.js"></script>
    <script type='text/javascript' src="yourscript.js"></script>
</body>
</html>
```

*STEP ONE
*create a new game object
*give it a width and height

```javascript

var mygame = new Game("My First Game In Emerald", 800,600, onGameComplete);

function onGameComplete () {
    console.log('Created Game Canvas');
}
```


*STEP TWO
*tell emerald which methods to call for the game logic
```
setGameLoopFunctions(update, draw, postupdate);
```
