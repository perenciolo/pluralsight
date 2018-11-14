#! /usr/bin/env python3
import sys
from math import log

"""A module for demonstraiting exceptions."""


def convert(s):
    """Convert to an integer."""
    try:
        x = int(s)
    except (ValueError, TypeError) as e:
        print("Conversion error: {}".format(str(e)), file=sys.stderr)
        raise
    return x


def string_log(s):
    v = convert(s)
    return log(v)
