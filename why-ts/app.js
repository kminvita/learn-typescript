// api url
var url = 'https://jsonplaceholder.typicode.com/users/';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

function startApp() {
  axios
    .get(url)
    .then(function (response) {
      // console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user);
      username.innerText = user[0].name;
      email.innerText = user[0].email;
      address.innerText = user[0].address.street; 
      // 여기서 address라고 안하고 addres 와 같이 오탈자로 표기할 경우 코드상에서 오류는 발생하진 않지만,
      // live server로 확인했을때 undefined로 나타나는걸 확인할 수 있다.
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
