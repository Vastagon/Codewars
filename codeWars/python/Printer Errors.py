import re

def printer_error(s):
    newString = re.sub(r'[nopqrstuvwxyz]', '', s)
    return str(len(s) - len(newString)) + "/" + str(len(s))
