//s is the string you want to decrypt.
//k is the number of shifts to make to the right.
/* 
    In cryptography, a Caesar cipher, also known as Caesar's cipher, 
    the shift cipher, Caesar's code or Caesar shift, 
    is one of the simplest and most widely known encryption techniques. 
    It is a type of substitution cipher in which each letter 
    in the plaintext is replaced by a letter 
    some fixed number of positions down the alphabet. 
    For example, with a left shift of 3, D would be replaced 
    by A, E would become B, and so on. 
    The method is named after Julius Caesar, 
    who used it in his private correspondence.
    In the case of a rotation by 3, w, x, y and z 
    would map to z, a, b and c.
*/
s = 'abcdefghijklmnop';
k = 5
function caesarCipher(s, k) {
  
    let res = [];
    
    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i);
        
        if (code > 64 && code < 91 ) { // 65 = A, 90 = Z
            let let_enc_code = code + k;
            while (let_enc_code > 90) {
                let_enc_code = (let_enc_code - 90) + 64;
            }
            
            res.push(String.fromCharCode(let_enc_code));
        }
        else if (code > 96 && code < 123) { // 97 = a, 122 = z
            let let_enc_code = code + k;
            while (let_enc_code > 122) {
                let_enc_code = (let_enc_code - 122) + 96;
            }
            
            res.push(String.fromCharCode(let_enc_code));
        }
        
        else {
            res.push(s[i]);
        }
        
    }

    return res.join('');
}

//Output to the console
console.log(caesarCipher(s, k));