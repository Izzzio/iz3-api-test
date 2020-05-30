(function () {

    const protocol = 'http://';
    const domain = 'localhost';
    const port = ':3015';
    const appURL = protocol + domain + port;

    $('#deploy-contract').on('submit', function (e) {
        e.preventDefault();
        let button = $('button', this);
        let result = $('#result', this);
        let data = {
            source: ($('#code', this).val() || false),
            resourceRent: ($('#resources', this).val() || false)
        };
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

    $('#deploy-method').on('submit', function (e) {
        e.preventDefault();
        let button = $('button', this);
        let result = $('#result', this);
        let contractAddress = $('#address', this).val() || false;
        let contractMethod = $('#method', this).val() || false;
        let methodParams = $('#params', this).val() || [];

        button.attr('disabled', true);
        result.html('');
        $.ajax({
            url: appURL + '/contracts/ecma/deployMethod/' + contractAddress + '/' + contractMethod,
            method: 'POST',
            data: {'argsEncoded': JSON.stringify(methodParams)},
        })
            .always(function (resp) {
                result.html(`${toBeautyfyJSON(resp)}`);
                button.attr('disabled', false);
            });
    });

    $('#call-method').on('submit', function (e) {
        e.preventDefault();
        let button = $('button', this);
        let result = $('#result', this);
        let contractAddress = $('#address', this).val() || false;
        let contractMethod = $('#method', this).val() || false;
        let methodParams = $('#params', this).val() || [];

        button.attr('disabled', true);
        result.html('');
        $.ajax({
            url: appURL + '/contracts/ecma/callMethod/' + contractAddress + '/' + contractMethod,
            method: 'POST',
            data: {'argsEncoded': JSON.stringify(methodParams)},
        })
            .always(function (resp) {
                result.html(`${toBeautyfyJSON(resp)}`);
                button.attr('disabled', false);
            });
    });

    $('#get-info').on('submit', function (e) {
        e.preventDefault();
        let button = $('button', this);
        let result = $('#result', this);

        button.attr('disabled', true);
        result.html('');
        $.ajax({
            url: appURL + '/getInfo',
            method: 'GET',
            dataType: 'json',
        })
            .always(function (resp) {
                result.html(`${toBeautyfyJSON(resp)}`);
                button.attr('disabled', false);
            });
    });

    $('#get-block').on('submit', function (e) {
        e.preventDefault();
        let button = $('button', this);
        let result = $('#result', this);

        button.attr('disabled', true);
        result.html('');
        $.ajax({
            url: appURL + '/getBlock/' + ($('#block', this).val() || false),
            method: 'GET',
            dataType: 'json',
        })
            .always(function (resp) {
                result.html(`${toBeautyfyJSON(resp)}`);
                button.attr('disabled', false);
            });
    });

    $('#keypoa-create-key').on('submit', function (e) {
        e.preventDefault();
        let button = $('button', this);
        let result = $('#result', this);
        let data = {
            key: ($('#key', this).val() || false),
            type: ($('#type', this).val() || false)
        };
        button.attr('disabled', true);
        result.html('');
        $.ajax({
            url: appURL + '/keypoa/issueKey',
            method: 'POST',
            data: data,
        })
            .always(function (resp) {
                result.html(`${toBeautyfyJSON(resp)}`);
                button.attr('disabled', false);
            });
    });

    $('#keypoa-check-key-get').on('submit', function (e) {
        e.preventDefault();
        let button = $('button', this);
        let result = $('#result', this);
        button.attr('disabled', true);
        result.html('');
        $.ajax({
            url: appURL + '/keypoa/isKeyFromKeyStorage/' + (($('#key', this).val() || false)),
            method: 'GET'
        })
            .always(function (resp) {
                result.html(`${toBeautyfyJSON(resp)}`);
                button.attr('disabled', false);
            });
    });

    $('#keypoa-check-key-post').on('submit', function (e) {
        e.preventDefault();
        let button = $('button', this);
        let result = $('#result', this);
        let data = {
            key: ($('#key', this).val() || false)
        };
        button.attr('disabled', true);
        result.html('');
        $.ajax({
            url: appURL + '/keypoa/isKeyFromKeyStorage/',
            method: 'POST',
            data: data,
        })
            .always(function (resp) {
                result.html(`${toBeautyfyJSON(resp)}`);
                button.attr('disabled', false);
            });
    });

    $('#keypoa-del-key').on('submit', function (e) {
        e.preventDefault();
        let button = $('button', this);
        let result = $('#result', this);
        let data = {
            key: ($('#key', this).val() || false)
        };
        button.attr('disabled', true);
        result.html('');
        $.ajax({
            url: appURL + '/keypoa/deleteKey',
            method: 'POST',
            data: data,
        })
            .always(function (resp) {
                result.html(`${toBeautyfyJSON(resp)}`);
                button.attr('disabled', false);
            });
    });

    let toBeautyfyJSON = function (data) {
        try {
            data = JSON.stringify(data, undefined, 2);
        } catch (e) {
        }
        return data;
    };
})();