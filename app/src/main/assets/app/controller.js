/**
 * Created with IntelliJ IDEA.
 * User: willerce
 * Date: 10/31/12
 * Time: 6:37 PM
 */

"use strict";

function EditorCtrl($scope, $log, EditorService) {

  $scope.EditorService = EditorService;
  $scope.Status = "Not Connect Phone";

  $scope.editor = {
    disabled: true,
    text: ''
  };

  EditorService.onopen(function (msg) {
    $log.info("Socket has been opened!");
  });

  EditorService.onclose(function (msg) {
    $log.warn("Socket has been closed!");
    $scope.Status = "Not Connect Phone";
  });

  EditorService.onmessage(function (msg) {
    //$log.log("Get Message : " + msg.data);
    var message = JSON.parse(msg.data);
    //#TODO 这里的inputchange事件好像没有传递
    if (message.type === "InputStart" || message.type === "InputChange") {
      $scope.editor.disabled = false;
      $scope.editor.text = message.text;
      $scope.Status = "";
    } else if (message.type === "InputFinish") {
      $scope.editor.disabled = true;
      $scope.Status = "Device not focus input";
    }
  });

  $scope.change = function () {
    EditorService.edit($scope.editor.text);
  };

  $scope.keypressCallback = function ($event) {

    angular.forEach(keys, function (item, i) {
      if (item.pc_code === $event.keyCode) {
        EditorService.keypress(item.android_code);
      }
    });
    $event.preventDefault();
  };
}

let KeyboardCtrl = function ($scope, $log, EditorService) {

  $scope.keys = keys;

  $scope.key_click = function (android_code) {
    EditorService.keypress(android_code)
  };
};