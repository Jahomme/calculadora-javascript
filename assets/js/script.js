/* function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
            this.pressionaBcksp();
        }, // Ao chamar esse método, você executa as funcionalidades.

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },// Esse método serve para que você capture o click do 'enter' e execute a realização da conta.

        pressionaBcksp() {
            this.display.addEventListener('keypress', e => {
                if (e.keyCode === 8) {
                    this.apagaUm();
                }
            });
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('Conta Inválida!');
                    return;
                }

                this.display.value = String(conta);
            } catch(e) {
                alert('Conta Inválida!');
                return;
            }
        }, // Este method realiza a conta da seguinte maneira. É declarada e definida a let conta com o valor que estiver no display. Após isso usamos o try para que redefinimos a let conta para eval(conta), o eval basicamente irá pegar as strings e executar como javascript, esse código portanto é perigoso pois alguém poderia usar isso a seu favor para executar códigos que mostrem falhas na segurança do seu código. A condição é que se conta for um valor false, retorna um alerta, se não retorna no display o valor da conta.
        
        clearDisplay() {
            this.display.value = '';
        }, // Method que apaga todos os valores do display

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        }, // Method que apaga só um digito do display.

        btnParaDisplay(valor) {
            this.display.value += valor;
        },// Essa função faz com que cada vez que você clique em um btn-num, os valores sejam concatenados para que o eval possa executar o código.

        cliqueBotoes() {
            document.addEventListener('click', e => { 
                const el = e.target;
                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                    
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
                this.display.focus(); // o focus irá fazer com que cada vez que seja executado o código, o focus sempre volte para o display
            });
        }, // Quando aplicamos a função neste caso do document.addEventListener, o this passa a se referir ao document não ao objeto, mas quando usamos arrow function, o comportamento do this não muda, portanto ele continua sendo do objeto, no caso o criador do elemento que é o próprio objeto. Veja, a função é uma factory function, e ao armazenar o objeto na cosnt calculadora, o this passa a se referur a calculadora. Esse method irá condicionar para a execução dos botões, então para cada botão teremos um if que irá capturar a classe de botão, portanto se o botão for de determinada classe, ele irá executar a função do botão em questão.

        

    };
}

const calculadora = criaCalculadora(); // O objeto é criado e cada método dele faz com que a calculadora seja funcional, porém, para que você realize as contas  você deve escrever coforme javascript.
calculadora.inicia(); */


function Calculadora() {
    this.display = document.querySelector('.display');
    this.btnClear = document.querySelector('.btn-clear');

    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
        this.pressionaBsckp();
    };

    this.pressionaEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.keycode === 13) {
                this.realizaConta();
            }
        });
    };

    this.pressionaBsckp = () => {
        this.display.addEventListener('keypress', e => {
            if (e.keycode === 8) {
                this.apagaUm();
            }
        })
    };

    this.realizaConta = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta);

            if (!conta) {
                alert('Conta Inválida!');
                return;
            }

            this.display.value = String(conta);
        } catch (e) {
            alert('Conta Inválida!');
            return;
        }
    };

    this.clearDisplay = () => this.display.value = '';


    this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);


    this.btnParaDisplay = valor => {
        this.display.value += valor;
        this.display.focus();
    }

    this.cliqueBotoes = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
            if (el.classList.contains('btn-clear')) this.clearDisplay();
            if (el.classList.contains('btn-del')) this.apagaUm();
            if (el.classList.contains('btn-eq')) this.realizaConta();
            
        });
    };

}

const calculadora = new Calculadora();
calculadora.inicia();