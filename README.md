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
    <script type='text/javascript' src="./js/lib/signals.js"></script>
    <script type='text/javascript' src="./js/lib/require.js"></script>
    <script type='text/javascript' src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script type='text/javascript' src="./js/lib/jquery.hotkeys.js"></script>
    <script type='text/javascript' src="./js/core/mathutils.js"></script>
    <script type='text/javascript' src="./js/core/keyboard.js"></script>
    <script type='text/javascript' src="./js/core/collision.js"></script>
    <script type='text/javascript' src="./js/core/emeraldcore.js"></script>
    <script type='text/javascript' src="./js/core/drawingHelpers.js"></script>
    <script type='text/javascript' src="./js/exampleGame.js"></script>
</body>
</html>
```

//STEP ONE
//create a new game object
//give it a width and height
```javascript
var mygame = new Game("My First Game In Emerald", 800,600);
```


//STEP TWO
//tell emerald which methods to call for the game logic
```
setGameLoopFunctions(update, draw, postupdate);
```
