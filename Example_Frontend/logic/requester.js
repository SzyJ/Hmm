// === Begin Server Mock === //
var REQUEST_RESPONSE_SIZE = 5;
var nextMockRespIndex = 0;
var mockResponses =
[
    "36\0TitleNumber36\0ContentNumber36\0",
    "35\0TitleNumber35\0ContentNumber35\0",
    "34\0TitleNumber34\0ContentNumber34\0",
    "33\0TitleNumber33\0ContentNumber33\0",
    "32\0TitleNumber32\0ContentNumber32\0",
    "31\0TitleNumber31\0ContentNumber31\0",
    "30\0TitleNumber30\0ContentNumber30\0",
    "29\0TitleNumber29\0ContentNumber29\0",
    "28\0TitleNumber28\0ContentNumber28\0",
    "27\0TitleNumber27\0ContentNumber27\0",
    "26\0TitleNumber26\0ContentNumber26\0",
    "25\0TitleNumber25\0ContentNumber25\0",
    "24\0TitleNumber24\0ContentNumber24\0",
    "23\0TitleNumber23\0ContentNumber23\0",
    "22\0TitleNumber22\0ContentNumber22\0",
    "21\0TitleNumber21\0ContentNumber21\0",
    "20\0TitleNumber20\0ContentNumber20\0",
    "19\0TitleNumber19\0ContentNumber19\0",
    "18\0TitleNumber18\0ContentNumber18\0",
    "17\0TitleNumber17\0ContentNumber17\0",
    "16\0TitleNumber16\0ContentNumber16\0",
    "15\0TitleNumber15\0ContentNumber15\0",
    "14\0TitleNumber14\0ContentNumber14\0",
    "13\0TitleNumber13\0ContentNumber13\0",
    "12\0TitleNumber12\0ContentNumber12\0",
    "11\0TitleNumber11\0ContentNumber11\0",
    "10\0TitleNumber10\0ContentNumber10\0",
    "9\0TitleNumber9\0ContentNumber9\0",
    "8\0TitleNumber8\0ContentNumber8\0",
    "7\0TitleNumber7\0ContentNumber7\0",
    "6\0TitleNumber6\0ContentNumber6\0",
    "5\0TitleNumber5\0ContentNumber5\0",
    "4\0TitleNumber4\0ContentNumber4\0",
    "3\0TitleNumber3\0ContentNumber3\0",
    "2\0TitleNumber2\0ContentNumber2\0",
    "1\0TitleNumber1\0ContentNumber1\0",
    "0\0\0",
];

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}
// === End Server Mock === //

var loadingContent = false;
var lastResponseId = -1;

// TODO: Update from mock data to making server request
function InitialContentRequest()
{
    var mockString = "";
    while (nextMockRespIndex < REQUEST_RESPONSE_SIZE)
    {
        mockString += mockResponses[nextMockRespIndex++]
    }

    sleep(2500);
    return mockString;
}

// TODO: Update from mock data to making server request
function NextContentRequest(lastReceivedId)
{
    var mockString = "";
    for (var i = 0; i < REQUEST_RESPONSE_SIZE && nextMockRespIndex < mockResponses.length; i++)
    {
        mockString += mockResponses[nextMockRespIndex++]
    }

    sleep(2500);
    return mockString;
}

function GetLastIdInContent(content)
{
    var splitArray = content.split("\0");

    for (var idIterator = 0; idIterator < splitArray.length; idIterator += 3)
    {
        var postId = splitArray[idIterator];

        if (postId.length > 0 && !isNaN(postId))
        {
            lastResponseId = parseInt(postId);
        }
    }
}

function RequestNewContent()
{
    // No more content
    if (loadingContent || lastResponseId == 0) return "";

    var content;
    loadingContent = true;
    if (lastResponseId == -1) // Initial content request
    {
        content = InitialContentRequest();
    }
    else // Next content request
    {
        content = NextContentRequest(lastResponseId);
    }

    GetLastIdInContent(content);

    loadingContent = false;
    return content;
}

function AllContentLoaded()
{
    return lastResponseId == 0;
}