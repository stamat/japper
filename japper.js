$(document).ready(function(){
    var manifest  = null;
    var models = {};
    var endpoints = {};
    var endpoint_map = {};
    //TODO: var responses = [];

    function parseSchema(name, schema) {
        var name = name.replace('.json', '');

        if (name === 'manifest') {
            manifest = schema;
            return;
        }

        if (schema.hasOwnProperty('endpoint')) {
            var res = /\.(post|put|delete|get)/g.exec(name);

            if (res && !schema.hasOwnProperty('http_method')) {
                schema.http_method = res[1].toUpperCase();
            }

            var root = /([a-z0-9\-_]+)/i.exec(schema.endpoint);
            root = root[0];

            if (!endpoints.hasOwnProperty(root)) {
                endpoints[root] = {};
            }

            var uid_name = schema.http_method.toUpperCase()+' '+schema.endpoint;
            endpoints[root][uid_name] = schema;
            endpoint_map[uid_name] = schema;
        } else {
            
        }
    }

    for (var k in SCHEMA) {
        parseSchema(k, SCHEMA[k]);
        delete SCHEMA[k];
    }
    var converter = new showdown.Converter();
    $('main').append(converter.makeHtml(README));


    var $aside = $('aside');
    $aside.append('<h2>ENDPOINTS</h2>');

    for (var k in endpoints) {
        $aside.append('<h3>'+k+'</h3>');
        var $list = $('<ul />');
        for (var l in endpoints[k]) {
            $list.append('<li>'+l+'</li>')
        }
        $aside.append($list);
    }

    $aside.append('<h2>MODELS</h2>');
    var $list = $('<ul />');
    for (var k in models) {
        $list.append('<li>'+k+'</li>')
    }
    $aside.append($list);
});
