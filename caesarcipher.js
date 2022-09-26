//s is the string you want to decrypt.
//k is the number of shifts to make in the clockwise direction.
s = 'abcdefghijklmnop';
k = 5
function caesarCipher(s, k) {
  
    let res = [];
    
    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i);
        
        if (code > 64 && code < 91) {
            let let_enc_code = code + k;
            while (let_enc_code > 90) {
                let_enc_code = (let_enc_code - 90) + 64;
            }
            
            res.push(String.fromCharCode(let_enc_code));
        }
        else if (code > 96 && code < 123) {
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