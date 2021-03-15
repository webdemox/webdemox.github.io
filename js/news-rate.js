$(document).on('ready', function () {
    $('.transfer1 .current').prepend('<img class="transfer1-icon" src="images/Icon/flag/united-kingdom.svg" />')
    $('.transfer1 .nice-select').on('change', () => {
        $('.transfer1 .current .transfer1-icon').remove();
        let selected = $("#transfer1").val();
        let selectLiTag = $('.transfer1').find('li')[selected];
        let img = $(selectLiTag).find('img')[0].cloneNode(true);
        $('.transfer1 .current').prepend($(img))
    })

    let lang = document.createElement('div');
    lang.style.position = 'absolute';
    lang.style.height = '40px';
    lang.style.width = '1px';
    lang.style.top = '0';
    lang.style.left = '0';
    $('.transfer1 .nice-select').append(lang);

    let langSelectLiTags = $('.transfer1').find('li');
    $(langSelectLiTags[0]).prepend('<img class="transfer1-icon" src="images/Icon/flag/united-kingdom.svg" />');
    $(langSelectLiTags[1]).prepend('<img class="transfer1-icon" src="images/Icon/flag/vietnam.svg" />');
});