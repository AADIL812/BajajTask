const processData = (data) => {
    const odd_numbers = [];
    const even_numbers = [];
    const alphabets = [];
    const special_characters = [];
    let total_sum = 0;
    let alpha_string = "";

    data.forEach(item => {
        const itemStr = String(item);

        if (!isNaN(itemStr) && isFinite(item)) {
            const num = Number(itemStr);
            if (num % 2 === 0) {
                even_numbers.push(String(num));
            } else {
                odd_numbers.push(String(num));
            }
            total_sum += num;
        }
        else if (/^[a-zA-Z]+$/.test(itemStr)) {
            alphabets.push(itemStr.toUpperCase());
            alpha_string += itemStr;
        }
        else {
            special_characters.push(itemStr);
        }
    });

    const reversed_alpha = alpha_string.split('').reverse().join('');
    
    let alternating_caps_str = "";
    for (let i = 0; i < reversed_alpha.length; i++) {
        if (i % 2 === 0) {
            alternating_caps_str += reversed_alpha[i].toUpperCase();
        } else {
            alternating_caps_str += reversed_alpha[i].toLowerCase();
        }
    }

    return {
        odd_numbers,
        even_numbers,
        alphabets,
        special_characters,
        total_sum: String(total_sum),
        concat_string: alternating_caps_str
    };
}

module.exports = { processData };