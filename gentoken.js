var jwt = require("jsonwebtoken");

private_key='-----BEGIN EC PRIVATE KEY-----\nMHcCAQEEIOiTxhv2MTDNmUg/m3PhbVaDiwIyo+dTlH7/KVaAKK3BoAoGCCqGSM49\nAwEHoUQDQgAEwTNEhyZ22JnNlfnuq3LmKITEwqfJ0RylCYmT2zYYv1Y7u32/4rjy\nVKEsRaTU5IymbLbsjr09NUTEU9wtrG6f8Q==\n-----END EC PRIVATE KEY-----';

claims = {
    'name': 'Daniel Raichert',
    'given_name': 'Daniel',
    'family_name': 'Raichert',
    'email': 'daniel.raichert@glia.com',
    'sub': 'john.doe',
    'exp': Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 5,
    'iat': Math.floor(Date.now() / 1000)
}

token=jwt.sign(claims, private_key, {algorithm: "ES256"});

console.log(token)