document.addEventListener('DOMContentLoaded', function () {
        // get the current tab
        chrome.tabs.getSelected(null, function (tab) {
                var url = tab.url; // current url
                // generate the QR Code
                $('#qrCode').qrcode({
                        text: url,
                });

        });


}, false);