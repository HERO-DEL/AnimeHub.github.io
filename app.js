let menu = document.querySelector('#search-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}


var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

  var swiper = new Swiper(".anime-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });

  
  var swiper = new Swiper(".detective-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });

  var swiper = new Swiper(".movie-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });


  function openhome00() {
    document.getElementById("hide").style.height = "100%";
    document.getElementById('002').src = "https://www.youtube.com/embed/S8_YwFLCh4U?autoplay=1&mute=1";
    document.getElementById("switch1").href = "https://www1.9anime.id/watch/one-piece.ov8/ep-1";
    document.getElementById("switch2").href = "https://www1.9anime.id/watch/one-piece-dub.34r/ep-1/";
    document.getElementById("switch3").href = "https://myanimelist.net/anime/21/One_Piece/";
    document.getElementById('h2').innerHTML ="ABOUT ONE PIECE"
    document.getElementById('para').innerHTML = "One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since July 1997, with its individual chapters compiled into 101 tankōbon volumes as of December 2021. The story follows the adventures of Monkey D. Luffy, a boy whose body gained the properties of rubber after unintentionally eating a Devil Fruit. With his pirate crew, the Straw Hat Pirates, Luffy explores the Grand Line in search of the world's ultimate treasure known as the One Piece in order to become the next King of the Pirates. ";
    
  };


  function openhome01() {
    document.getElementById('002').src = "https://www.youtube.com/embed/bo2KQer1KNM?autoplay=1&mute=1";
    document.getElementById("switch1").href = "http://www.cnn.com/";
    document.getElementById("switch2").href = "http://www.cnn.com/";
    document.getElementById("switch3").href = "http://www.cnn.com/";
    document.getElementById('h2').innerHTML ="ABOUT DEATH NOTE"
    document.getElementById('para').innerHTML = "Death Note is a Japanese manga series written by Tsugumi Ohba and illustrated by Takeshi Obata. The story follows Light Yagami, a teen genius who discovers a mysterious notebook  the Death Note, which belonged to the Shinigami Ryuk, and grants the user the supernatural ability to kill anyone whose name is written in its pages. The series centers around Light's subsequent attempts to use the Death Note to carry out a worldwide massacre of individuals whom he deems immoral and to create a crime-free society, using the alias of a god-like vigilante named Kira, and the subsequent efforts of an elite Japanese police task force, led by enigmatic detective L, to apprehend him. Death Note ran in Shueisha's manga magazine Weekly Shōnen Jump from December 2003 to May 2006.Its 108 chapters were collected in 12 tankōbon volumes."
    document.getElementById("hide").style.height = "100%";
  };

  function openhome02() {
    document.getElementById('002').src = "https://www.youtube.com/embed/RLr11YTDh6o?autoplay=1&mute=1";
    document.getElementById("switch1").href = "https://www1.9anime.id/watch/dragon-ball-z.51ov/ep-1";
    document.getElementById("switch2").href = "https://www1.9anime.id/watch/dragon-ball-z-dub.r4q/ep-1";
    document.getElementById("switch3").href = "https://myanimelist.net/anime/813/Dragon_Ball_Z";
    document.getElementById('h2').innerHTML ="ABOUT DRAGON BALL Z"
    document.getElementById('para').innerHTML = "Five years after winning the World Martial Arts tournament, Gokuu is now living a peaceful life with his wife and son. This changes, however, with the arrival of a mysterious enemy named Raditz who presents himself as Gokuu's long-lost brother. He reveals that Gokuu is a warrior from the once powerful but now virtually extinct Saiyan race, whose homeworld was completely annihilated. When he was sent to Earth as a baby, Gokuu's sole purpose was to conquer and destroy the planet; but after suffering amnesia from a head injury, his violent and savage nature changed, and instead was raised as a kind and well-mannered boy, now fighting to protect others.";
    document.getElementById("hide").style.height = "100%";

  };



  function openhome03() {
    document.getElementById('002').src = "https://www.youtube.com/embed/VQGCKyvzIM4?autoplay=1&mute=1";
    document.getElementById("switch1").href = "https://www1.9anime.id/watch/demon-slayer-kimetsu-no-yaiba.6q67/ep-1";
    document.getElementById("switch2").href = "https://www1.9anime.id/watch/demon-slayer-kimetsu-no-yaiba-dub.0j79/ep-1";
    document.getElementById("switch3").href = "https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba";
    document.getElementById('h2').innerHTML ="ABOUT DEMON SLAYER"
    document.getElementById('para').innerHTML = "Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life. One day, Tanjirou decides to go down to the local village to make a little money selling charcoal. On his way back, night falls, forcing Tanjirou to take shelter in the house of a strange man, who warns him of the existence of flesh-eating demons that lurk in the woods at night."
    document.getElementById("hide").style.height = "100%";
  };

  function openhome04() {
    document.getElementById('002').src = "https://www.youtube.com/embed/-G9BqkgZXRA?autoplay=1&mute=1";
    document.getElementById("switch1").href = "https://www1.9anime.id/watch/naruto.xx8z/ep-1";
    document.getElementById("switch2").href = "https://www1.9anime.id/watch/naruto-dub.p86/ep-1";
    document.getElementById("switch3").href = "https://myanimelist.net/anime/20/Naruto";
    document.getElementById('h2').innerHTML ="ABOUT NARUTO"
    document.getElementById('para').innerHTML = "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto."
    document.getElementById("hide").style.height = "100%";
    console.log("HELLO WORLD");
  };

  function openpopular00() {
    document.getElementById('002').src = "https://www.youtube.com/embed/S8_YwFLCh4U?autoplay=1&mute=1";
    document.getElementById("switch1").href = "https://www1.9anime.id/watch/one-piece.ov8/ep-1";
    document.getElementById("switch2").href = "https://www1.9anime.id/watch/one-piece-dub.34r/ep-1/";
    document.getElementById("switch3").href = "https://myanimelist.net/anime/21/One_Piece/";
    document.getElementById('h2').innerHTML ="ABOUT ONE PIECE"
    document.getElementById('para').innerHTML = "One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since July 1997, with its individual chapters compiled into 101 tankōbon volumes as of December 2021. The story follows the adventures of Monkey D. Luffy, a boy whose body gained the properties of rubber after unintentionally eating a Devil Fruit. With his pirate crew, the Straw Hat Pirates, Luffy explores the Grand Line in search of the world's ultimate treasure known as the One Piece in order to become the next King of the Pirates. ";
    document.getElementById("hide").style.height = "100%";
    console.log("Hello world!");
  };

  function openpopular01() {
    document.getElementById('002').src = "https://www.youtube.com/embed/bo2KQer1KNM?autoplay=1&mute=1";
    document.getElementById("switch1").href = "http://www.cnn.com/";
    document.getElementById("switch2").href = "http://www.cnn.com/";
    document.getElementById("switch3").href = "http://www.cnn.com/";
    document.getElementById('h2').innerHTML ="ABOUT DEATH NOTE"
    document.getElementById('para').innerHTML = "Death Note is a Japanese manga series written by Tsugumi Ohba and illustrated by Takeshi Obata. The story follows Light Yagami, a teen genius who discovers a mysterious notebook  the Death Note, which belonged to the Shinigami Ryuk, and grants the user the supernatural ability to kill anyone whose name is written in its pages. The series centers around Light's subsequent attempts to use the Death Note to carry out a worldwide massacre of individuals whom he deems immoral and to create a crime-free society, using the alias of a god-like vigilante named Kira, and the subsequent efforts of an elite Japanese police task force, led by enigmatic detective L, to apprehend him. Death Note ran in Shueisha's manga magazine Weekly Shōnen Jump from December 2003 to May 2006.Its 108 chapters were collected in 12 tankōbon volumes."
    document.getElementById("hide").style.height = "100%";
    console.log("Hello world!");
  };

  function openpopular02() {
    document.getElementById('002').src = "https://www.youtube.com/embed/RLr11YTDh6o?autoplay=1&mute=1";
    document.getElementById("switch1").href = "https://www1.9anime.id/watch/dragon-ball-z.51ov/ep-1";
    document.getElementById("switch2").href = "https://www1.9anime.id/watch/dragon-ball-z-dub.r4q/ep-1";
    document.getElementById("switch3").href = "https://myanimelist.net/anime/813/Dragon_Ball_Z";
    document.getElementById('h2').innerHTML ="ABOUT DRAGON BALL Z"
    document.getElementById('para').innerHTML = "Five years after winning the World Martial Arts tournament, Gokuu is now living a peaceful life with his wife and son. This changes, however, with the arrival of a mysterious enemy named Raditz who presents himself as Gokuu's long-lost brother. He reveals that Gokuu is a warrior from the once powerful but now virtually extinct Saiyan race, whose homeworld was completely annihilated. When he was sent to Earth as a baby, Gokuu's sole purpose was to conquer and destroy the planet; but after suffering amnesia from a head injury, his violent and savage nature changed, and instead was raised as a kind and well-mannered boy, now fighting to protect others.";
    document.getElementById("hide").style.height = "100%";
    console.log("Hello world!");
  };

  function openpopular03() {
    document.getElementById('002').src = "https://www.youtube.com/embed/VQGCKyvzIM4?autoplay=1&mute=1";
    document.getElementById("switch1").href = "https://www1.9anime.id/watch/demon-slayer-kimetsu-no-yaiba.6q67/ep-1";
    document.getElementById("switch2").href = "https://www1.9anime.id/watch/demon-slayer-kimetsu-no-yaiba-dub.0j79/ep-1";
    document.getElementById("switch3").href = "https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba";
    document.getElementById('h2').innerHTML ="ABOUT DEMON SLAYER"
    document.getElementById('para').innerHTML = "Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life. One day, Tanjirou decides to go down to the local village to make a little money selling charcoal. On his way back, night falls, forcing Tanjirou to take shelter in the house of a strange man, who warns him of the existence of flesh-eating demons that lurk in the woods at night."
    document.getElementById("hide").style.height = "100%";
    console.log("Hello world!");
  };

  function openpopular04() {
    document.getElementById('002').src = "https://www.youtube.com/embed/-G9BqkgZXRA?autoplay=1&mute=1";
    document.getElementById("switch1").href = "https://www1.9anime.id/watch/naruto.xx8z/ep-1";
    document.getElementById("switch2").href = "https://www1.9anime.id/watch/naruto-dub.p86/ep-1";
    document.getElementById("switch3").href = "https://myanimelist.net/anime/20/Naruto";
    document.getElementById('h2').innerHTML ="ABOUT NARUTO"
    document.getElementById('para').innerHTML = "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto."
    document.getElementById("hide").style.height = "100%";
    console.log("Hello world!");
  
  };

  function opendetective00() {
    document.getElementById('002').src = "https://www.youtube.com/embed/bo2KQer1KNM?autoplay=1&mute=1";
    document.getElementById("switch1").href = "http://www.cnn.com/";
    document.getElementById("switch2").href = "http://www.cnn.com/";
    document.getElementById("switch3").href = "http://www.cnn.com/";
    document.getElementById('h2').innerHTML ="ABOUT DEATH NOTE"
    document.getElementById('para').innerHTML = "Death Note is a Japanese manga series written by Tsugumi Ohba and illustrated by Takeshi Obata. The story follows Light Yagami, a teen genius who discovers a mysterious notebook  the Death Note, which belonged to the Shinigami Ryuk, and grants the user the supernatural ability to kill anyone whose name is written in its pages. The series centers around Light's subsequent attempts to use the Death Note to carry out a worldwide massacre of individuals whom he deems immoral and to create a crime-free society, using the alias of a god-like vigilante named Kira, and the subsequent efforts of an elite Japanese police task force, led by enigmatic detective L, to apprehend him. Death Note ran in Shueisha's manga magazine Weekly Shōnen Jump from December 2003 to May 2006.Its 108 chapters were collected in 12 tankōbon volumes."
    document.getElementById("hide").style.height = "100%";
    console.log("Hello world!");
  };

  function opendetective01() {
    document.getElementById('002').src = "https://www.youtube.com/embed/bo2KQer1KNM?autoplay=1&mute=1";
    document.getElementById("switch1").href = "http://www.cnn.com/";
    document.getElementById("switch2").href = "http://www.cnn.com/";
    document.getElementById("switch3").href = "http://www.cnn.com/";
    document.getElementById('h2').innerHTML ="ABOUT DEATH NOTE"
    document.getElementById('para').innerHTML = "Death Note is a Japanese manga series written by Tsugumi Ohba and illustrated by Takeshi Obata. The story follows Light Yagami, a teen genius who discovers a mysterious notebook  the Death Note, which belonged to the Shinigami Ryuk, and grants the user the supernatural ability to kill anyone whose name is written in its pages. The series centers around Light's subsequent attempts to use the Death Note to carry out a worldwide massacre of individuals whom he deems immoral and to create a crime-free society, using the alias of a god-like vigilante named Kira, and the subsequent efforts of an elite Japanese police task force, led by enigmatic detective L, to apprehend him. Death Note ran in Shueisha's manga magazine Weekly Shōnen Jump from December 2003 to May 2006.Its 108 chapters were collected in 12 tankōbon volumes."
    document.getElementById("hide").style.height = "100%";
    console.log("Hello world!");
  };

  function opendetective02() {
    document.getElementById('002').src = "https://www.youtube.com/embed/RLr11YTDh6o?autoplay=1&mute=1";
    document.getElementById("switch1").href = "https://www1.9anime.id/watch/dragon-ball-z.51ov/ep-1";
    document.getElementById("switch2").href = "https://www1.9anime.id/watch/dragon-ball-z-dub.r4q/ep-1";
    document.getElementById("switch3").href = "https://myanimelist.net/anime/813/Dragon_Ball_Z";
    document.getElementById('h2').innerHTML ="ABOUT DRAGON BALL Z"
    document.getElementById('para').innerHTML = "Five years after winning the World Martial Arts tournament, Gokuu is now living a peaceful life with his wife and son. This changes, however, with the arrival of a mysterious enemy named Raditz who presents himself as Gokuu's long-lost brother. He reveals that Gokuu is a warrior from the once powerful but now virtually extinct Saiyan race, whose homeworld was completely annihilated. When he was sent to Earth as a baby, Gokuu's sole purpose was to conquer and destroy the planet; but after suffering amnesia from a head injury, his violent and savage nature changed, and instead was raised as a kind and well-mannered boy, now fighting to protect others.";
    document.getElementById("hide").style.height = "100%";
    console.log("Hello world!");
  };

  function opendetective03() {
    document.getElementById('002').src = "https://www.youtube.com/embed/VQGCKyvzIM4?autoplay=1&mute=1";
    document.getElementById("switch1").href = "https://www1.9anime.id/watch/demon-slayer-kimetsu-no-yaiba.6q67/ep-1";
    document.getElementById("switch2").href = "https://www1.9anime.id/watch/demon-slayer-kimetsu-no-yaiba-dub.0j79/ep-1";
    document.getElementById("switch3").href = "https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba";
    document.getElementById('h2').innerHTML ="ABOUT DEMON SLAYER"
    document.getElementById('para').innerHTML = "Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life. One day, Tanjirou decides to go down to the local village to make a little money selling charcoal. On his way back, night falls, forcing Tanjirou to take shelter in the house of a strange man, who warns him of the existence of flesh-eating demons that lurk in the woods at night."
    document.getElementById("hide").style.height = "100%";
    console.log("Hello world!");
  };

  function opendetective04() {
    document.getElementById('002').src = "https://www.youtube.com/embed/-G9BqkgZXRA?autoplay=1&mute=1";
    document.getElementById("switch1").href = "https://www1.9anime.id/watch/naruto.xx8z/ep-1";
    document.getElementById("switch2").href = "https://www1.9anime.id/watch/naruto-dub.p86/ep-1";
    document.getElementById("switch3").href = "https://myanimelist.net/anime/20/Naruto";
    document.getElementById('h2').innerHTML ="ABOUT NARUTO"
    document.getElementById('para').innerHTML = "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto."
    document.getElementById("hide").style.height = "100%";
    console.log("Hello world!");
  
  };

  function openmovie00() {
    document.getElementById('002').src = "https://www.youtube.com/embed/bo2KQer1KNM?autoplay=1&mute=1";
    document.getElementById("switch1").href = "http://www.cnn.com/";
    document.getElementById("switch2").href = "http://www.cnn.com/";
    document.getElementById("switch3").href = "http://www.cnn.com/";
    document.getElementById('h2').innerHTML ="ABOUT DEATH NOTE"
    document.getElementById('para').innerHTML = "Death Note is a Japanese manga series written by Tsugumi Ohba and illustrated by Takeshi Obata. The story follows Light Yagami, a teen genius who discovers a mysterious notebook  the Death Note, which belonged to the Shinigami Ryuk, and grants the user the supernatural ability to kill anyone whose name is written in its pages. The series centers around Light's subsequent attempts to use the Death Note to carry out a worldwide massacre of individuals whom he deems immoral and to create a crime-free society, using the alias of a god-like vigilante named Kira, and the subsequent efforts of an elite Japanese police task force, led by enigmatic detective L, to apprehend him. Death Note ran in Shueisha's manga magazine Weekly Shōnen Jump from December 2003 to May 2006.Its 108 chapters were collected in 12 tankōbon volumes."
    document.getElementById("hide").style.height = "100%";
    console.log("Hello world!");
  };

  function openmovie01() {
    document.getElementById('002').src = "https://www.youtube.com/embed/bo2KQer1KNM?autoplay=1&mute=1";
    document.getElementById("switch1").href = "http://www.cnn.com/";
    document.getElementById("switch2").href = "http://www.cnn.com/";
    document.getElementById("switch3").href = "http://www.cnn.com/";
    document.getElementById('h2').innerHTML ="ABOUT DEATH NOTE"
    document.getElementById('para').innerHTML = "Death Note is a Japanese manga series written by Tsugumi Ohba and illustrated by Takeshi Obata. The story follows Light Yagami, a teen genius who discovers a mysterious notebook  the Death Note, which belonged to the Shinigami Ryuk, and grants the user the supernatural ability to kill anyone whose name is written in its pages. The series centers around Light's subsequent attempts to use the Death Note to carry out a worldwide massacre of individuals whom he deems immoral and to create a crime-free society, using the alias of a god-like vigilante named Kira, and the subsequent efforts of an elite Japanese police task force, led by enigmatic detective L, to apprehend him. Death Note ran in Shueisha's manga magazine Weekly Shōnen Jump from December 2003 to May 2006.Its 108 chapters were collected in 12 tankōbon volumes."
    document.getElementById("hide").style.height = "100%";
    console.log("Hello world!");
  };

  function openmovie02() {
    document.getElementById('002').src = "https://www.youtube.com/embed/RLr11YTDh6o?autoplay=1&mute=1";
    document.getElementById("switch1").href = "https://www1.9anime.id/watch/dragon-ball-z.51ov/ep-1";
    document.getElementById("switch2").href = "https://www1.9anime.id/watch/dragon-ball-z-dub.r4q/ep-1";
    document.getElementById("switch3").href = "https://myanimelist.net/anime/813/Dragon_Ball_Z";
    document.getElementById('h2').innerHTML ="ABOUT DRAGON BALL Z"
    document.getElementById('para').innerHTML = "Five years after winning the World Martial Arts tournament, Gokuu is now living a peaceful life with his wife and son. This changes, however, with the arrival of a mysterious enemy named Raditz who presents himself as Gokuu's long-lost brother. He reveals that Gokuu is a warrior from the once powerful but now virtually extinct Saiyan race, whose homeworld was completely annihilated. When he was sent to Earth as a baby, Gokuu's sole purpose was to conquer and destroy the planet; but after suffering amnesia from a head injury, his violent and savage nature changed, and instead was raised as a kind and well-mannered boy, now fighting to protect others.";
    document.getElementById("hide").style.height = "100%";
    console.log("Hello world!");
  };

  function openmovie03() {
    document.getElementById('002').src = "https://www.youtube.com/embed/VQGCKyvzIM4?autoplay=1&mute=1";
    document.getElementById("switch1").href = "https://www1.9anime.id/watch/demon-slayer-kimetsu-no-yaiba.6q67/ep-1";
    document.getElementById("switch2").href = "https://www1.9anime.id/watch/demon-slayer-kimetsu-no-yaiba-dub.0j79/ep-1";
    document.getElementById("switch3").href = "https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba";
    document.getElementById('h2').innerHTML ="ABOUT DEMON SLAYER"
    document.getElementById('para').innerHTML = "Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life. One day, Tanjirou decides to go down to the local village to make a little money selling charcoal. On his way back, night falls, forcing Tanjirou to take shelter in the house of a strange man, who warns him of the existence of flesh-eating demons that lurk in the woods at night."
    document.getElementById("hide").style.height = "100%";
    console.log("Hello world!");
  };

  function openmovie04() {
    document.getElementById('002').src = "https://www.youtube.com/embed/-G9BqkgZXRA?autoplay=1&mute=1";
    document.getElementById("switch1").href = "https://www1.9anime.id/watch/naruto.xx8z/ep-1";
    document.getElementById("switch2").href = "https://www1.9anime.id/watch/naruto-dub.p86/ep-1";
    document.getElementById("switch3").href = "https://myanimelist.net/anime/20/Naruto";
    document.getElementById('h2').innerHTML ="ABOUT NARUTO"
    document.getElementById('para').innerHTML = "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto."
    document.getElementById("hide").style.height = "100%";
    console.log("Hello world!");
  
  };




document.getElementById("home00").addEventListener("click", openhome00);

document.getElementById("home01").addEventListener("click", openhome01); 

document.getElementById("home02").addEventListener("click", openhome02);

document.getElementById("home03").addEventListener("click", openhome03);

document.getElementById("home04").addEventListener("click", openhome04);

document.getElementById("popular00").addEventListener("click", openpopular00);

document.getElementById("popular01").addEventListener("click", openpopular01);

document.getElementById("popular02").addEventListener("click", openpopular02);

document.getElementById("popular03").addEventListener("click", openpopular03);

document.getElementById("popular04").addEventListener("click", openpopular04);

document.getElementById("detective00").addEventListener("click", opendetective00);

document.getElementById("detective01").addEventListener("click", opendetective01);

document.getElementById("detective02").addEventListener("click", opendetective02);

document.getElementById("detective03").addEventListener("click", opendetective03);

document.getElementById("detective04").addEventListener("click", opendetective04);

document.getElementById("movie00").addEventListener("click", openmovie00);

document.getElementById("movie01").addEventListener("click", openmovie01);

document.getElementById("movie02").addEventListener("click", openmovie02);

document.getElementById("movie03").addEventListener("click", openmovie03);

document.getElementById("movie04").addEventListener("click", openmovie04);






function closeNav() {
  document.getElementById("hide").style.height = "0%";
  document.getElementById('002').src = " ";
}

