// Vérifie que le mot de passe contient au moins 8 caractères
export function hasMinimumLength(password) {
    return password.length >= 8;
}

// Vérifie que le mot de passe contient au moins un caractère spécial
export function hasSpecialCharacter(password) {
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
    return specialCharPattern.test(password);
}

// Vérifie que le mot de passe contient au moins un chiffre
export function hasDigit(password) {
    return /\d/.test(password);
}

// Vérifie que le mot de passe ne contient pas "IPL" (insensible à la casse)
export function doesNotContainIPL(password) {
    return !/IPL/i.test(password);
}

// Fonction principale qui combine toutes les vérifications
export function passwordChecker(password) {
    return (
        hasMinimumLength(password) &&
        hasSpecialCharacter(password) &&
        hasDigit(password) &&
        doesNotContainIPL(password)
    );
}
