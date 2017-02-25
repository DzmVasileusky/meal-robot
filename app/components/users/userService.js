angular.module('MealRobot').factory('User', ['Restangular', 'FileUploader', '$q', function(Restangular, FileUploader, $q) {
  var uploader = new FileUploader({
        url: '/users',
        alias: 'userphoto',
        method: 'POST'
      });

  function getAll() {
    return Restangular.all('users').getList();
  };

  function getOne(id) {
    return Restangular.one('users', id).get();
  };

  function save(user, photo) {
    if (photo) {
      var deffered = $q.defer();

      if (user.id) {
        uploader.url = '/users/' + user.id;
        uploader.method = 'PUT';
      }

      uploader.clearQueue();
      uploader.addToQueue(photo);

      uploader.onSuccessItem = function(item, data) {
        deffered.resolve(data);
      };
      uploader.onErrorItem = function(item, data) {
        deffered.reject(data);
      };
      uploader.onBeforeUploadItem = function(item) {
        item.formData.push({ "id": user.id, "username": user.username, "email": user.email, "name": user.name, "surname": user.surname, "bio": user.bio, "photo": user.photo, "password": user.password });
      };
      uploader.uploadAll();

      return deffered.promise;
    } else {
      return user.id ? user.save() : Restangular.all('users').post(user);
    }
  };

  return {
    all: getAll,
    one: getOne,
    save: save,
  }
}]);