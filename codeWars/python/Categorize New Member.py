def open_or_senior(data):
    dataArray = []
    for item in data:
        if item[0] > 54 and item[1] > 7:
            dataArray.append("Senior")
        else:
            dataArray.append("Open")
    return dataArray
