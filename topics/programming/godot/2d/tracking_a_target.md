# Tracking a Target

Tracking a target is pretty simple vector math (but I always forget how to do it.)

Source: https://docs.godotengine.org/en/stable/tutorials/math/vector_math.html0

## Instructions

1. Identify your target's position as a Vector(2 or 3, doesn't matter).
2. Subtract the tracker's position from the target's position.
3. Normalize the resulting vector

Example:

```gdscript
	movement_vector = target.global_position - global_position
	movement_vector = movement_vector.normalized()
```

Normalizing the vector makes it possible to multiply it by a movement speed and apply it as a velocity, causing the tracker to move towards the target.

Similar math can probably be used to modify facing, but I'll post code snippets here when I have working examples. 