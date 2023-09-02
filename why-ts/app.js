// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */
/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url);
}
// fetchUser();
// 이렇게 fetchUser()함수를 호출했을때 VS코드 편집기 상에서는 어떻게 호출되는지 알 수 없다.
// console.log(fetchUser())로 돌려볼때만 확인할 수 있다.
// console.log(fetchUser());

fetchUser().then(function (response) {
  response.address.city
  // 위에서 typedef과 property에 어떤 값들을 받을지를 정의해두었기때문에
  // response. 뒤에 자동으로 name, email, address가 뜨는것을 확인할 수 있다.

  // 타입스크립트로 작성할 경우 vs코드 편집기 상에서 에러들을 먼저 확인할 수 있다는 장점이 있다.
})

function startApp() {
  // axios
  //   .get(url)
  fetchUser()
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
