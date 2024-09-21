import { useState } from 'react';

function Home() {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const messages = {
      'A1B2C': 'Larissa, você é a guerreira que ilumina meus dias, a força que nunca me deixou desistir. Após 7 anos juntos, meu amor por você só cresce, e sou eternamente grato por ter a alma gêmea que Deus criou para mim. Juntos, somos imbatíveis!',
      'Z3X4Y': 'Minha querida irmã, ver você crescer foi uma das maiores alegrias da minha vida. Lembro do dia em que você deu seus primeiros passos e agora, como mãe, você terá a chance de viver essas experiências incríveis. Aproveite cada momento, pois eles trazem aprendizados valiosos!',
      'K9L8M': 'Fala, mano! Lembro de você pequeno, já querendo dominar o mundo da tecnologia. Não é à toa que dizem que você é minha cópia! Tenho muito ainda para te mostrar nesse vidão. E, para ser sincero, você joga melhor que eu! Continue brilhando!',
      'P7Q6R': 'Ao meu grande pai, um verdadeiro guerreiro. Sua sabedoria e exemplo moldaram meu caráter e meu respeito pela vida. Embora eu quisesse escrever milhões de palavras, saiba que sua presença foi fundamental para me ensinar os valores mais importantes. Te admiro profundamente!',
      'T2U3V': 'Minha querida mãe, sua superproteção é seu jeito carinhoso de demonstrar amor. Às vezes, pode ser até um pouco demais, mas sei que tudo que você faz é para nos ver felizes e bem. Sou grato por todo seu cuidado e apoio!',
      'D4E5F': 'E aí, parça! Lembro das nossas grandes ideias de abrir uma lan house e de toda a infância incrível que tivemos juntos. Apesar da distância, você continua sendo meu melhor amigo. Respeito e admiro muito você! Só nós sabemos as risadas que tivemos nessas aventuras malucas. EKPP!',
      'H8J9K': 'E aí, meu chapa! Lembro das zoeiras épicas que rolavam em Far Cry 2. Você tem uma história incrível quando o assunto é jogar! Só passei aqui pra te dar um alô e relembrar as risadas que tivemos. Vamos jogar de novo em breve?',
      'R1S2T': 'Fala, rei dos drifts de gol quadrado! Hahaha, quantas zoeiras rolavam com esse carro! As loucuras do passado ficaram na memória, e as risadas nunca vão acabar.',
      'F6G7H': '01010111 01101000 01100001 01110100 00100000 01101001 01110011 00100000 01110100 01101000 01100101 00100000 01110000 01110010 01100101 01100110 01100101 01110010 01110010 01100101 01100100 00100000 01100011 01101111 01100110 01100110 01100101 00100000 01101111 01100110 00100000 01110000 01110010 01101111 01100111 01110010 01100001 01101101 01101101 01100101 01110010 01110011 00111111 00100000 01001010 01100001 01110110 01100001 00100001',
      'M3N4O': 'Nunca pensei que um curso pudesse despertar tanta sede de conhecimento! A cada aula, fico ainda mais animado e motivado a mergulhar no conteúdo. A didática é simplesmente incrível, e o carinho e a qualidade que cercam cada material são inigualáveis. Participar desse curso é uma experiência fantástica, e a interação nos comentários torna tudo ainda mais especial!',
      '00': 'O que o zero disse ao um? "Você é sempre o primeiro a começar!"',
      '11': 'Por que o número 11 nunca fica triste? Porque ele sempre tem um "par!"',
      '22': 'O que o 22 disse ao 33? "Você é um "trio" de sorte!"',
      '33': 'Por que o 33 não gosta de escadas? Porque ele prefere "subir" de um jeito mais "fácil!"',
      '44': 'O que o 44 disse ao 55? "Você é "cinquenta" por cento do meu sucesso!"',
      '55': 'Por que o 55 é tão popular? Porque ele sempre "brilha" nas festas!',
      '66': 'O que o 66 disse ao 77? "Juntos somos uma "dupla" imbatível!"',
      '77': 'Por que o 77 nunca se sente só? Porque sempre tem o "par" do lado!',
      '88': 'O que o 88 disse ao 99? "Você é o "número" do sucesso!"',
      '99': 'Por que o 99 é tão confiante? Porque ele sempre sabe que pode "dobrar" as chances!',
      'A': 'Aventura é o que te espera! 🚀',
      'B': 'Brilhe como nunca antes! ✨',
      'C': 'Confiança é sua força! 💪',
      'D': 'Dê o melhor de você! 💯',
      'E': 'Esforço traz conquistas! 🏆',
      'F': 'Felicidade está ao seu alcance! 😊',
      'G': 'Grandeza está dentro de você! 🌟',
      'H': 'Harmonia e paz para você! 🕊️',
      'I': 'Inspire e seja inspirado! 🌱',
      'J': 'Jornada incrível te aguarda! 🛤️',
      'K': 'Conhecimento é poder! 📚',
      'L': 'Luz e amor no seu caminho! 🌈',
      'M': 'Motivação é a chave do sucesso! 🔑',
      'N': 'Nunca desista dos seus sonhos! 🌠',
      'O': 'Oportunidades surgem a todo momento! 💡',
      'P': 'Persistência traz resultados! 🏅',
      'Q': 'Qualidade é mais importante que quantidade! 🎯',
      'R': 'Resiliência te faz mais forte! 🛡️',
      'S': 'Siga seus instintos! 🧭',
      'T': 'Talento é o seu diferencial! 🌟',
      'U': 'União faz a força! 🤝',
      'V': 'Você é capaz de tudo que sonha! ✨',
      'W': 'Winners never quit, and quitters never win! 🏆',
      'X': 'X é a variável, você é a constante! 🔢',
      'Y': 'Yes! Você consegue! 👍',
      'Z': 'Zele por seus sonhos e os realize! 🌙',
      '0': 'Zero é o ponto de partida, comece agora! 🚦',
      '1': 'Um passo de cada vez e você chegará longe! 👣',
      '2': 'Dois caminhos, faça a escolha certa! 🛤️',
      '3': 'Três palavras: Você é incrível! 🎉',
      '4': 'Quatro estações, aproveite cada uma delas! 🌱🌞🍂❄️',
      '5': 'Cinco sentidos para aproveitar a vida! 👁️👂👃👄✋',
      '6': 'Seis chances de fazer a diferença! 🔄',
      '7': 'Sete é o número da sorte, aproveite! 🍀',
      '8': 'Oito caminhos para o sucesso, escolha o seu! 🛤️',
      '9': 'Nove razões para nunca desistir! 💪',
    };

    console.log('Código recebido:', code); // Debug
    if (code && messages[code.toUpperCase()]) {
      console.log('Código válido!'); // Debug
      setMessage(messages[code.toUpperCase()]);
    } else {
      console.log('Código inválido!'); // Debug
      setMessage('Acredite em si mesmo e todas as coisas serão possíveis! 💪');
    }

    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 100000); // Tempo aumentado para 10 segundos

  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Cód."
          maxLength={5} // Ajustado para o tamanho correto dos códigos
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      {message && (
        <p className={`message ${showMessage ? 'show' : ''}`}>{message}</p>
      )}
    </div>
  );
}

export default Home;