# Tweening

Documentation: https://docs.godotengine.org/en/stable/classes/class_tween.html

Lecture from Udemy: https://www.udemy.com/course/godot-genesis-learning-through-6-classic-game-genres/learn/lecture/41485106#overview

Tweening is a technique for doing ad hoc modifications over time.  

## Creating a `Tween`

You can set up an ad hoc `Tween` like this:

```gdscript
var tween = get_tree().create_tween()
```

This will create a `Tween` which is independent of the object being tweened.  If you want the `Tween` to die with the object, create it from the node:

``` gdscript
var tween = create_tween()
```

For the attack animation under consideration, I'll probably attach it to the slime.  That feels more correct than having it float around as a tree based animation.  

This is how I'm going to handle the attack animation for the slime in assignment 2 of the godot genesis class.  More details to come.

## Setting up the properties to animate

The general syntax is:

```gdscript
tween.tween_property(NODE, "path/to/property", FINAL_VALUE, DURATION_IN_SECONDS.float)
```

All tweeners run serially unless they are marked as parallel.  So, for a sequence like this:

```gdscript
var tween = get_tree().create_tween()
tween.tween_property($Sprite, "modulate", Color.RED, 1)
tween.tween_property($Sprite, "scale", Vector2(), 1)
tween.tween_callback($Sprite.queue_free)
```

1. The sprite will turn red over the course of second 
2. The sprite will scale down to 0 over the second 2
3. The sprite will have `queue_free` called on it at the end of the sequence.

To run animations in parallel, do this:

```gdscript
var tween = create_tween()
tween.tween_property(...)
tween.parallel().tween_property(...)
tween.parallel().tween_property(...)
```

The tweeners called after `parallel` will run simultaneously with the first `tween_property` call.

Tweeners can be modified with transition types:

```gdscript
var tween = get_tree().create_tween()
tween.tween_property($Sprite, "modulate", Color.RED, 1).set_trans(Tween.TRANS_SINE)
tween.tween_property($Sprite, "scale", Vector2(), 1).set_trans(Tween.TRANS_BOUNCE)
tween.tween_callback($Sprite.queue_free)
```

There are a LOT of transition types and I'll need to experiment with them to fully grok.  They're identified in an enumeration [here](https://docs.godotengine.org/en/stable/classes/class_tween.html#enumerations).

`Tweens` can do fucking ANYTHING, so don't hesitate to look at the docs if you think it can't do the job... 
