$(document).ready(function(){
    var sw=0
	$('#nav-icon1').click(function(){
        if(sw==0){
            sw=1;
		$(this).toggleClass('open');
        $('.gnb').stop().animate({
            right:0
        });
        }else{
            sw=0;
            $(this).removeClass('open');
            $('.gnb').stop().animate({
                right:'-100%'
            });
        }
	});
    $('.gnb nav >ul >li >a').click(function(){
        if($(this).attr('class') !='active'){
            $('.gnb nav > ul > li> a').removeClass('active');
            $(this).addClass('active');
            $('.gnb nav ul li ul').slideUp();
            $(this).next().slideDown();
        }else{
            $(this).removeClass('active');
            $(this).next().slideUp();
            
        }
    });
        // fullpage
        $('#fullpage').fullpage({
            navigation:true,
            navigationposition:'right',
            afterLoad:function(anchorLink,index){
                if(index==2){
                    addNum();
                }
                if(index==4){

                    $('.s4 .s4_bx  div  div ').addClass('active');
                }else{
                    $('.s4 .s4_bx div div').removeClass('active')
                }
            }
        })


    var swiper = new Swiper(".mySwiper", {
        autoplay:{
            delay:4500
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });

    // s2 영역의 숫자 증가 애니메이션 
    function addNum(){
        // prop()method :객체의 속성을 추가하거나, 객체의 속성을 알아내는 매서드, 0 : 초기값 
        // counter
        // each 객체 갯수만큼 반복 
        $('.addNumber span').each(function(){
            $(this).prop('Counter', 0).animate({
                Counter:960518109
            },{
                duration:3000,
                // now 값이 변하는 단계 ,실수로 증가함 
                step:function(now){
                    console.log(now);
                    // math ceil 실수를 정수로 변환 (홀림)
                    var num=numberfn(Math.ceil(now));
                    $(this).text(num);
    
                }
            });
        })
        
    }
    // numverfn함수 선언 
    function numberfn(x) {
        // toString ()매서드 : 전달받은 x값을 문자열로 변환
        // replace() 매서드: 문자열로 바꿔주는 매서드(치환)
        // \B : 문자가 존재하는 지 경계가 아닌 부분 찾기
        // \d{3} 문자열3글자 
        // (?!\d) :3글자 이상 초과안됨
        // g: 문자열 전체 검색 
        // ?=:기호 앞과 뒤의 조건을 합쳐줌 

        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    }
});