# Git을 배워보자
## 1. Git 설치하기
1. [Git-scm.com](https://git-scm.com)으로 이동한다.
2. git-scm.com 사이트의 오른쪽 중앙의 모니터 안에 있는 다운로드 버튼을 클릭
3. 다운로드 된 파일을 실행하여 다음만 계속 눌러 설치함
4. 한 번만 작업할 내용
- 터미널 창을 열고 

```bash
git config --global user.name 'eeong'
git config --global user.email 'discography8@gmail.com'
```

- 저장할 폴더에 마우스 오른쪽 버튼을 클릭하고 `git bash here`를 선택하여 bash 창을 띄운다.

- [github.com/eeong](https://github.com/eeong)에 접속하여 처음 가져올 Repository를 선택하고 `code` 버튼을 클릭하고 카피 버튼을 클릭해서 복사

```bash
git clone [Shift + ins]
```
<br> <br>

# Visual Studio 설치 및 단축키

## 설치

- 구글에서 visual studio code 검색 후 다운로드
- 다운로드가 완료되면 설치를 시작하고 체크박스는 거의 체크 하여 설치 완료
- **확장기능관리자** (좌측 하단의 테트리스) 관리자를 클릭하고 검색창에 Korean을 검색하여 한국어 UI모드 설치.
- **Live Server**를 설치
- **material** 테마 아이콘 

## 단축키
- `ctrl + ,` : 설정창
- `ctrl + j` : 터미널
- `ctrl + b` : 좌측 날개 토글
- `alt` 를 누른 상태로 마우스 클릭하여 다중커서 기능 사용 `esc`로 해제
- `alt + ` 화살표로 라인을 이동
- `alt + shift +`화살표로 라인을 복사
- `ctrl + /` 한줄 주석
- `alt + shift +a `여러줄 주석
<br><br>

## 변수, 함수, 배열, 객체 

#  변수 (variable)
- var a = '?';
- primitive type  숫자 (Number) , 문자(String), 불린(Boolean), null, undefined
- reference type  배열(Array) , 객체(Object) 

```javascript
var a;
console.log(a);

var a = 1;
console.log(a);
var a = '1';
console.log(a);
var a = true;
console.log(a);
var a = null;
console.log(a);

```

- false == 0 , "" , null, undefined

# 함수 (function)

- 함수 선언문 : Hoisting 
```javascript
function b() {
console.log("B")
}
b();
```
- 함수 표현식

```javascript 
var c = function(){
	console.log("C")
	
}
c(); 
```

# 함수의 인자(Arguments)
```javascript
function d(x,y){
	return x*y;
}
console.log(d(10,5));
```

```javascript
console.log(jQuery());
//jQuery 를 인자로 받는 함수

$("#bt2").click(function(){
	console.log("hi");
});
//도큐먼트 안의 jquery함수가 아이디를 통해 객체를 부르고 해당 객체가 가지고 있는 클릭 이라는 함수(이벤트리스너)가 콜백함수를 인자로 받아 콘솔에 로그를 출력하는 함수를 실행합니다.

var jQuery = function(str){
	this = new Array();
	this[0] = document.querySelection(str);
	this.prototype.click = function(fn){
		fn();
	}
	return this;
}
```

- 콜백 callback 함수
```javascript
function sum(x, y, cb) {
	var hap = x+y;
	cb(hap);
}
sum(10,20,function(r){alert("10 더하기 20은" + r +"입니다." );
});

```

```javascript
$("#bt10").click(function(){
	var tar = $(".container").width() -300;
$("#img3").stop().animate({ "left" : tar + "px" }, 500, function(){
$(this).animate({"left" : 0},500);
});

$("#bt11").click(function(){
$("#img3").stop().animate({ "left" : 0}, 500) , function(){
$(this).animate({"left" : 0},500);
});
// animate({}. 1000, "swing/linear", function(){}) 
// 애니메이트 함수의 마지막 인자로 콜백함수를 사용하여 애니메이션이 끝난 후 다시 애니메이션 동작을 하도록 합니다.

```

