---
sidebar_position: 2
---
# Nex

Nex has it's own way of calculating drops. 

First the total damage is calculated, anyone who has done less than 25 damage is removed this amount equals `combined_damage`. 


```
contribution_ratio = player_damage / combined_damage
multiplier = 1.0 / contribution_ratio
unique_rate = multiplier * 22

if the player is mvp
    unique_rate = uniqueRate * 0.90
```

### Example

If a single player does 1700 damage 

```
contribution_ratio = 1700 / 1700 = 1
multiplier = 1.0 / 1 = 1
unique_rate = 1 * 22 = 22
# apply mvp
unique_rate = unique_rate * 0.90 = 19.8
```

The final unique rate will be 1/19.8 for that player, this is not including other boosts currently active.

If two players A and B deal 1000 and 700 damage the rates would be 

**Player A**
```
contribution_ratio = 1000 / 1700 = 0.58
multiplier = 1.0 / 0.58 = 1.7
unique_rate = 1.7 * 22 = 37.4
# apply mvp
unique_rate = 37.4 * 0.90 = 33.66

unique_rate = 1/33.66
```

**Player B**
```
contribution_ratio = 700 / 1700 = 0.4117647058823529
multiplier = 1.0 / 0.41 = 2.43
unique_rate = 2.43 * 22 = 53.46

unique_rate = 1/53.46
```