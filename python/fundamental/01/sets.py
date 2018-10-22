#! /usr/bin/env python3
blue_eyes = {'Olivia', 'Harry', 'Lily', 'Jack', 'Amelia'}
blond_hair = {'Harry', 'Jack', 'Amelia', 'Mia', 'Joshua'}
smell_hcn = {'Harry', 'Amelia'}
taste_ptc = {'Harry', 'Lily', 'Amelia', 'Lola'}
o_blood = {'Mia', 'Joshua', 'Lily', 'Olivia'}
b_blood = {'Amelia', 'Jack'}
a_blood = {'Harry'}
ab_blood = {'Joshua', 'Lola'}


"""SET - Union

    s.union(t) method. 
    commutative
"""
print(blue_eyes.union(blond_hair))


"""SET - Intersection

    s.intersection(t) method
    commutative
"""
print(blue_eyes.intersection(blond_hair))


"""SET - Difference

    s.difference(t) method
    non-commutative
"""
print(blue_eyes.difference(blond_hair))


"""SET - Symmetric Difference

    s.symmetric_difference(t) method
    commutative
"""
print(blond_hair.symmetric_difference(blue_eyes))
