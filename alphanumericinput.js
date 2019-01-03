document.getElementById("CNO").onkeypress = function (e) {

            //keyCode e which retornam o valor da tecla pressionada
            //link para referência https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
            var keycode = e.keyCode
            var keywhich = e.which

            // Verificação Firefox
            firefoxAllowedChars = (keywhich > 64 && keywhich < 91 || keywhich > 96 && keywhich < 123 || keywhich >= 48 && keywhich <= 57);
            fireFoxAllowedActions = (keycode >= 35 && keycode <= 40 || keycode == 46 || keycode == 9);
            firefoxAllowedSpace = (keycode == 8);

            if (navigator.userAgent.indexOf("Firefox") != -1) {
                if (keywhich == 0 && keycode != 0) {
                    return fireFoxAllowed;
                } else if (keywhich == 8 && keycode == 8) {
                    return firefoxAllowedSpace;
                } else if (keywhich != 0 && keycode == 0) {
                    return firefoxAllowedChars;
                }
            } else {
                // Verificação outros navegadores
                var chr = String.fromCharCode(keywhich);

                if ("1234567890qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM".indexOf(chr) < 0) {
                    return false;
                }
            }

        }
