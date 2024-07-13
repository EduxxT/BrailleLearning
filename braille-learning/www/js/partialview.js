document.addEventListener('deviceready', onDeviceReady, false);

function loadPartialView(viewName, divClass = null, isAppend = false){
    $.ajax({
        url: 'Views/' + viewName + '.html',
        method: 'GET',
        success: function(data){
            divClass === null ? console.error('Elemento contenedor (divClass) no definido') : (isAppend ? $(divClass).append(data) : $(divClass).html(data));
        },
        error: function(xhr, status, error) {
            console.error('Error al cargar la vista parcial:', error);
        }
    })
}

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
}