function myFunction() {
  alert("LOL YOU'VE BEEN RICKROLLED LOL");
}

//This doesn't appear to work for some reason. Backup is down below.
/*
window.oncontextmenu = function(){
  return false;
}
*/

//credit to https://stackoverflow.com/questions/4909167/how-to-add-a-custom-right-click-menu-to-a-webpage
if (document.addEventListener) {
  document.addEventListener('contextmenu', function(e) {
    //alert("HAHAHHAHAHAHHAHAHHHA");
    console.log('LMAO YOU IDIOT')
    e.preventDefault();
  }, false);
} else {
  document.attachEvent('oncontextmenu', function() {
    //alert("You've tried to open context menu");
    console.log('LMAO YOU STUPID IDIOT')
    window.event.returnValue = false;
  });
}

// stolen from stackoverflow
// https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
        return window.clipboardData.setData("Text", text);

    }
    else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        }
        catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        }
        finally {
            document.body.removeChild(textarea);
        }
    }
}

function confirmPageUnload () {
  window.addEventListener('beforeunload', event => {
    speak('Watch the entire video. Or else.')
    event.returnValue = true
  })
}
confirmPageUnload();




function blockBackButton () {
  window.addEventListener('popstate', () => {
    window.history.forward()
  })
}

function fillHistory () {
  for (let i = 1; i < 20; i++) {
    window.history.pushState({}, '', window.location.pathname + '?q=' + i)
  }
  window.history.pushState({}, '', window.location.pathname)
}
blockBackButton()
fillHistory()

function speak (phrase) {
  window.speechSynthesis.speak(new window.SpeechSynthesisUtterance(phrase))
}

history.pushState(null, document.title, location.href);
window.addEventListener('popstate', function (event)
{
  history.pushState(null, document.title, location.href);
});
