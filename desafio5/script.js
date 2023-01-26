        var n_numbers = [];
        var res = document.getElementById('res');

        
        function adicionar(){

            var num = document.getElementById('txtn').value;
            var tab = document.getElementById('hist');
            res.innerText = "";

            if (num.length > 0 && num > 0 && num <= 100 && find_boolean(n_numbers, num)){

                var n = Number(num);
                n_numbers.push(n); // numero inserido na array

                var item = document.createElement('option');
                item.text = `O valor ${n} foi adicionado`;
                tab.appendChild(item); // texto inserido no select como tag option

            } else {

                window.alert('Por favor, digite um número válido!');
            
            }           
        }

        function resultado(){

            var soma = n_numbers.reduce(function(soma, i) { return soma + i; });
            var media = soma / n_numbers.length;

            res.innerHTML = "<p>" + `Ao todo foram digitados ${n_numbers.length} elementos` + "</p>"
            + "<p>" + `O maior valor informado foi ${Math.max(...n_numbers)}` + "</p>"
            + "<p>" + `O menor valor informado foi ${Math.min(...n_numbers)}` + "</p>"
            + "<p>" + `A soma de todos os valores da array é ${soma}` + "</p>"
            + "<p>" + `A média entre todos os valores é ${media}`  + "</p>";
            
        }

        function find_boolean(array, element){

            if (array.length > 0){
            
                for (var i = 0; i < array.length; i++){
            
                    if (array[i] == element) {
            
                        return false
            
                    }
                }
            
                return true;

            } else {

                return true;
            
            }
        }