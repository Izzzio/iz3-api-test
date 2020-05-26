(function () {

    const protocol = 'http://';
    const domain = 'localhost';
    const port = ':3015';
    const appURL = protocol + domain + port;

    $('#deploy-contract').on('submit', function (e) {
        e.preventDefault();
        let button = $('button', this);
        let result = $('#result', this);
        let data = {source: ($('#code', this).val() || false), resourceRent: ($('#resources', this).val() || false)};
        button.attr('disabled', true);
        result.html('');
        $.ajax({
            url: appURL + '/contracts/ecma/deployContract',
            method: 'POST',
            data: data,
        })
            .always(function (resp) {
                result.html(`${toBeautyfyJSON(resp)}`);
                button.attr('disabled', false);
            });
    });

    $('#get-info').on('submit', function (e) {
        e.preventDefault();
        let button = $('button', this);
        button.attr('disabled', true);
        $.ajax({
            url: appURL + '/contracts/ecma/getInfo',
            method: 'GET',
            dataType: 'json',
        })
            .always(function (resp) {
                button.attr('disabled', false);
            });
    });

    let toBeautyfyJSON = function(data){
        try {
            data = JSON.stringify(data, undefined, 2);
        }catch (e) {

        }
        return data;
    };

    let doRequest = function () {

    }
})();