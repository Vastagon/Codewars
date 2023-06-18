def create_phone_number(n):
    destructuredArray = "".join("{0}".format(i) for i in n)
    formattedString = "({}) {}-{}".format(destructuredArray[0:3], destructuredArray[3:6], destructuredArray[6:10])

    return formattedString
