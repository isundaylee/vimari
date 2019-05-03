function getSettings() {
    return {
        'modifier': undefined,
        'excludedUrls': 'mail.google.com, inbox.google.com, netflix.com, keybr.com, thetypingcat.com, reddit.com',

        'hintToggle': 'f',
        'newTabHintToggle': 'shift+f',
        'linkHintCharacters': 'arstqwfpcv',
        'detectByCursorStyle': false,

        'scrollUp': 'k',
        'scrollDown': 'j',
        'scrollLeft': '',
        'scrollRight': '',
        'scrollSize': 150,
        'scrollUpHalfPage': 'u',
        'scrollDownHalfPage': 'd',
        'goToPageTop': 'g g',
        'goToPageBottom': 'shift+g',

        'goBack': 'ctrl+h',
        'goForward': 'ctrl+l',
        'reload': 'r',
        'tabForward': 'l',
        'tabBack': 'h',
        'closeTab': 'w',
        'closeTabReverse': '',

        'openTab': 't',
        'openTabDefaultPage': 'https://google.com',
    };
}

window.getSettings = getSettings;
