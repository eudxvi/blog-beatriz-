// Uma entrada por semana, da mais antiga para a mais nova (a ordem real vem da data).
// Para publicar uma semana nova: acrescente um bloco no fim da lista e ponha as fotos na pasta "fotos".
//
// Campos de cada semana:
//   date        "AAAA-MM-DD"
//   title       opcional
//   paragraphs  lista de textos
//   photos      lista de { src, alt, caption (opcional) }; a primeira vira a moldura em arco
//   extras      opcional: { type: "quote", text, by } | { type: "list", title, items } |
//               { type: "ps", text } | { type: "link", label, href }
//   signoff     opcional, fecho acima da assinatura
window.POSTS = [
  {
    "date": "2026-10-24",
    "paragraphs": [
      "oi, amor!\nvc agr é minha namorada! tô tão feliz por isso.",
      "amo poder dizer que a mulher mais incrível do universo agr é a minha namorada, meu eterno amor, minha eterna amiga, minha futura e eterna esposa, minha futura e eterna mãe dos meus filhos, minha eterna princesa, minha eterna criança, meu eterno alicerce, meu eterno ponto de singularidade. enfim.",
      "poderia te definir por horas, dias ou anos, mas acho que a palavra amor consegue resumir tudo isso. vc é o significado de amor. toda nossa trajetória até aqui só mostra o quanto a vida foi generosa de ter nos encontrado. quero passar todos os dias sendo o seu amor e que Deus abençoe nossa vida juntos.",
      "Eu te amo!"
    ],
    "photos": [
      {
        "src": "fotos/2026-10-24-1.jpg",
        "alt": "Sentada na cama, com um balão de coração e um buquê de lírios; ao fundo, balões vermelhos formam a palavra amo."
      }
    ]
  }
];
