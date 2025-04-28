const { createApp, ref, onMounted } = Vue;

createApp({
  setup() {
    const cart = ref(0);
    const cartItems = ref([]);
    const showCart = ref(false);

    const increaseQuantity = () => {
      if (cart.value < Funko.value.inStock) {
        cart.value += 1;
      } else {
        alert("Produto fora de estoque!");
      }
    };

    const decreaseQuantity = () => {
      if (cart.value > 0) {
        cart.value -= 1;
      }
    };

    const buyProduct = () => {
      if (cart.value > 0) {
        // Atualizar o estoque
        Funko.value.inStock -= cart.value;

        // Verificar se o item já está no carrinho
        const existingItem = cartItems.value.find(item => item.id === Funko.value.id);
        if (existingItem) {
          existingItem.quantity += cart.value;
        } else {
          cartItems.value.push({
            id: Funko.value.id,
            name: Funko.value.name,
            price: Funko.value.price,
            quantity: cart.value,
            image: Funko.value.image,
          });
        }

        alert(`Você adicionou ${cart.value} unidade(s) de ${Funko.value.name} ao carrinho!`);
        cart.value = 0;
      } else {
        alert("Seu carrinho está vazio!");
      }
    };

    const toggleCart = () => {
      showCart.value = !showCart.value; // Alterna entre abrir e fechar o carrinho
    };

    const totalPrice = (price, quantity) => {
      return (parseFloat(price.replace(",", ".")) * quantity).toFixed(2).replace(".", ",");
    };

    const changeImage = (selectedFunko) => {
      Funko.value = selectedFunko;
    };


    const funkos = [
      {
        id: 1,
        name: "Aki",
        image: "assets/img/aki.png",
        price: (49.99).toFixed(2).replace(".", ","),
        installment: (49.99 / 5).toFixed(2).replace(".", ","),
        description:
          "Aki de Chainsaw Man, com seu visual icônico e expressão de determinação. Ele é um personagem forte, de personalidade séria, mas com um coração bondoso. Seu estilo combina com sua natureza corajosa e obstinada.",
        inStock: 5,
      },
      {
        id: 2,
        name: "Denji",
        image: "assets/img/denji.png",
        price: (229.99).toFixed(2).replace(".", ","),
        installment: (229.99 / 5).toFixed(2).replace(".", ","),
        description:
          "Denji de Chainsaw Man, com a motosserra e seu estilo irreverente. Denji é um jovem sonhador, tentando levar uma vida melhor, enquanto combate demônios com seu poder transformador. Um Funko que captura sua personalidade ousada e destemida.",
        inStock: 5,
      },
      {
        id: 3,
        name: "Dexter",
        image: "assets/img/dexter.png",
        price: (89.99).toFixed(2).replace(".", ","),
        installment: (89.99 / 5).toFixed(2).replace(".", ","),
        description:
          "Dexter, o cientista mirim de Dexter's Laboratory, com seu traje clássico de laboratório. Com sua inteligência fora do comum, Dexter adora inventar, mas também acaba se metendo em muitas confusões devido à sua atitude impulsiva.",
        inStock: 5,
      },
      {
        id: 4,
        name: "Freddie Mercury",
        image: "assets/img/freedie mercury.png",
        price: (119.99).toFixed(2).replace(".", ","),
        installment: (119.99 / 5).toFixed(2).replace(".", ","),
        description:
          "Freddie Mercury, o lendário cantor do Queen, com sua pose característica. Ele é lembrado como um dos maiores vocalistas da história do rock, e essa figura captura sua energia única no palco e seu estilo inconfundível.",
        inStock: 5,
      },
      {
        id: 5,
        name: "Ichigo",
        image: "assets/img/ichigo.png",
        price: (109.99).toFixed(2).replace(".", ","),
        installment: (109.99 / 5).toFixed(2).replace(".", ","),
        description:
          "Ichigo Kurosaki de Bleach, com sua espada e expressão decidida. Ichigo é um dos maiores heróis dos animes, com uma história de sacrifício e luta contra forças sobrenaturais, e esse Funko reflete sua coragem e determinação.",
        inStock: 5,
      },
      {
        id: 6,
        name: "Ironman",
        image: "assets/img/ironmark.png",
        price: (199.99).toFixed(2).replace(".", ","),
        installment: (199.99 / 5).toFixed(2).replace(".", ","),
        description:
          "Iron Man (Homem de Ferro), o herói da Marvel com sua armadura vermelha brilhante. Tony Stark, o gênio milionário, torna-se o icônico Iron Man após desenvolver uma armadura poderosa, e esse Funko reflete sua tecnologia avançada e coragem.",
        inStock: 5,
      },
      {
        id: 7,
        name: "Louis",
        image: "assets/img/louis.png",
        price: (89.99).toFixed(2).replace(".", ","),
        installment: (89.99 / 5).toFixed(2).replace(".", ","),
        description:
          'Louis de Entourage, sempre com sua atitude descontraída e estilo único. Louis é o empresário que gerencia a carreira de seu amigo Vince, sempre preocupado com o sucesso dos outros e mantendo seu charme e estilo inconfundíveis.',
        inStock: 5,
      },
      {
        id: 8,
        name: "Spiderman",
        image: "assets/img/spiderman.png",
        price: (149.99).toFixed(2).replace(".", ","),
        installment: (149.99 / 5).toFixed(2).replace(".", ","),
        description:
          "Spider-Man (Homem-Aranha), o herói da Marvel com sua famosa máscara e traje vermelho e azul. Peter Parker usa seus poderes para proteger Nova York e essa figura captura seu equilíbrio entre ser um herói e enfrentar a vida cotidiana.",
        inStock: 5,
      },
      {
        id: 9,
        name: "Thanos",
        image: "assets/img/thanos.png",
        price: (169.99).toFixed(2).replace(".", ","),
        installment: (169.99 / 5).toFixed(2).replace(".", ","),
        description:
          "Thanos, o vilão intergaláctico de Marvel, com a Manopla do Infinito. Sua missão de destruir metade da vida no universo com um estalar de dedos tornou-se uma das maiores histórias da cultura pop, e seu Funko captura a gravidade de sua presença.",
        inStock: 5,
      },
      {
        id: 10,
        name: "Michael Jackson",
        image: "assets/img/michael.png",
        price: (599.99).toFixed(2).replace(".", ","),
        installment: (599.99 / 5).toFixed(2).replace(".", ","),
        description: "Michael Jackson, o Rei do Pop, capturado em uma pose clássica com seu famoso casaco. Conhecido por sua música revolucionária e estilo único, Michael Jackson é uma lenda que continua a influenciar a música e a cultura.",
        inStock: 5,
      },
    ];

    const Funko = ref(funkos[0]);

    onMounted(() => {
      $(".carousel").slick({
        slidesToShow: 4, // diminui de 5 para 4, fica mais bonito em desktop
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: true, // Ativar setinhas
        dots: true, // bolinhas de navegação
        infinite: true, // loop infinito
        speed: 500, // velocidade da transição
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      });
    });
    

   return {
      funkos,
      Funko,
      cart,
      cartItems,
      showCart,
      increaseQuantity,
      decreaseQuantity,
      buyProduct,
      toggleCart,
      totalPrice,
      changeImage,
    };
  },
}).mount("#app");