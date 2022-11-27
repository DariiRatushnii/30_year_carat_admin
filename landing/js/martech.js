
let fileName = 'MarTech_Made_in_Ukraine_2021_ENG.pdf'

lang.addEventListener('change', e => {
    e.target.value === 'eng' ? fileName = 'MarTech_Made_in_Ukraine_2021_ENG.pdf' : fileName = 'MarTech_Made_in_Ukraine_2021_UKR.pdf'
}
)

$("#form").submit(function (e) {
    const that = this;

    e.preventDefault()
    $('#form .pink-btn').attr('disabled', true);

    $('#test-popup').html(`<p>Thank you!</p>
            <p>Please wait for the report download.</p>`)

    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true,
        mainClass: 'mfp-fade'
    }).magnificPopup('open');

    $.ajax({
        type: "GET",
        url: "/martech/download.action",
        data: $(this).serialize(),
        xhr: function () {
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 2) {
                    if (xhr.status == 200) {
                        xhr.responseType = "blob";
                    } else {
                        xhr.responseType = "text";
                    }
                }
            };
            return xhr;
        },
        success: function (data) {


            const blob = new Blob([data], { type: "application/octetstream" });
            const isIE = false || !!document.documentMode;
            if (isIE) {
                window.navigator.msSaveBlob(blob, fileName);
            } else {
                const url = window.URL || window.webkitURL;
                link = url.createObjectURL(blob);
                const a = $("<a />");
                a.attr("download", fileName);
                a.attr("href", link);
                $("body").append(a);
                a[0].click();
                $("body").remove(a);
            }
            $('#form .pink-btn').attr('disabled', false);

            that.reset()
            fileName = 'MarTech_Made_in_Ukraine_2021_ENG.pdf'
        },
        error: function () {
            $('#test-popup').html('<p>ERROR!</p>')
            $('.open-popup-link').magnificPopup({
                type: 'inline',
                midClick: true,
                mainClass: 'mfp-fade'
            }).magnificPopup('open');
        }

    })

})

goToForm.addEventListener('click', function (e) {
    e.preventDefault();
    form_wrap.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });

    setTimeout(() => email.focus(), 1000);

});
