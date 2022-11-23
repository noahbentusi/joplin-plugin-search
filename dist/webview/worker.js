function dumpResult(line) {
    self.postMessage({
        event: "result",
        line
    });
}

function flushDump() {
    self.postMessage({
        event: "finish"
    });
}

function parseBody(
    keyword, isRegex, body, topLineNum, bottomLineNum)
{
    let regex = null;
    if (isRegex)
        regex = new RegExp(keyword, "g");

    function matchLine(line) {
        if (!isRegex)
            return line.indexOf(keyword) != -1;

        return Array.from(line.matchAll(regex)).length != 0;
    }

	let toplines = [];

    const lines = body.split("\n");
    let lineNumber = 0;

    while(lineNumber < lines.length)
    {
        let line = lines[lineNumber];

        toplines.push({
            lineNumber,
            lineContent: line
        });

        while(toplines.length > topLineNum)
        {
            toplines.shift();
        }

        if (matchLine(line))
        {
            toplines.forEach((line) => {
                dumpResult(line);
            });
            toplines = [];

            let bottom = bottomLineNum;
            while(bottom--) {
                ++lineNumber;

                if (lineNumber >= lines.length)
                    break;

                line = lines[lineNumber];

                dumpResult({
                    lineNumber,
                    lineContent: line
                });
            }
        }

        ++lineNumber;
    }

    flushDump();
}

self.onmessage = (event) => {
    const message = event.data;
    
    if (message.event == "start") {
        const {
            keyword,
            isRegex,
            body,
            topLineNum,
            bottomLineNum
        } = message;

        parseBody(keyword, isRegex, body, topLineNum, bottomLineNum);
    }

    /*self.postMessage({
        event: "finish"
    });*/
};