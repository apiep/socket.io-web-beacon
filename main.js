(function ($) {
    'use strict';
    
    // Please change with the socket.io server
    var socketServer = 'http://localhost';
    var socketEvent = {
        'guest:counter': 'EVENT DARI SERVER',
        'guest:list': 'EVENT DARI SERVER'
    };
    
    var $guestCounter = document.getElementById('guestCounter');
    var $userListUL = document.getElementById('userList');
//    var socket = io(socketServer);
    
    // Socket.IO server must sent
    // { counter: 0 }
    // -- 0 is how many guest has login
//    socket.on(socketEvent['guest:counter'], updateCounter);
    // { userList: [user_name1, user_name2] }
    // -- array of string of user name
//    socket.on(socketEvent['guest:list'], updateUserList);
    
    function updateCounter (data) {
        try {
            var counter = data.counter
            $guestCounter.innerHTML = counter + ' peoples are joined'
        } catch (e) {}
    }
    function updateUserList (data) {
        try {
            var userListLI = data.userList
                .map(function (user) {
                    var li = document.createElement('li')
                    li.innerHTML = user + ' already joined'
                    return li
                })
            $userListUL.innerHTML = ''
            userListLI
                .reverse()
                .forEach(function (li) {
                    $userListUL.appendChild(li);
                })
        } catch (e) {}
    }

    
    // For debugging only
    var counter = 0;
    var userList = [];
    window.setInterval(function () {
        userList.push('Nama user ke ' + counter);
        updateCounter({counter: counter++});
        updateUserList({userList: userList});
    }, 1000);
})(jQuery);






