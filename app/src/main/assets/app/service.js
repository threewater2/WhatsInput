/**
 * User: willerce
 * Date: 10/31/12
 * Time: 6:37 PM
 */

"use strict";

whatsInput.factory('EditorService', function ($rootScope, $log, $window) {
  //set hostname
  let ws_hostname = $window.location.hostname;
  let debug = false;
  //if url contains 'debug', set the hostname is debug hostname
  if ($window.location.href.indexOf("debug") > 0) {
    $log.info("debug hostname : " + $window.location.href);
    ws_hostname = "192.168.40.159";
    debug = true;
  }


  let ws = new WebSocket("ws://" + ws_hostname + ":6677");

  let send = function (data) {
    if(debug)
      $log.log("Send Message : " + data);
    ws.send(data);
  };

  return {
    onopen:function (fn) {
      ws.onopen = function (data) {
        $rootScope.$apply(function () {
          fn(data);
        });
      };
    },
    onclose:function (fn) {
      ws.onclose = function (data) {
        $rootScope.$apply(function () {
          fn(data);
        });
      };
    },
    onmessage:function (fn) {
      ws.onmessage = function (data) {
        $rootScope.$apply(function () {
          fn(data);
        });
      };
    },

    //keypress android keyboard
    keypress:function (android_code) {
      let obj = {
        type:"InputKey",
        code:android_code
      };
      $log.log(JSON.stringify(obj));
      send(JSON.stringify(obj));
    },

    edit:function (text) {
      let obj = {
        type:"InputEdit",
        text:text
      };
      send(JSON.stringify(obj));
    }
  };
});