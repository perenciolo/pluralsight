#! /usr/bin/env python3
import sys


def minimumNumber(n, password):
    """Returns the minimum number of characters to make the password strong

     Args: 
         n: an integer denoting the length of the string.
         password: a strig consisting of n characters   

     Returns: 
         the minimum number of characters to make the password strong
    """
    numbers_set = "0123456789"
    numbers = 0
    lower_case_set = "abcdefghijklmnopqrstuvwxyz"
    lower_case = 0
    upper_case_set = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    upper_case = 0
    special_characters_set = "!@#$%^&*()-+"
    special_characters = 0
    to_strong = 0

    for char in password:
        if char in numbers_set:
            numbers += 1
        if char in lower_case_set:
            lower_case += 1
        if char in upper_case_set:
            upper_case += 1
        if char in special_characters_set:
            special_characters += 1

    missing = 6 - len(password)

    if numbers == 0:
        to_strong += 1
    if lower_case == 0:
        to_strong += 1
    if upper_case == 0:
        to_strong += 1
    if special_characters == 0:
        to_strong += 1

    if len(password) + to_strong < 6:
        if missing > to_strong:
            return missing
        return 6 - len(password) + to_strong

    return to_strong


def main(n, password):
    """Initializes module and call minimumNumber

     Args: 
         n: an integer denoting the length of the string.
         password: a strig consisting of n characters   
    """
    print(minimumNumber(n, password))


# This IF auto executes main() if calling from terminal
if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])  # The 0th arg is the module filename
