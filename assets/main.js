
    const { createApp, ref, onMounted } = Vue;
  
    createApp({
      setup() {
        const changeImage = (funkoImage, funkoName, funkoDescription) => {
        Funko.value.image = funkoImage;
        Funko.value.name = funkoName;
        Funko.value.description = funkoDescription;
      };

        const funkos = [
          { id: 1, name: 'Aki', image: 'assets/img/aki.png', description: 'Aki de Chainsaw Man, com seu visual icônico e expressão de determinação.' },
          { id: 2, name: 'Denji', image: 'assets/img/denji.png', description: 'Denji de Chainsaw Man, com a motosserra e seu estilo irreverente.' },
          { id: 3, name: 'Dexter', image: 'assets/img/dexter.png', description: 'Dexter, o cientista mirim de "Dexter\'s Laboratory", com seu traje clássico de laboratório.' },
          { id: 4, name: 'Freddie', image: 'assets/img/freedie mercury.png', description: 'Freddie Mercury, o lendário cantor do Queen, com sua pose característica.' },
          { id: 5, name: 'Ichigo', image: 'assets/img/ichigo.png', description: 'Ichigo Kurosaki de Bleach, com sua espada e expressão decidida.' },
          { id: 6, name: 'Ironman', image: 'assets/img/ironmark.png', description: 'Iron Man (Homem de Ferro), o herói da Marvel com sua armadura vermelha brilhante.' },
          { id: 7, name: 'Louis', image: 'assets/img/louis.png', description: 'Louis de "Entourage", sempre com sua atitude descontraída e estilo único.' },
          { id: 8, name: 'Spiderman', image: 'assets/img/spiderman.png', description: 'Spider-Man (Homem-Aranha), o herói da Marvel com sua famosa máscara e traje vermelho e azul.' },
          { id: 9, name: 'Thanos', image: 'assets/img/thanos.png', description: 'Thanos, o vilão intergaláctico de Marvel, com a Manopla do Infinito.' },
          { id: 10, name: 'Michael', image: 'assets/img/michael.png', description: 'Michael Jackson, o Rei do Pop, capturado em uma pose clássica com seu famoso casaco.' },
        ];
  
        const Funko = ref(funkos[0]);
  
        onMounted(() => {
          $('.carousel').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
            dots: true,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2,
                }
              }
            ]
          });
        });
  
        return {
          funkos,
          Funko,
          changeImage,
        };
      }
    }).mount('#app');
  