// Function 1
function calculateTax (amount) {
    let taxRate = 0.1
    let taxValue = (amount * taxRate)
    return taxValue;
}

// Function 2
function convertToUpperCase (text){
    return text.toUpperCase()

}

//Function 3
function findMaximum (num1, num2) {
    if (num1 > num2) {
        return num1
} else { 
    return num2
}
}

//Function 4
function isPalindrome (word) {
    const reverse = word.split('').reverse('').join('')
    if (word === reverse){
        return true
    } else {
        return false
    }
}

//Function 5
function calculateDiscountedPrice (originalPrice, discountPercentage) {
    let discountAmount = originalPrice * (discountPercentage / 100);
    let finalPrice = originalPrice - discountAmount;
    return finalPrice
}




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };